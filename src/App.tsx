import { Capabilities } from '@/components/sections/capabilities'
import { Cases } from '@/components/sections/cases'
import { Contact } from '@/components/sections/contact'
import { Experience } from '@/components/sections/experience'
import { Hero } from '@/components/sections/hero'
import { SiteFooter } from '@/components/sections/site-footer'
import { SiteHeader } from '@/components/sections/site-header'

export default function App() {
  return (
    <>
      {/* 键盘用户可直接跳过导航 */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-pill focus:bg-surface-3 focus:px-4 focus:py-2 focus:text-sm focus:text-fg"
      >
        跳到主要内容
      </a>

      <SiteHeader />

      <main id="main">
        <Hero />
        <Capabilities />
        <Experience />
        <Cases />
        <Contact />
      </main>

      <SiteFooter />
    </>
  )
}
