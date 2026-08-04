'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { cn } from '@/lib/utils'
import {
  getDictionary,
  localePath,
  otherLocale,
  type Locale,
} from '@/lib/i18n'

/** Same page in the other language, preserving the path after the prefix. */
function switchedPath(pathname: string, locale: Locale) {
  const bare = pathname.replace(/^\/en(?=\/|$)/, '') || '/'
  return localePath(otherLocale(locale), bare)
}

export function SiteHeader({ locale }: { locale: Locale }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname() ?? '/'
  const t = getDictionary(locale)
  const home = localePath(locale, '/')

  const NAV_LINKS = [
    { label: t.nav.home, href: `${home}#home` },
    { label: t.nav.about, href: `${home}#tentang` },
    { label: t.nav.brandIdentity, href: localePath(locale, '/brand-identity') },
    { label: t.nav.business, href: `${home}#bisnis` },
    { label: t.nav.clients, href: `${home}#klien` },
    { label: t.nav.contact, href: `${home}#kontak` },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const localeToggle = (
    <a
      href={switchedPath(pathname, locale)}
      hrefLang={otherLocale(locale)}
      aria-label={t.switchLabel}
      className={cn(
        'rounded-md px-2.5 py-2 text-sm font-semibold transition-colors',
        scrolled
          ? 'text-foreground/70 hover:bg-secondary hover:text-foreground'
          : 'text-white/75 hover:bg-white/10 hover:text-white',
      )}
    >
      {getDictionary(otherLocale(locale)).localeLabel}
    </a>
  )

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/70 bg-background/85 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href={home} aria-label={t.nav.homeAria}>
          <Logo tone={scrolled ? 'brand' : 'light'} />
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-md px-3 py-2 text-sm font-medium transition-colors',
                scrolled
                  ? 'text-foreground/80 hover:bg-secondary hover:text-foreground'
                  : 'text-white/85 hover:bg-white/10 hover:text-white',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {localeToggle}
          <a
            href={`${home}#kontak`}
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
          >
            {t.nav.cta}
          </a>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          {localeToggle}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              'inline-flex items-center justify-center rounded-md p-2',
              scrolled || open ? 'text-foreground' : 'text-white',
            )}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground/90 transition-colors hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`${home}#kontak`}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-base font-semibold text-primary-foreground"
            >
              {t.nav.cta}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
