import { getPosts } from '$lib/get-posts'; 
let title = 'terraformed.earth';
let website = 'https://terraformed.earth';
let desc = 'a side project blog by Ingrid Burrington'

export async function get() {
    const posts = await getPosts()
    const body = xml(posts)
    const headers = {
        'Cache-Control': 'max-age=0, s-maxage=3600',
        'Content-Type': 'application/xml',
  }
  return {
    headers,
    body
  }
}

const xml = 
posts =>  `<rss xmlns:dc="https://purl.org/dc/elements/1.1/" xmlns:content="https://purl.org/rss/1.0/modules/content/" xmlns:atom="https://www.w3.org/2005/Atom" version="2.0">
<channel>
  <title>${title}</title>
  <link>${website}</link>
  <description>${desc}</description>
  ${posts.map(
      post =>
        `
      <item>
        <title>${post.metadata.title}</title>
        <description>${desc}</description>
        <link>${website}/posts/${post.slug}/</link>
        <pubDate>${new Date(post.metadata.date)}</pubDate>
        <content:encoded>${post.metadata.description} 
          <div style="margin-top: 50px; font-style: italic;">
            <strong>
              <a href="${website}/posts/${post.slug}">
                Keep reading
              </a>
            </strong>  
          </div>
        </content:encoded>
      </item>
    `
    )
    .join('')}
</channel>
</rss>`