import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { BusinessGroupPage } from '@/components/pages/business-group-page'
import { GROUPS, getGroup } from '@/lib/business-groups'

export function generateStaticParams() {
  return GROUPS.map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const group = getGroup((await params).slug)
  if (!group) return {}
  const title = `${group.name} — Tachi Group`
  const description = group.copy.en.text
  const images = [
    { url: `/og/${group.slug}.jpg`, width: 1200, height: 630, alt: group.name },
  ]
  return {
    title,
    description,
    alternates: {
      canonical: `/en/bisnis/${group.slug}`,
      languages: {
        id: `/bisnis/${group.slug}`,
        en: `/en/bisnis/${group.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      type: 'article',
      locale: 'en_US',
      images,
    },
    twitter: { card: 'summary_large_image', title, images },
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const group = getGroup((await params).slug)
  if (!group) notFound()
  return <BusinessGroupPage locale="en" group={group} />
}
