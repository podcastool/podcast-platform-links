import got from 'got'
import { PodcastLookupResult } from './types'

const API_URL = 'https://itunes.apple.com'

export async function getFeedUrl(appleId: number): Promise<string> {
  const data = await got(
    `${API_URL}/lookup?id=${appleId}`,
  ).json<PodcastLookupResult>()
  return data.resultCount > 0 ? data.results[0].feedUrl : ''
}

export const base64Encode = (str: string): string => {
  return Buffer.from(str).toString('base64')
}
