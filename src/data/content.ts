/**
 * 全站文案唯一来源（规范 §5.1 / §5.2）
 * 改内容只动这个文件，不要改 components。
 *
 * 标了 TODO 的字段是上线前必须补的真实信息，占位值为空字符串或 "—"，
 * 组件会自动隐藏或降级显示，不会出现假数据。
 */

/* ------------------------------------------------------------------ */
/* 站点元信息                                                          */
/* ------------------------------------------------------------------ */

export const site = {
  name: '梁可悦',
  namePinyin: 'LIANG KEYUE',
  /** Hero 定位句：3 秒内要让人记住的一句话 */
  headline: '把用户留下来，并持续产生价值',
  role: '用户运营 / 私域运营',
  roleEn: 'USER OPS · PRIVATE DOMAIN',
  intro: [
    '运营方向实习生，专注私域社群运营与用户运营。从社群活跃与维系，到每周销售活动策划、数据复盘与优化，再到引导用户产出 UGC、沉淀品牌 KOC。',
    '此前一段内容运营实习补齐了另一侧能力：全平台账号运营、拍摄剪辑、直播跟播与转化链路。内容获客到社群承接，我能独立跑通完整闭环。',
  ],
  /** 联系方式：TODO 补真实信息 */
  contact: {
    email: '', // TODO: 真实邮箱，当前为空则不显示
    wechat: '', // TODO: 微信号
    github: 'https://github.com/lky-hjh',
    resumeUrl: '', // TODO: 放 public/resume.pdf 后填 '/portfolio/resume.pdf'
  },
} as const

/* ------------------------------------------------------------------ */
/* Hero 关键数字                                                       */
/* ------------------------------------------------------------------ */

export interface Metric {
  value: string
  label: string
  /** true = 数据待补，组件会显示为 "—" 并弱化，避免编造 */
  pending?: boolean
}

export const metrics: Metric[] = [
  { value: '—', label: '社群覆盖用户', pending: true }, // TODO 社群规模
  { value: '—', label: '活动转化提升', pending: true }, // TODO 活动 GMV / 转化
  { value: '2', label: '独立运营账号' },
]

/* ------------------------------------------------------------------ */
/* 能力矩阵                                                            */
/* ------------------------------------------------------------------ */

export type IconKey =
  | 'users'
  | 'target'
  | 'chart'
  | 'sparkles'
  | 'video'
  | 'clapperboard'
  | 'radio'
  | 'handshake'

export interface Capability {
  icon: IconKey
  title: string
  desc: string
  /** bento 网格中占 2 列 */
  wide?: boolean
}

export const capabilities: Capability[] = [
  {
    icon: 'users',
    title: '私域社群运营',
    desc: '日常活跃、用户关系维系、分层触达，把「群」做成能持续成交的场。',
    wide: true,
  },
  {
    icon: 'target',
    title: '活动策划与执行',
    desc: '每周社群销售活动从选题到落地，含异业合作型回馈活动。',
    wide: true,
  },
  {
    icon: 'chart',
    title: '数据复盘',
    desc: '每轮活动后用数据定位问题，直接决定下一轮怎么改。',
  },
  {
    icon: 'sparkles',
    title: 'UGC / KOC 培育',
    desc: '设计机制让用户主动产出内容，沉淀品牌口碑资产。',
  },
  {
    icon: 'video',
    title: '短视频拍摄剪辑',
    desc: '独立完成选题、拍摄、剪辑全流程。',
  },
  {
    icon: 'clapperboard',
    title: '全平台账号运营',
    desc: '抖音 / 小红书 / 视频号三端独立运营。',
  },
  {
    icon: 'radio',
    title: '直播执行',
    desc: '副播、跟播、上链接，配合主播完成转化链路。',
  },
  {
    icon: 'handshake',
    title: '跨部门协作',
    desc: '按各部门需求统一排期推送，协调资源落地。',
  },
]

/* ------------------------------------------------------------------ */
/* 实习经历                                                            */
/* ------------------------------------------------------------------ */

export interface ExperienceItem {
  company: string
  role: string
  period: string
  location?: string
  highlights: string[]
}

export const experiences: ExperienceItem[] = [
  {
    company: '佛山市小熊电器股份有限公司',
    role: '私域运营 + 用户运营 实习生',
    period: '2026.09 — 2027.02',
    highlights: [
      '社群活跃与维系：负责私域社群日常活跃与用户关系维护',
      '活动策划与复盘：策划每周社群销售活动，做数据复盘并持续优化销售额',
      '推送排期：汇总各部门需求，统一管理私域社群推送内容排期',
      'UGC 与 KOC 沉淀：设计活动引导用户产出 UGC，为品牌积累优质 KOC 与口碑',
      '新品试用闭环：对接需求部门筛选用户参与新品试用，收集并回流反馈',
      '拉新与留存：定期策划异业合作等回馈活动，提升用户拉新与留存',
    ],
  },
  {
    company: '佛山市扬森网络科技有限公司',
    role: '内容运营 实习生',
    period: '2026.07 — 2026.09',
    highlights: [
      '全平台账号运营：独立运营「粤探」「粤探四眼仔榴莲」两个账号，覆盖抖音、小红书、视频号',
      '内容生产：负责短视频的拍摄与剪辑',
      '直播运营：担任副播，负责跟播、上链接等直播执行工作',
      '私域承接：运营私域粉丝群，策划回馈活动提升群内粉丝留存',
    ],
  },
]

/* ------------------------------------------------------------------ */
/* 核心案例（结构：背景 → 目标 → 做法 → 结果）                          */
/* ------------------------------------------------------------------ */

export interface CaseStudy {
  tag: string
  title: string
  background: string
  goal: string
  action: string
  /** TODO：结果必须可量化，未填时组件显示「数据待补」 */
  result: string
  pending?: boolean
}

export const cases: CaseStudy[] = [
  {
    tag: '私域 · 活动',
    title: '每周社群销售活动：从「发一次」到「跑一个闭环」',
    background:
      '社群推送内容由多个部门各自提需求，节奏零散，活动做完不知道效果，下一周又从零开始。',
    goal: '把每周活动变成一个可复盘的闭环：有统一排期、有数据留存、有明确的优化动作。',
    action:
      '统一收集各部门需求做排期管理；每场活动固定记录参与人数、转化与反馈；活动后做复盘，把结论直接落到下一周的选题和话术上。',
    result: '',
    pending: true,
  },
  {
    tag: '口碑 · UGC',
    title: '让用户替品牌说话：UGC 引导与 KOC 沉淀',
    background:
      '品牌在私域里缺少真实用户内容，官方发声多、用户自发传播少，口碑资产积累不起来。',
    goal: '用活动机制把「愿意晒」的用户筛出来，形成可持续产出的 KOC 池。',
    action:
      '结合新品试用与节点话题设计 UGC 征集，筛选高活跃用户定向邀请参与，产出内容做二次分发与沉淀。',
    result: '',
    pending: true,
  },
  {
    tag: '内容 · 增长',
    title: '双账号从 0 到 1：三端内容与直播转化链路',
    background:
      '需要从零起盘两个本地生活账号，同时承担内容生产与直播执行，没有成熟模板可抄。',
    goal: '把「拍什么、怎么剪、直播怎么承接」跑成一套可重复的流程。',
    action:
      '独立完成选题、拍摄、剪辑，覆盖抖音 / 小红书 / 视频号；直播中担任副播负责跟播与上链接；把直播间流量导回私域粉丝群做承接。',
    result: '',
    pending: true,
  },
]

/* ------------------------------------------------------------------ */
/* 教育背景                                                            */
/* ------------------------------------------------------------------ */

export const education = {
  school: '', // TODO 学校
  major: '', // TODO 专业
  period: '', // TODO 在校时间
  pending: true,
}

/* ------------------------------------------------------------------ */
/* 各区块标题（规范 §5.2：JSX 内不允许硬编码文案）                      */
/* ------------------------------------------------------------------ */

export const sections = {
  capabilities: {
    index: '01',
    label: 'Capabilities',
    title: '把用户留下来，需要哪几块能力',
    description:
      '从获客到承接、从活动到口碑，这四层能力组成了一个完整的私域闭环。',
  },
  experience: {
    index: '02',
    label: 'Experience',
    title: '把运营的两个半边，都做过一遍',
    description: '私域承接与内容获客，两段实习刚好覆盖了用户的完整生命周期。',
  },
  cases: {
    index: '03',
    label: 'Case Studies',
    title: '三个案例，看的是怎么想',
    description:
      '每个案例都按同一套结构拆开：当时的状况、要解决的问题、我具体做的动作，以及最后跑出了什么结果。',
  },
  contact: {
    index: '04',
    label: 'Contact',
    title: '聊聊你手上的这件事',
    description:
      '如果你在找一个能把社群、活动、内容和数据串起来的人，欢迎直接联系我。',
  },
} as const

/* ------------------------------------------------------------------ */
/* 导航                                                                */
/* ------------------------------------------------------------------ */

export const navLinks = [
  { href: '#capabilities', label: '能力' },
  { href: '#experience', label: '经历' },
  { href: '#cases', label: '案例' },
  { href: '#contact', label: '联系' },
] as const
