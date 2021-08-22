import ky from 'ky-universal'
import { PodcastLookupResult } from './types'

const API_URL = ' https://itunes.apple.com'

export async function getFeedUrl(appleId: number): Promise<string> {
  const data = await ky(
    `${API_URL}/lookup?id=${appleId}`,
  ).json<PodcastLookupResult>()
  return data.resultCount > 0 ? data.results[0].feedUrl : ''
}

export const universalBtoa = (str: string): string => {
  try {
    return btoa(str)
  }
  catch (err) {
    return Buffer.from(str).toString('base64')
  }
}
