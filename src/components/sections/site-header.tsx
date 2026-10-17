import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { navLinks, site } from '@/data/content'
import { cn } from '@/lib/cn'

/**
 * 顶部导航：滚动后加背景与描边，避免与 Hero 文字打架。
 * 手机上只保留姓名 + 一个"联系"入口，减少点击成本。
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 32,
    restDelta: 0.001,
  })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-[240ms] ease-out',
        scrolled
          ? 'border-b border-line bg-bg/72 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      {/* 阅读进度：2px，跟随滚动，不做循环动画 */}
      <motion.div
        aria-hidden="true"
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-brand-from to-brand-to"
      />

      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 md:h-18 md:px-8">
        <a
          href="#top"
          className="font-mono text-xs tracking-[0.2em] text-fg-muted transition-colors duration-[160ms] hover:text-fg"
        >
          {site.namePinyin}
        </a>

        <nav aria-label="页面导航" className="flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-pill px-3 py-2 text-sm text-fg-muted transition-colors duration-[160ms] hover:bg-surface-2 hover:text-fg md:px-4"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
