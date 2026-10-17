import {
  Film,
  Mic,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Video,
  Workflow,
  type LucideIcon,
} from 'lucide-react'
import { GlassCard } from '@/components/ui/glass-card'
import { Reveal } from '@/components/ui/reveal'
import { Section } from '@/components/ui/section'
import { capabilities, sections, type IconKey } from '@/data/content'

const iconMap: Record<IconKey, LucideIcon> = {
  users: Users,
  target: Target,
  chart: TrendingUp,
  sparkles: Sparkles,
  video: Video,
  clapperboard: Film,
  radio: Mic,
  handshake: Workflow,
}

/**
 * 能力矩阵：Bento 网格（规范 §1 布局约定）
 * 桌面 6 列，wide 占 3、普通占 2，恰好 3 行填满；
 * 手机单列，平板双列 —— 不做横向滚动。
 */
export function Capabilities() {
  return (
    <Section
      id="capabilities"
      index={sections.capabilities.index}
      label={sections.capabilities.label}
      title={sections.capabilities.title}
      description={sections.capabilities.description}
    >
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6">
        {capabilities.map((item, i) => {
          const Icon = iconMap[item.icon]
          return (
            <li
              key={item.title}
              className={
                item.wide
                  ? 'sm:col-span-2 md:col-span-3'
                  : 'sm:col-span-1 md:col-span-2'
              }
            >
              <Reveal delay={i * 0.05} className="h-full">
                <GlassCard
                  interactive
                  className="group h-full p-6 md:p-7"
                >
                  <div className="flex size-10 items-center justify-center rounded-chip border border-line bg-surface-3/60 text-fg-muted transition-colors duration-[160ms] group-hover:border-brand/30 group-hover:text-brand">
                    <Icon className="size-[18px]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-fg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {item.desc}
                  </p>
                </GlassCard>
              </Reveal>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
