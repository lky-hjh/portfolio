import { GlassCard } from '@/components/ui/glass-card'
import { Reveal } from '@/components/ui/reveal'
import { Section } from '@/components/ui/section'
import { education, experiences, sections } from '@/data/content'

/**
 * 实习经历：左侧等宽时间列 + 右侧内容，移动端上下堆叠。
 * 每条职责前用暖色短横线做视觉锚点，避免满屏项目符号。
 */
export function Experience() {
  return (
    <Section
      id="experience"
      index={sections.experience.index}
      label={sections.experience.label}
      title={sections.experience.title}
      description={sections.experience.description}
    >
      <div className="flex flex-col gap-4 md:gap-5">
        {experiences.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.08}>
            <GlassCard className="p-6 md:p-8">
              <div className="grid gap-6 md:grid-cols-[13rem_1fr] md:gap-10">
                {/* 左：时间 + 公司 */}
                <div>
                  <p className="font-mono text-xs tracking-wide text-brand">
                    {job.period}
                  </p>
                  <h3 className="mt-3 text-base font-semibold text-fg">
                    {job.company}
                  </h3>
                  <p className="mt-1 text-sm text-fg-muted">{job.role}</p>
                </div>

                {/* 右：职责 */}
                <ul className="flex flex-col gap-3">
                  {job.highlights.map((line) => (
                    <li
                      key={line}
                      className="relative pl-5 text-sm leading-relaxed text-fg-muted"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute top-[0.65em] left-0 h-px w-2.5 bg-brand/60"
                      />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </GlassCard>
          </Reveal>
        ))}

        {/* 教育背景：信息未补齐时不编造，直接标注待补充 */}
        <Reveal delay={0.16}>
          <GlassCard className="p-6 md:p-8">
            <div className="grid gap-6 md:grid-cols-[13rem_1fr] md:gap-10">
              <div>
                <p className="font-mono text-xs tracking-wide text-fg-subtle">
                  {education.pending ? '— — — —' : education.period}
                </p>
                <h3 className="mt-3 text-base font-semibold text-fg-muted">
                  教育背景
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-fg-subtle">
                {education.pending
                  ? '待补充：学校 / 专业 / 在校时间'
                  : `${education.school} · ${education.major}`}
              </p>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  )
}
