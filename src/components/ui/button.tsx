import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface ButtonProps {
  children: ReactNode
  /** 传 href 渲染为 <a>，否则渲染为 <button> */
  href?: string
  variant?: 'primary' | 'ghost'
  className?: string
  onClick?: () => void
  ariaLabel?: string
}

const base =
  'group inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3 text-sm font-medium transition-[transform,box-shadow,background-color,border-color] duration-[160ms] ease-out active:translate-y-px'

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-gradient-to-r from-brand-from to-brand-to text-[#1a0b04] shadow-[0_8px_24px_-8px_rgba(255,122,69,.55)] hover:shadow-[0_12px_32px_-8px_rgba(255,122,69,.7)]',
  ghost:
    'border border-line-strong bg-surface-2/60 text-fg hover:border-fg-muted/40 hover:bg-surface-3',
}

/** 全站按钮：只允许这两种变体，避免色彩失控（规范 §1.3） */
export function Button({
  children,
  href,
  variant = 'primary',
  className,
  onClick,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(base, variants[variant], className)

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
