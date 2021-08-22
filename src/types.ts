interface PodcastLookupResultItem {
  feedUrl: string
}

export interface PodcastLookupResult {
  resultCount: number
  results: PodcastLookupResultItem[]
}

export type Platform =
  | 'apple'
  | 'breaker'
  | 'bullhorn'
  | 'castbox'
  | 'castro'
  | 'google'
  | 'overcast'
  | 'player'
  | 'pocketcasts'
  | 'podbean'
  | 'podcastaddict'
  | 'podcastguru'
  | 'podfriend'
  | 'podhero'
  | 'podknife'
  | 'radiopublic'
  | 'sonnet'

export interface PodcastPlatformLinkItem {
  platform: Platform
  link: string
}
