import { useEffect, useState } from 'react'
import { ArrowUpRight, Check, Code2, Copy, Mail, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/ui/reveal'
import { Section } from '@/components/ui/section'
import { sections, site } from '@/data/content'

/** 邮箱复制：一步完成，不弹新窗口 */
function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = window.setTimeout(() => setCopied(false), 1800)
    return () => window.clearTimeout(timer)
  }, [copied])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
    } catch {
      // 剪贴板不可用时退回 mailto，不让流程卡住
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <a
        href={`mailto:${email}`}
        className="font-mono text-lg text-fg transition-colors duration-[160ms] hover:text-brand md:text-xl"
      >
        {email}
      </a>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? '邮箱已复制' : '复制邮箱地址'}
        className="inline-flex size-8 items-center justify-center rounded-chip border border-line bg-surface-2 text-fg-muted transition-colors duration-[160ms] hover:border-line-strong hover:text-fg"
      >
        {copied ? (
          <Check className="size-4 text-cool" aria-hidden="true" />
        ) : (
          <Copy className="size-4" aria-hidden="true" />
        )}
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? '邮箱已复制到剪贴板' : ''}
      </span>
    </div>
  )
}

export function Contact() {
  const { email, wechat, github, resumeUrl } = site.contact

  return (
    <Section
      id="contact"
      index={sections.contact.index}
      label={sections.contact.label}
      title={sections.contact.title}
      description={sections.contact.description}
    >
      <Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          {/* 主联系块 */}
          <div className="shadow-elevate relative overflow-hidden rounded-card border border-line bg-surface-2/80 p-6 md:p-8">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-16 size-64 rounded-full bg-brand opacity-15 blur-[90px]"
            />
            <h3 className="text-sm font-medium text-fg-muted">邮箱</h3>
            <div className="mt-3">
              {email ? (
                <CopyEmail email={email} />
              ) : (
                <p className="font-mono text-base text-fg-subtle">待补充</p>
              )}
            </div>

            {resumeUrl ? (
              <div className="mt-6">
                <Button href={resumeUrl} variant="ghost">
                  下载简历 PDF
                </Button>
              </div>
            ) : null}
          </div>

          {/* 其他入口 */}
          <div className="flex flex-col gap-4">
            {wechat ? (
              <div className="shadow-elevate flex items-center justify-between rounded-card border border-line bg-surface-2/80 p-6">
                <span className="flex items-center gap-3">
                  <MessageCircle
                    className="size-5 text-fg-muted"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-fg">微信</span>
                </span>
                <span className="font-mono text-sm text-fg-muted">{wechat}</span>
              </div>
            ) : null}

            <a
              href={github}
              target="_blank"
              rel="noreferrer noopener"
              className="shadow-elevate group flex items-center justify-between rounded-card border border-line bg-surface-2/80 p-6 transition-[border-color,background-color] duration-[160ms] ease-out hover:border-line-strong hover:bg-surface-3"
            >
              <span className="flex items-center gap-3">
                <Code2 className="size-5 text-fg-muted" aria-hidden="true" />
                <span className="text-sm text-fg">GitHub</span>
              </span>
              <ArrowUpRight
                className="size-4 text-fg-subtle transition-transform duration-[160ms] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>

            {email ? (
              <a
                href={`mailto:${email}`}
                className="shadow-elevate group flex items-center justify-between rounded-card border border-line bg-surface-2/80 p-6 transition-[border-color,background-color] duration-[160ms] ease-out hover:border-line-strong hover:bg-surface-3"
              >
                <span className="flex items-center gap-3">
                  <Mail className="size-5 text-fg-muted" aria-hidden="true" />
                  <span className="text-sm text-fg">发邮件</span>
                </span>
                <ArrowUpRight
                  className="size-4 text-fg-subtle transition-transform duration-[160ms] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            ) : null}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}
