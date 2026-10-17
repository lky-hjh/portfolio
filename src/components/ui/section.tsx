import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { Reveal } from '@/components/ui/reveal'

interface SectionProps {
  id: string
  /** 序号，如 "01" —— 制造编辑感与秩序感 */
  index: string
  /** 等宽大写小标签 */
  label: string
  title: ReactNode
  description?: string
  children: ReactNode
  className?: string
}

/** 统一区块骨架：序号 + 标签 + 标题 + 内容 */
export function Section({
  id,
  index,
  label,
  title,
  description,
  children,
  className,
}: SectionProps) {
  const titleId = `${id}-title`

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={cn(
        'relative mx-auto w-full max-w-6xl px-5 py-20 md:px-8 md:py-28',
        className,
      )}
    >
      <Reveal>
        <div className="mb-10 flex items-center gap-4 md:mb-14">
          <span className="font-mono text-xs tracking-[0.2em] text-fg-subtle">
            {index}
          </span>
          <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-fg-muted">
            {label}
          </span>
        </div>

        <h2
          id={titleId}
          className="max-w-3xl text-h1 font-semibold text-balance text-fg"
        >
          {title}
        </h2>

        {description ? (
          <p className="mt-4 max-w-2xl text-body text-fg-muted">{description}</p>
        ) : null}
      </Reveal>

      <div className="mt-12 md:mt-16">{children}</div>
    </section>
  )
}
