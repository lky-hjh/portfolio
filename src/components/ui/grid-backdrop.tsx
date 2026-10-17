/**
 * 背景装饰：细网格 + 顶部暖色光晕
 * 纯 CSS，无 WebGL、无图片，首屏零额外成本（规范 §2.2 第 3 条）
 * 纯装饰元素，对读屏器隐藏。
 */
export function GridBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* 网格，向四周淡出 */}
      <div
        className="bg-grid absolute inset-0 opacity-60"
        style={{
          maskImage:
            'radial-gradient(ellipse 70% 60% at 50% 0%, #000 35%, transparent 78%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 60% at 50% 0%, #000 35%, transparent 78%)',
        }}
      />

      {/* 顶部暖色光晕 */}
      <div
        className="absolute -top-40 left-1/2 h-[32rem] w-[52rem] -translate-x-1/2 rounded-full opacity-22 blur-[120px]"
        style={{
          background:
            'radial-gradient(circle, var(--color-brand) 0%, transparent 68%)',
        }}
      />

      {/* 底部压暗，让首屏与下一屏自然衔接 */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />
    </div>
  )
}
