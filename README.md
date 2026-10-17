# Portfolio · 梁可悦

用户运营 / 私域运营方向的个人求职主页。静态站点，GitHub Pages 托管。

- 在线地址：https://lky-hjh.github.io/portfolio/
- 设计与代码规范：[`../docs/portfolio-spec.md`](../docs/portfolio-spec.md)

## 技术栈

| 层 | 选择 |
|---|---|
| 构建 | Vite 8 + TypeScript（strict） |
| UI | React 19 + Tailwind CSS v4（design token 驱动） |
| 动效 | Motion（原 Framer Motion），只用 `whileInView` 揭示与 hover 微交互 |
| 图标 | lucide-react |
| 部署 | GitHub Actions → GitHub Pages |

无 WebGL、无外部字体、无图片素材：首屏全部由 CSS 绘制，JS gzip ≈ 134 KB。

## 本地开发

```bash
npm install
npm run dev        # http://localhost:5199（或 vite 分配的端口）
npm run build      # 类型检查 + 生产构建，产物在 dist/
npm run preview    # 预览生产构建
```

## 改内容只动一个文件

所有文案、经历、能力、案例都在 `src/data/content.ts`。
组件里不写中文文案——这是硬规范，见 spec §5.2。

## 上线前必须补的信息

编辑 `src/data/content.ts`：

- [ ] `site.contact.email` —— 真实邮箱（当前为空，页面上显示"待补充"）
- [ ] `site.contact.wechat` —— 微信号（可选）
- [ ] `site.contact.resumeUrl` —— 把 PDF 放到 `public/resume.pdf` 后填 `/portfolio/resume.pdf`
- [ ] `metrics` 前两项 —— 社群规模、活动转化提升（当前显示 "—"）
- [ ] `experiences[].highlights` —— 每条尽量带量化结果
- [ ] `cases[].result` —— 三个案例的结果（人数 / 转化 / GMV / 播放量）
- [ ] `education` —— 学校 / 专业 / 在校时间
- [ ] `index.html` 里的 OG 分享图（1200×630，放 `public/og.png` 并加 `og:image`）

## 部署

推送到 `main` 即自动构建部署。

首次需要在仓库 Settings → Pages → Source 选择 **GitHub Actions**（不是 Deploy from a branch）。

`vite.config.ts` 的 `base` 已按 `command === 'build'` 自动切到 `/portfolio/`，本地开发用根路径，不会踩资源 404 的坑。
