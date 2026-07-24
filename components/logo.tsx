import { cn } from '@/lib/utils'

export function Logo({
  className,
  showText = true,
  tone = 'brand',
}: {
  className?: string
  showText?: boolean
  tone?: 'brand' | 'light'
}) {
  const mark = tone === 'light' ? 'text-white' : 'text-primary'
  const title = tone === 'light' ? 'text-white' : 'text-foreground'
  const sub = tone === 'light' ? 'text-white/70' : 'text-muted-foreground'

  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <svg
        viewBox="0 0 48 48"
        className={cn('h-8 w-8 shrink-0', mark)}
        aria-hidden="true"
        fill="none"
      >
        <path
          d="M24 3 5 13v22l19 10 19-10V13L24 3Z"
          fill="currentColor"
          fillOpacity={0.12}
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M24 14v20M15 20l9-6 9 6"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="28" r="3.5" fill="currentColor" />
      </svg>
      {showText && (
        <span className="flex flex-col leading-none">
          <span className={cn('font-display text-lg font-bold tracking-tight', title)}>
            TACHI GROUP
          </span>
          <span className={cn('text-[0.6rem] font-medium tracking-[0.2em]', sub)}>
            PT TANTRA HACHI GROUP
          </span>
        </span>
      )}
    </span>
  )
}
