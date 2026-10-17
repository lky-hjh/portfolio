import { GlassCard } from '@/components/ui/glass-card'
import { Pill } from '@/components/ui/pill'
import { Reveal } from '@/components/ui/reveal'
import { Section } from '@/components/ui/section'
import { cases, sections } from '@/data/content'

/** 案例字段固定四段式：背景 → 目标 → 做法 → 结果（规范 §6.1） */
const fieldLabels = [
  ['background', '背景'],
  ['goal', '目标'],
  ['action', '做法'],
] as const

export function Cases() {
  return (
    <Section
      id="cases"
      index={sections.cases.index}
      label={sections.cases.label}
      title={sections.cases.title}
      description={sections.cases.description}
    >
      <div className="flex flex-col gap-5">
        {cases.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <GlassCard className="p-6 md:p-10">
              <div className="flex items-center justify-between gap-4">
                <Pill tone="brand">{item.tag}</Pill>
                <span
                  aria-hidden="true"
                  className="font-mono text-xs tracking-[0.2em] text-fg-subtle"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="mt-6 max-w-2xl text-h2 font-semibold text-balance text-fg">
                {item.title}
              </h3>

              <dl className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-3">
                {fieldLabels.map(([key, label]) => (
                  <div key={key}>
                    <dt className="font-mono text-xs tracking-[0.18em] text-fg-subtle uppercase">
                      {label}
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-fg-muted">
                      {item[key]}
                    </dd>
                  </div>
                ))}
              </dl>

              {/* 结果单独一条：它是招聘方唯一真正想看的字段 */}
              <dl className="mt-8 grid gap-y-2 border-t border-line pt-6">
                <dt className="font-mono text-xs tracking-[0.18em] text-fg-subtle uppercase">
                  结果
                </dt>
                <dd>
                  {item.result ? (
                    <span className="text-base font-medium text-fg">
                      {item.result}
                    </span>
                  ) : (
                    <span className="text-sm text-fg-subtle">
                      数据待补充 —— 填入可量化的结果（人数 / 转化 / GMV / 播放量）
                    </span>
                  )}
                </dd>
              </dl>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
