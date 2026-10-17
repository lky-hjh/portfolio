import { site } from '@/data/content'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="text-xs text-fg-subtle">
          © {year} {site.name}
        </p>
        <p className="font-mono text-xs tracking-wide text-fg-subtle">
          React · Vite · Tailwind · GitHub Pages
        </p>
      </div>
    </footer>
  )
}
