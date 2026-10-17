import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  /** 延迟（秒），用于同一组元素的 70ms stagger */
  delay?: number
  className?: string
}

/**
 * 滚动揭示：进入视口一次，opacity 0 → 1 + y 20 → 0（规范 §2.2）
 * 系统开启「减少动态效果」时直接渲染静态内容，不做任何过渡。
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.52, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
