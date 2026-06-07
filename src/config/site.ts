/**
 * ╔══════════════════════════════════════╗
 * ║   个人博客配置文件 — 在这里修改你的信息  ║
 * ╚══════════════════════════════════════╝
 */
export const SITE = {
  title:      'Felix Forge',
  url:        'https://felixtheforge.github.io',
  avatar:     '/avatar.png',
  role:       'Builder & Writer',          // 职位/标签
  location:   'Earth',                     // 地点
  bioEn:      'I build things on the internet and occasionally write about it. Interested in the intersection of technology and craft.',
  bioZh:      '在互联网上构建东西，偶尔写写文章。关注技术与手艺的交汇点。',
  heroSubEn:  'Writing about technology, craft,\nand the slow accumulation of ideas.',
  heroSubZh:  '记录技术、手艺，\n以及缓慢积累的想法。',

  // 📜 座右铭
  mottoZh:    '于道各努力，千里自同风。',
  mottoEn:    'Each striving on our own path —\na thousand miles apart, one wind we share.',
  mottoSourceZh: '— 范云 · 《赠张徐州稷》',
  mottoSourceEn: '— Fan Yun, Liang dynasty',
  // 想加新平台 → 在这里添 URL；想隐藏 → 把 URL 改成空串 ''
  // 顺序决定 navbar 显示顺序
  social: {
    github:   'https://github.com/FelixTheForge',
    twitter:  'https://x.com/Felixqxxl',
    facebook: 'https://www.facebook.com/profile.php?id=61590359290581',
    douyin:   'https://www.douyin.com/user/self?from_tab_name=main',
    email:    '',
  },
  heroBg: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=80',
  aboutBg: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1800&q=80',

  // 💬 评论系统 (Giscus — 用 GitHub Discussions 作后端)
  // 配置步骤：
  //   1. 仓库 Settings → Features → 勾上 Discussions
  //   2. 装 https://github.com/apps/giscus 到这个仓库
  //   3. 去 https://giscus.app/zh-CN 填表，拿到 4 个 ID
  //   4. 把 repoId + categoryId 填到下面，category 改成你建的 Discussion 类别名
  giscus: {
    enabled:    true,
    repo:       'FelixTheForge/felixtheforge.github.io',
    repoId:     'R_kgDOSy5HWQ',
    category:   'Announcements',
    categoryId: 'DIC_kwDOSy5HWc4C-rpx',
    mapping:    'pathname' as const,              // 用 URL 路径关联 Discussion
    reactions:  true,                              // 允许 emoji 反应
    inputPosition: 'top' as 'top' | 'bottom',     // 输入框在顶 / 底
  },

  // 📊 Cloudflare Web Analytics — 免费、无 cookie、隐私友好
  // 配置步骤：
  //   1. 打开 https://dash.cloudflare.com → Analytics & Logs → Web Analytics
  //   2. Add a site → URL 填 https://felixtheforge.github.io
  //   3. 拿到 beacon token（形如 `abcdef1234567890`）填到下面
  //   4. 推送 → 几分钟后 dashboard 里就能看到访问数据
  // 留空 / 'REPLACE_ME' 时不注入脚本（不影响功能）
  cloudflareAnalytics: '5128963535444ef3b13a30917f6fb0ec',

  // 🎵 背景音乐
  // source: 'youtube' → 用 YouTube 视频（合法，无版权风险）
  //         'file'    → 用本地 mp3（放 /public/music/xxx.mp3，url 写 '/music/xxx.mp3'）
  music: {
    enabled: true,
    source:  'youtube' as 'youtube' | 'bilibili' | 'file',
    title:   'Echo',
    artist:  'Jason Walker',
    youtubeId:    'ktnJ4zuxXy0',     // YouTube 视频 ID（source = youtube 用）
    bilibiliBvid: 'BV1Ag4y1p7Bn',    // B站 BV 号（source = bilibili 用，国内可访问）
    url:          '',                 // 本地文件路径（source = file 用）
    autoStart: true,
  },
};

// 📚 阅读列表
//   status:    'reading'（在读）| 'finished'（读完）| 'wishlist'（想读）
//   rating:    1~5（仅 finished 用）
//   cover:     用 Open Library API 最稳：
//              https://covers.openlibrary.org/b/isbn/<ISBN>-L.jpg
//              ISBN 在书背 / 豆瓣页 / Goodreads 都能查到
//              如果 Open Library 没收录就放公开图床 URL（imgur / cloudflare 等）
//   notesUrl:  指向你写的读书笔记博客文章；填了就显示「Read notes →」按钮
export const BOOKS = [
  {
    title:    'Designing Data-Intensive Applications',
    titleZh:  '数据密集型应用系统设计',
    author:   'Martin Kleppmann',
    cover:    'https://covers.openlibrary.org/b/isbn/9781449373320-L.jpg',
    status:   'reading' as 'reading' | 'finished' | 'wishlist',
    note:     '工程师必读，分布式系统的圣经。',
    noteEn:   'A must-read for engineers — the distributed systems bible.',
  },
  {
    title:    'The Pragmatic Programmer',
    titleZh:  '程序员修炼之道',
    author:   'David Thomas, Andrew Hunt',
    cover:    'https://covers.openlibrary.org/b/isbn/9780135957059-L.jpg',
    status:   'finished' as 'reading' | 'finished' | 'wishlist',
    rating:   5,
    note:     '不变的真理。每年重读一遍都有新感悟。',
    noteEn:   'Timeless truths. New insights every re-read.',
    finishedDate: '2025-03',
    notesUrl: '/blog/notes-pragmatic-programmer',
  },
  {
    title:    'Project Hail Mary',
    titleZh:  '挽救计划',
    author:   'Andy Weir',
    cover:    'https://covers.openlibrary.org/b/isbn/9780593135204-L.jpg',
    status:   'wishlist' as 'reading' | 'finished' | 'wishlist',
    note:     '看完《火星救援》之后必读。',
    noteEn:   'A must-read after finishing The Martian.',
  },
];

// 🔗 友链 — 在这里添加 / 修改 / 删除你的朋友
export const FRIENDS = [
  {
    name:   'Hem',
    url:    'https://hem.asia/',
    avatar: 'https://hem.asia/favicon.ico',
    bio:    'Hem — a friend on the web.',
    color:  '#8b5cf6',
  },
];

// ⛏️ Minecraft 群组板块 — 改这里
export const MINECRAFT = {
  name:        'ForgeCraft',                         // 群组/团队名
  tagline:     'A Minecraft community for builders.',
  taglineZh:   '一个属于建造者的 Minecraft 社群。',
  mcVersion:   'MC 1.21.x',
  qqGroup:     '683601215',                          // 你的 QQ 群号
  qrCode:      '/minecraft/qq-group-qr.png',
  // 🟢 服务器地址 — 留空 / 'EXAMPLE' 时显示占位静态数据
  // 填上后会通过 mcsrvstat.us API 实时查询在线人数（每 60 秒刷新一次）
  // 示例：'mc.hypixel.net' 或 'play.myserver.com:25566'
  serverAddress: '47.122.92.249:60001',
  // -md (1280w ~100KB) for hero / section backgrounds — full quality kept as fallback download
  bannerImg:   '/minecraft/banner-md.jpg',
  sceneCherry: '/minecraft/scene-cherry-md.jpg',
  sceneRain:   '/minecraft/scene-rain-md.jpg',

  // ⚡ 服务器特性标签（在 hero 显示，让用户一眼看懂玩什么）
  tags:   ['Survival', 'Building', 'Redstone', 'Shaders', 'Multiplayer', 'Long-term'],
  tagsZh: ['生存', '建造', '红石', '光影', '联机', '长期'],

  // 📊 群组数据（第一屏显眼位置，让人一眼看出活跃度）
  highlights: [
    { value: '300+',     label: 'Members', labelZh: '群友' },
    { value: '2yr+',     label: 'Running', labelZh: '运营' },
    { value: '24/7',     label: 'Online',  labelZh: '在线' },
    { value: '1.21.x',   label: 'Version', labelZh: '版本' },
  ],

  // 🎯 我们在做什么 — 三句话定义群组玩法（hero 下方第一眼看到）
  pitch: [
    { icon: '🏰', title: 'Long-term Survival', titleZh: '长期生存',
      desc: 'Build from scratch on a world that never resets.',
      descZh: '从零开始建设家园，世界永不重置。' },
    { icon: '🤝', title: 'Friendly Players',   titleZh: '友好玩家',
      desc: '300+ active members, zero toxic PVP.',
      descZh: '300+ 活跃群友，没有阴间 PVP。' },
    { icon: '✨', title: 'Vanilla-Plus',        titleZh: '原汁原味',
      desc: 'A few QoL mods + shaders, vanilla feel preserved.',
      descZh: '少量 QoL 模组 + 光影，保留原版手感。' },
  ],

  // 📂 资源 / 网盘文件
  files: [
    {
      title:    'Modpack v3.2',
      titleZh:  '整合包 v3.2',
      desc:     'Latest server modpack — Fabric 1.21.1',
      descZh:   '最新服务器整合包 — Fabric 1.21.1',
      size:     '420 MB',
      provider: '百度云',
      url:      'https://pan.baidu.com/s/xxxxxxx',
      code:     'mc01',                              // 提取码
      icon:     '📦',
    },
    {
      title:    'Resource Pack',
      titleZh:  '材质包',
      desc:     'Faithful 32× with custom tweaks',
      descZh:   'Faithful 32× 定制版',
      size:     '85 MB',
      provider: '百度云',
      url:      'https://pan.baidu.com/s/yyyyyyy',
      code:     'tx02',
      icon:     '🎨',
    },
    {
      title:    'Shader Profile',
      titleZh:  '光影配置',
      desc:     'BSL recommended settings',
      descZh:   'BSL 光影推荐配置',
      size:     '4 MB',
      provider: 'GitHub',
      url:      'https://github.com/',
      code:     '',
      icon:     '💡',
    },
  ],

  // 📖 操作文档 / 教程
  docs: [
    { title: 'Server connection guide', titleZh: '联机教程',     icon: '🔌', url: '#' },
    { title: 'Modpack install',         titleZh: '整合包安装',   icon: '⚙️', url: '#' },
    { title: 'Common issues FAQ',       titleZh: '常见问题',     icon: '❓', url: '#' },
    { title: 'Server rules',            titleZh: '服务器规则',   icon: '📜', url: '#' },
  ],

  // 🖼️ 群友截图墙 — 暂未上传，留空时整个区块自动隐藏。
  // 把真实截图扔进 public/minecraft/gallery/，然后在这里加 { thumb, full, caption } 项。
  gallery: [] as { thumb: string; full: string; caption: string }[],

  // 🌅 壁纸墙 — preview 小图省流量，download 指向高清原图
  wallpapers: [
    { thumb: '/minecraft/banner-sm.jpg',        full: '/minecraft/banner.jpg',        title: 'Sunset Isles',   titleZh: '日落群岛', res: '4K' },
    { thumb: '/minecraft/scene-cherry-sm.jpg',  full: '/minecraft/scene-cherry.jpg',  title: 'Cherry Grove',   titleZh: '樱花林',   res: '4K' },
    { thumb: '/minecraft/scene-rain-sm.jpg',    full: '/minecraft/scene-rain.jpg',    title: 'Rainy Meadow',   titleZh: '雨中草地', res: '4K' },
    { thumb: '/minecraft/scene-flowers-sm.jpg', full: '/minecraft/scene-flowers.jpg', title: 'Field of Bloom', titleZh: '繁花原野', res: '4K' },
  ],
};
