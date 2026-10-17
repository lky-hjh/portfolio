import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface PillProps {
  children: ReactNode
  tone?: 'default' | 'brand' | 'cool'
  className?: string
}

const tones: Record<NonNullable<PillProps['tone']>, string> = {
  default: 'border-line bg-surface-2 text-fg-muted',
  brand: 'border-brand/25 bg-brand/10 text-brand',
  cool: 'border-cool/25 bg-cool/10 text-cool',
}

/** 小标签：技能、分类、状态 */
export function Pill({ children, tone = 'default', className }: PillProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-pill border px-3 py-1 font-mono text-xs tracking-wide',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
