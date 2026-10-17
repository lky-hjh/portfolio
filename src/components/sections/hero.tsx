import { ArrowDownRight, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GridBackdrop } from '@/components/ui/grid-backdrop'
import { Reveal } from '@/components/ui/reveal'
import { metrics, site } from '@/data/content'

/**
 * Hero：3 秒内建立"她是谁、解决什么问题"（规范 §6 第 1 行）
 * 背景全部纯 CSS，首屏无图片、无 WebGL 请求。
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[92svh] flex-col justify-center overflow-hidden px-5 pt-24 pb-16 md:px-8 md:pt-32"
    >
      <GridBackdrop />

      {/* 唯一允许的循环动画：一道斜向激光线 + 极弱光晕（纯 CSS，不占主线程） */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-[58%] -z-10 h-[88vh] w-8 rotate-[16deg] md:left-[64%]"
      >
        <div className="animate-beam h-full w-full bg-gradient-to-b from-transparent via-brand/15 to-transparent blur-[16px]" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-[58%] -z-10 h-[88vh] w-px rotate-[16deg] bg-gradient-to-b from-transparent via-brand/70 to-transparent md:left-[64%]"
      />

      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-xs tracking-[0.18em] text-brand">
              {site.roleEn}
            </span>
            <span
              className="hidden h-px w-6 shrink-0 bg-line-strong sm:block"
              aria-hidden="true"
            />
            <span className="font-mono text-xs tracking-[0.18em] text-fg-muted">
              {site.role}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.07}>
          <h1
            id="hero-title"
            className="mt-6 text-display font-bold tracking-tight"
          >
            <span className="text-gradient">{site.name}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-4 max-w-2xl text-balance text-h2 font-medium text-fg">
            {site.headline}
          </p>
        </Reveal>

        <Reveal delay={0.21}>
          <p className="mt-6 max-w-xl text-body text-fg-muted">
            {site.intro[0]}
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button href="#experience">
              看我的经历
              <ArrowDownRight
                className="size-4 transition-transform duration-[160ms] group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                aria-hidden="true"
              />
            </Button>
            <Button href="#contact" variant="ghost">
              <Mail className="size-4" aria-hidden="true" />
              联系我
            </Button>
          </div>
        </Reveal>

        {/* 关键数字：数据未补时显示 "—"，不编造 */}
        <Reveal delay={0.35}>
          <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-4 border-t border-line pt-8 md:mt-20 md:gap-8">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="sr-only">{metric.label}</dt>
                <dd>
                  <span
                    className={
                      metric.pending
                        ? 'font-mono text-2xl font-semibold text-fg-subtle md:text-3xl'
                        : 'font-mono text-2xl font-semibold text-fg md:text-3xl'
                    }
                  >
                    {metric.value}
                  </span>
                  <span className="mt-2 block text-xs leading-relaxed text-fg-muted md:text-sm">
                    {metric.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
