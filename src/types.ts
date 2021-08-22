interface PodcastLookupResultItem {
  feedUrl: string
}

export interface PodcastLookupResult {
  resultCount: number
  results: PodcastLookupResultItem[]
}

export type Platform =
  | 'Apple Podcasts'
  | 'Breaker'
  | 'Bullhorn'
  | 'Castbox'
  | 'Castro'
  | 'Google Podcasts'
  | 'Overcast'
  | 'Player FM'
  | 'Pocket Casts'
  | 'Podbean'
  | 'Podcast Addict'
  | 'Podcast Guru'
  | 'Podfriend'
  | 'Podhero'
  | 'Podknife'
  | 'RadioPublic'
  | 'Sonnet'

export interface PodcastPlatformLinkItem {
  platform: Platform
  link: string
}
