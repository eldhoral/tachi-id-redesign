import Image from 'next/image'
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
  const title = tone === 'light' ? 'text-white' : 'text-foreground'
  const sub = tone === 'light' ? 'text-white/70' : 'text-muted-foreground'

  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <Image
        src={tone === 'light' ? '/logo-mark-white.png' : '/logo-mark.png'}
        alt=""
        width={32}
        height={32}
        className="h-8 w-8 shrink-0 object-contain"
      />
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
