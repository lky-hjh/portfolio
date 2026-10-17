import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface GlassCardProps {
  children: ReactNode
  /** 是否响应 hover（可点/可探索的卡片才开） */
  interactive?: boolean
  className?: string
}

/**
 * 暗色玻璃卡片：靠"顶部内高光 + 描边提亮"制造层级，
 * 不用黑色投影（暗色下黑色投影等于看不见）—— 规范 §1.7
 */
export function GlassCard({
  children,
  interactive = false,
  className,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'shadow-elevate relative overflow-hidden rounded-card border border-line bg-surface-2/80 backdrop-blur-sm',
        interactive &&
          'transition-[transform,border-color,background-color] duration-[160ms] ease-out hover:-translate-y-0.5 hover:border-line-strong hover:bg-surface-3',
        className,
      )}
    >
      {children}
    </div>
  )
}
