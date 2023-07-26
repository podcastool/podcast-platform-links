export type Platform =
  | 'Apple Podcasts'
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
  | 'Spotify'

export interface PodcastPlatformLinkItem {
  platform: Platform
  link: string
}
