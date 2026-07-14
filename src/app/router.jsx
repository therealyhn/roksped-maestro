/* eslint-disable react-refresh/only-export-components -- This module exports route configuration, not React components. */
import { lazy, Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import AppShell from '../components/layout/AppShell.jsx'

const HomePage = lazy(() => import('../pages/HomePage.jsx'))
const AboutPage = lazy(() => import('../pages/AboutPage.jsx'))
const ServicesPage = lazy(() => import('../pages/ServicesPage.jsx'))
const ContactPage = lazy(() => import('../pages/ContactPage.jsx'))
const LegalPage = lazy(() => import('../pages/LegalPage.jsx'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage.jsx'))

function LazyPage({ Page }) {
  return (
    <Suspense fallback={null}>
      <Page />
    </Suspense>
  )
}

export const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      { index: true, element: <LazyPage Page={HomePage} /> },
      { path: 'o-nama', element: <LazyPage Page={AboutPage} /> },
      { path: 'usluge', element: <LazyPage Page={ServicesPage} /> },
      { path: 'kontakt', element: <LazyPage Page={ContactPage} /> },
      {
        path: 'politika-privatnosti',
        element: <LazyPage Page={LegalPage} />,
      },
      {
        path: 'uslovi-koriscenja',
        element: <LazyPage Page={LegalPage} />,
      },
      { path: '*', element: <LazyPage Page={NotFoundPage} /> },
    ],
  },
])
