function readOptionalSceneUrl(value) {
  const sceneUrl = value?.trim()

  return sceneUrl || null
}

const viteEnvironment = import.meta.env ?? {}

export const splineConfig = Object.freeze({
  sceneUrl: readOptionalSceneUrl(viteEnvironment.VITE_SPLINE_SCENE_URL),
  minimumViewportWidth: null,
})

export function hasApprovedSplineViewportRule(config = splineConfig) {
  return Number.isFinite(config.minimumViewportWidth) && config.minimumViewportWidth > 0
}
