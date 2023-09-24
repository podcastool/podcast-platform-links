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
  | 'Podknife'
  | 'RadioPublic'
  | 'Sonnet'
  | 'Spotify'
  | 'Antennapod'
  | 'Anytime Player'
  | 'Goodpods'
  | 'gpodder'
  | 'Moon FM'
  | 'podStation'
  | 'Podvine'

export interface PodcastPlatformLinkItem {
  platform: Platform
  link: string
}
