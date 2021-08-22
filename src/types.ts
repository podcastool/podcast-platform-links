interface PodcastLookupResultItem {
  feedUrl: string
}

export interface PodcastLookupResult {
  resultCount: number
  results: PodcastLookupResultItem[]
}

export interface PodcastPlatformLinkItem {
  platform: string
  link: string
}
