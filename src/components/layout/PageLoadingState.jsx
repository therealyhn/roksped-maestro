import CmsErrorState from '../ui/CmsErrorState.jsx'

function PageLoadingState({error = null, onRetry}) {
  return (
    <main className="flex min-h-[100dvh] items-center justify-center px-5 py-10" id="main-content">
      {error ? (
        <CmsErrorState onRetry={onRetry} />
      ) : (
        <p aria-live="polite" role="status">Učitavanje sadržaja…</p>
      )}
    </main>
  )
}

export default PageLoadingState
