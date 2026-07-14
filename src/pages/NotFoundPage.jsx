import {Link} from 'react-router-dom'

function NotFoundPage() {
  return <section className="grid min-h-[70dvh] place-items-center bg-brand-canvas px-gutter-fluid py-32 text-center"><div><p className="text-[15px] text-brand-body-muted">404</p><h1 className="mt-3 text-[55px] font-medium leading-none tracking-display">Stranica nije pronađena</h1><p className="mt-5 text-brand-body-muted">Tražena stranica ne postoji.</p><Link className="mt-8 inline-flex h-[43px] items-center rounded-button bg-brand-ink px-[18px] text-[15px] text-white" to="/">Početna</Link></div></section>
}

export default NotFoundPage
