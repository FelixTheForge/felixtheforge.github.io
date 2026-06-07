/**
 * ╔══════════════════════════════════════╗
 * ║   个人博客配置文件 — 在这里修改你的信息  ║
 * ╚══════════════════════════════════════╝
 */
export const SITE = {
  title:      'FelixTheForge',
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

  // 🎵 背景音乐 — 替换成你自己的 mp3 URL（可以放仓库 /public/music/xxx.mp3）
  music: {
    enabled: true,
    title:   'Ambient',
    artist:  'Lo-fi loop',
    url:     'https://cdn.pixabay.com/audio/2023/06/06/audio_1f3a4cb8f3.mp3',
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

// ⛏️ 我的世界辅助 — 在这里改板块信息
export const MINECRAFT = {
  name:        'ForgeCraft',
  tagline:     'A premium Minecraft utility client',
  taglineZh:   '高端的 Minecraft 辅助客户端',
  version:     'v2.7.4',
  mcVersion:   'MC 1.21.x',
  downloadUrl: '#',
  features: [
    { icon: '⚔️', title: 'Combat',    titleZh: '战斗',  desc: 'KillAura, AutoClicker, Reach, Velocity' },
    { icon: '🧭', title: 'Movement',  titleZh: '移动',  desc: 'Fly, Speed, NoFall, Sprint, Step' },
    { icon: '👁️', title: 'Render',    titleZh: '渲染',  desc: 'ESP, Tracers, Chams, Xray, NameTags' },
    { icon: '🎯', title: 'Player',    titleZh: '玩家',  desc: 'AutoFish, AntiAFK, FastBreak, Scaffold' },
    { icon: '🌍', title: 'World',     titleZh: '世界',  desc: 'Nuker, AutoTool, Timer, Chest Stealer' },
    { icon: '💎', title: 'Misc',      titleZh: '杂项',  desc: 'ClickGUI, Themes, Macros, Capes' },
  ],
  stats: [
    { label: 'Users',   labelZh: '用户',   value: '12K+' },
    { label: 'Modules', labelZh: '模块',   value: '80+'  },
    { label: 'Updates', labelZh: '更新',   value: 'Weekly' },
    { label: 'Rating',  labelZh: '评分',   value: '4.9' },
  ],
};
