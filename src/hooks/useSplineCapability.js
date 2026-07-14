import { useEffect, useState } from 'react'
import { hasApprovedSplineViewportRule, splineConfig } from '../lib/spline/config.js'
import { getReducedMotionPreference } from './useReducedMotionPreference.js'

export function getSaveDataPreference(navigatorRef) {
  return navigatorRef?.connection?.saveData === true
}

export function getViewportWidth(windowRef) {
  return Number.isFinite(windowRef?.innerWidth) ? windowRef.innerWidth : 0
}

export function supportsWebGL(documentRef) {
  if (!documentRef?.createElement) {
    return false
  }

  try {
    const canvas = documentRef.createElement('canvas')

    return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'))
  } catch {
    return false
  }
}

export function evaluateSplineCapability({
  hasSceneUrl,
  hasViewportRule,
  minimumViewportWidth,
  prefersReducedMotion,
  saveData,
  supportsWebGL: webGlSupported,
  viewportWidth,
}) {
  if (prefersReducedMotion) {
    return { isSupported: false, reason: 'reduced-motion' }
  }

  if (saveData) {
    return { isSupported: false, reason: 'save-data' }
  }

  if (!hasSceneUrl) {
    return { isSupported: false, reason: 'scene-url-missing' }
  }

  if (!hasViewportRule) {
    return { isSupported: false, reason: 'viewport-rule-unapproved' }
  }

  if (viewportWidth < minimumViewportWidth) {
    return { isSupported: false, reason: 'viewport-too-small' }
  }

  if (!webGlSupported) {
    return { isSupported: false, reason: 'webgl-unavailable' }
  }

  return { isSupported: true, reason: null }
}

export function getSplineCapabilitySnapshot(
  config = splineConfig,
  environment = globalThis,
) {
  const windowRef = environment.window

  return evaluateSplineCapability({
    hasSceneUrl: Boolean(config.sceneUrl),
    hasViewportRule: hasApprovedSplineViewportRule(config),
    minimumViewportWidth: config.minimumViewportWidth,
    prefersReducedMotion: getReducedMotionPreference(windowRef?.matchMedia),
    saveData: getSaveDataPreference(environment.navigator),
    supportsWebGL: supportsWebGL(environment.document),
    viewportWidth: getViewportWidth(windowRef),
  })
}

function useSplineCapability(config = splineConfig) {
  const [capability, setCapability] = useState(() =>
    getSplineCapabilitySnapshot(config),
  )

  useEffect(() => {
    const windowRef = globalThis.window

    if (!windowRef) {
      return undefined
    }

    const updateCapability = () =>
      setCapability(getSplineCapabilitySnapshot(config))
    const mediaQueryList =
      typeof windowRef.matchMedia === 'function'
        ? windowRef.matchMedia('(prefers-reduced-motion: reduce)')
        : null
    const connection = globalThis.navigator?.connection

    updateCapability()
    windowRef.addEventListener('resize', updateCapability, { passive: true })
    mediaQueryList?.addEventListener('change', updateCapability)
    connection?.addEventListener?.('change', updateCapability)

    return () => {
      windowRef.removeEventListener('resize', updateCapability)
      mediaQueryList?.removeEventListener('change', updateCapability)
      connection?.removeEventListener?.('change', updateCapability)
    }
  }, [config])

  return capability
}

export default useSplineCapability
