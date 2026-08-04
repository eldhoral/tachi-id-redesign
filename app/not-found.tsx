import { NotFoundPage } from '@/components/pages/not-found-page'

// ponytail: one 404 for both languages, in Indonesian. A nested
// app/en/not-found.tsx is ignored by Next here — only the root boundary is
// emitted — and a catch-all under /en would serve English at HTTP 200, which
// is worse than an untranslated page. Revisit if Next honours nested
// boundaries; NotFoundPage already accepts a locale.
export default function NotFound() {
  return <NotFoundPage locale="id" />
}
