import { getFeedUrl, base64Encode } from './internal'
import { PodcastPlatformLinkItem } from './types'

export const getPodcastPlatformLinks = async(
  appleId: number,
): Promise<PodcastPlatformLinkItem[]> => {
  const feedUrl = await getFeedUrl(appleId)

  return [
    {
      platform: 'Apple Podcasts',
      link: `https://podcasts.apple.com/podcast/id${appleId}`,
    },
    {
      platform: 'Breaker',
      link: `https://breaker.audio/shows?feed_url=${encodeURIComponent(
        feedUrl,
      )}`,
    },
    {
      platform: 'Bullhorn',
      link: `https://bullhorn.fm/podchaser/itunes/${appleId}`,
    },
    {
      platform: 'Castbox',
      link: `https://castbox.fm/vic/${appleId}`,
    },
    {
      platform: 'Castro',
      link: `https://castro.fm/itunes/${appleId}`,
    },
    {
      platform: 'Google Podcasts',
      link: `https://podcasts.google.com/?feed=${base64Encode(feedUrl)}`,
    },
    {
      platform: 'Overcast',
      link: `https://overcast.fm/itunes${appleId}`,
    },
    {
      platform: 'Player FM',
      link: `https://player.fm/series/${encodeURIComponent(feedUrl)}`,
    },
    {
      platform: 'Pocket Casts',
      link: `https://pca.st/itunes/${appleId}`,
    },
    {
      platform: 'Podbean',
      link: `https://podbean.com/play/${encodeURIComponent(feedUrl)}`,
    },
    {
      platform: 'Podcast Addict',
      link: `https://podcastaddict.com/feed/${encodeURIComponent(feedUrl)}`,
    },
    {
      platform: 'Podcast Guru',
      link: `https://app.podcastguru.io/podcast/${appleId}`,
    },
    {
      platform: 'Podfriend',
      link: `https://web.podfriend.com/podcast/${appleId}`,
    },
    {
      platform: 'Podhero',
      link: `https://podhero.com/podcast/feed/${encodeURIComponent(feedUrl)}`,
    },
    {
      platform: 'Podknife',
      link: `https://podknife.com/podcast?feed_url=${appleId}`,
    },
    {
      platform: 'RadioPublic',
      link: `https://radiopublic.com/${encodeURIComponent(feedUrl)}`,
    },
    {
      platform: 'Sonnet',
      link: `https://sonnet.fm/p/${appleId}`,
    },
  ]
}
