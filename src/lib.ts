import { base64Encode } from './internal'
import { PodcastPlatformLinkItem } from './types'

export const getPodcastPlatformLinks = async (
  itunesId: number,
  feedUrl: string
): Promise<PodcastPlatformLinkItem[]> => {
  return [
    {
      platform: 'Apple Podcasts',
      link: `https://podcasts.apple.com/podcast/id${itunesId}`,
    },
    {
      platform: 'Bullhorn',
      link: `https://bullhorn.fm/podchaser/itunes/${itunesId}`,
    },
    {
      platform: 'Castbox',
      link: `https://castbox.fm/vic/${itunesId}`,
    },
    {
      platform: 'Castro',
      link: `https://castro.fm/itunes/${itunesId}`,
    },
    {
      platform: 'Google Podcasts',
      link: `https://podcasts.google.com/?feed=${base64Encode(feedUrl)}`,
    },
    {
      platform: 'Overcast',
      link: `https://overcast.fm/itunes${itunesId}`,
    },
    {
      platform: 'Player FM',
      link: `https://player.fm/subscribe?id=${encodeURIComponent(feedUrl)}`,
    },
    {
      platform: 'Pocket Casts',
      link: `https://pca.st/itunes/${itunesId}`,
    },
    {
      platform: 'Podbean',
      link: `https://www.podbean.com/itunes/${itunesId}`,
    },
    {
      platform: 'Podcast Addict',
      link: `https://podcastaddict.com/feed/${encodeURIComponent(feedUrl)}`,
    },
    {
      platform: 'Podcast Guru',
      link: `https://app.podcastguru.io/podcast/${itunesId}`,
    },
    {
      platform: 'Podfriend',
      link: `https://web.podfriend.com/podcast/${itunesId}`,
    },
    {
      platform: 'Podhero',
      link: `https://podhero.com/podcast/feed/${encodeURIComponent(feedUrl)}`,
    },
    {
      platform: 'RadioPublic',
      link: `https://radiopublic.com/${encodeURIComponent(feedUrl)}`,
    },
    {
      platform: 'Sonnet',
      link: `https://sonnet.fm/p/${itunesId}`,
    },
    {
      platform: 'Momento',
      link: `https://momento.fm/pod/${itunesId}`,
    },
  ]
}
