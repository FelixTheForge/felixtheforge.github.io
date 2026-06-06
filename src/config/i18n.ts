export const UI = {
  en: {
    nav: { home: 'Home', writing: 'Writing', tags: 'Tags', about: 'About' },
    hero: { tag: 'Personal Blog', readBtn: 'Read Writing', aboutBtn: 'About Me', scroll: 'Scroll' },
    home: { featured: 'Featured', recent: 'Recent Writings', allWritings: 'All writings' },
    blog: { title: 'Writing', pieceSingular: 'piece so far.', piecePlural: 'pieces so far.', empty: 'The forge is heating up.' },
    post: { readMore: 'Read more', back: '← All writings', minRead: 'min read' },
    tags: { title: 'Tags', explored: 'topics explored so far.' },
    about: { tag: 'About me', longer: 'The longer version', currentlyInto: 'Currently into' },
    footer: { github: 'GitHub' },
    notFound: { title: 'Page not found', sub: "The forge couldn't find what you were looking for.", back: '← Back to home' },
  },
  zh: {
    nav: { home: '首页', writing: '文章', tags: '标签', about: '关于' },
    hero: { tag: '个人博客', readBtn: '阅读文章', aboutBtn: '关于我', scroll: '向下滚动' },
    home: { featured: '精选', recent: '最近更新', allWritings: '全部文章' },
    blog: { title: '文章', pieceSingular: '篇文章。', piecePlural: '篇文章。', empty: '炉火正在升温，敬请期待。' },
    post: { readMore: '阅读全文', back: '← 所有文章', minRead: '分钟阅读' },
    tags: { title: '标签', explored: '个话题。' },
    about: { tag: '关于我', longer: '更多介绍', currentlyInto: '最近在关注' },
    footer: { github: 'GitHub' },
    notFound: { title: '页面未找到', sub: '铁匠铺找不到你要的东西。', back: '← 返回首页' },
  },
} as const;

export type Lang = keyof typeof UI;
