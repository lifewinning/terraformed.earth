import { slugFromPath } from "./util"

export async function getPosts() {
    const posts = await Object.entries(
      import.meta.globEager('/src/routes/posts/*.md')
    )
        // get post metadata
      .map(([path, post]) => ({slug: slugFromPath(path), metadata: post.metadata, date: post.metadata.date}))
      // sort by date
      .sort((a, b) => (a.date < b.date ? 1 : -1))
  
    return posts
  }