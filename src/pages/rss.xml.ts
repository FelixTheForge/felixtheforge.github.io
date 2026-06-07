import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE } from '../config/site';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog'))
    .sort((a,b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());
  return rss({
    title: SITE.title,
    description: 'Personal blog',
    site: context.site!,
    items: posts.map(p => ({
      title: p.data.title,
      pubDate: new Date(p.data.date),
      description: p.data.description,
      link: `/blog/${p.id}/`,
    })),
  });
}
