import got from 'got'
import pick from 'lodash/pick'
import { PodcastLookupResult, PodcastLookupResultItem } from './types'

const API_URL = 'https://itunes.apple.com'

export async function getPodcastInfo(appleId: number): Promise<PodcastLookupResultItem> {
  const defaultInfo: PodcastLookupResultItem = {
    feedUrl: '',
    collectionId: 0,
    collectionName: '',
    collectionViewUrl: '',
    artistName: '',
    artworkUrl600: '',
  }

  const data = await got(
    `${API_URL}/lookup?id=${appleId}`,
  ).json<PodcastLookupResult>()
  // @ts-ignore
  return data.resultCount > 0 ? pick(data.results[0], Object.keys(defaultInfo)) : defaultInfo
}

export const base64Encode = (str: string): string => {
  return Buffer.from(str).toString('base64')
}
