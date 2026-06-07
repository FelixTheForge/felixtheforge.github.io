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
  social: {
    github:  'https://github.com/FelixTheForge',
    twitter: '',
    email:   '',
  },
  heroBg: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=80',
  aboutBg: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1800&q=80',

  // 🎵 背景音乐
  // source: 'youtube' → 用 YouTube 视频（合法，无版权风险）
  //         'file'    → 用本地 mp3（放 /public/music/xxx.mp3，url 写 '/music/xxx.mp3'）
  music: {
    enabled: true,
    source:  'youtube' as 'youtube' | 'file',
    title:   'Echo',
    artist:  'Jason Walker',
    youtubeId: 'ktnJ4zuxXy0',   // YouTube 视频 ID
    url:     '',                 // 文件模式才填
    autoStart: true,             // 首次访问，第一次点击 / 按键 / 触屏 → 自动播放
  },
};

// 🔗 友链 — 在这里添加 / 修改 / 删除你的朋友
export const FRIENDS = [
  {
    name:   'Charlie Fei',
    url:    'https://charliefei.github.io/en/',
    avatar: 'https://github.com/charliefei.png',
    bio:    "Charlie's writings on tech, life, and craft.",
    color:  '#10b981',
  },
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
  qqGroup:     '123456789',                          // 你的 QQ 群号
  qrCode:      '/minecraft/qq-group-qr.png',         // QQ 群二维码，放 public/minecraft/ 下
  bannerImg:   '/minecraft/banner.jpg',              // Hero 大图（日落岛屿）
  sceneCherry: '/minecraft/scene-cherry.jpg',        // 樱花树场景
  sceneRain:   '/minecraft/scene-rain.jpg',          // 雨水草地场景

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

  // 🖼️ 群友截图墙 — 把图放 public/minecraft/gallery/ 下
  gallery: [
    { src: '/minecraft/banner.jpg',        caption: 'Sunset isles' },
    { src: '/minecraft/scene-cherry.jpg',  caption: 'Cherry grove' },
    { src: '/minecraft/scene-rain.jpg',    caption: 'Rainy meadow' },
    { src: '/minecraft/scene-flowers.jpg', caption: 'Field of bloom' },
  ],

  // 🌅 壁纸墙 — 可下载的桌面壁纸
  wallpapers: [
    { src: '/minecraft/banner.jpg',        title: 'Sunset Isles',  titleZh: '日落群岛',  res: '4K' },
    { src: '/minecraft/scene-cherry.jpg',  title: 'Cherry Grove',  titleZh: '樱花林',    res: '4K' },
    { src: '/minecraft/scene-rain.jpg',    title: 'Rainy Meadow',  titleZh: '雨中草地',  res: '4K' },
    { src: '/minecraft/scene-flowers.jpg', title: 'Field of Bloom',titleZh: '繁花原野',  res: '4K' },
  ],
};
