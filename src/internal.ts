import cheerio, { Cheerio, Node } from 'cheerio'
import got from 'got'
import { FeedLinkItem, SearchResultItem } from './types'

const API_URL = 'https://pod.link'

export async function getFeedId(name: string): Promise<number> {
  const data = await got(`${API_URL}/search?query=${name}`).json<
  SearchResultItem[]
  >()
  return Array.isArray(data) && data.length > 0 ? data[0].id : 0
}

export async function getOriginalFeedLinks(id: number): Promise<FeedLinkItem[]> {
  if (!id) return []

  const html = await got(`${API_URL}/${id}`).text()
  const $ = cheerio.load(html)
  const selector = `a[href^="/${id}"]`
  const linkElements: Cheerio<Node> = $(selector)

  if (!linkElements.length) return []

  const feeds: FeedLinkItem[] = []

  Array.from(linkElements).forEach((element) => {
    const endUrl = $(element).attr('href')
    const platform = endUrl?.split('.')[1]

    if (platform) {
      feeds.push({
        url: API_URL + endUrl,
        platform,
      })
    }
  })

  return feeds
}
