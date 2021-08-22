import { getFeedUrl, universalBtoa } from './internal'
import { PodcastPlatformLinkItem, Platform } from './types'

export type {
  PodcastPlatformLinkItem,
  Platform,
}

export const getPodacstPlatformLinks = async(
  appleId: number,
): Promise<PodcastPlatformLinkItem[]> => {
  const feedUrl = await getFeedUrl(appleId)

  return [
    {
      platform: 'apple',
      link: `https://podcasts.apple.com/podcast/id${appleId}`,
    },
    {
      platform: 'breaker',
      link: `https://breaker.audio/shows?feed_url=${encodeURIComponent(
        feedUrl,
      )}`,
    },
    {
      platform: 'bullhorn',
      link: `https://bullhorn.fm/podchaser/itunes/${appleId}`,
    },
    {
      platform: 'castbox',
      link: `https://castbox.fm/vic/${appleId}`,
    },
    {
      platform: 'castro',
      link: `https://castro.fm/itunes/${appleId}`,
    },
    {
      platform: 'google',
      link: `https://podcasts.google.com/?feed=${universalBtoa(feedUrl)}`,
    },
    {
      platform: 'overcast',
      link: `https://overcast.fm/itunes${appleId}`,
    },
    {
      platform: 'player',
      link: `https://player.fm/series/${encodeURIComponent(feedUrl)}`,
    },
    {
      platform: 'pocketcasts',
      link: `https://pca.st/itunes/${appleId}`,
    },
    {
      platform: 'podbean',
      link: `https://podbean.com/play/${encodeURIComponent(feedUrl)}`,
    },
    {
      platform: 'podcastaddict',
      link: `https://podcastaddict.com/feed/${encodeURIComponent(feedUrl)}`,
    },
    {
      platform: 'podcastguru',
      link: `https://app.podcastguru.io/podcast/${appleId}`,
    },
    {
      platform: 'podfriend',
      link: `https://web.podfriend.com/podcast/${appleId}`,
    },
    {
      platform: 'podhero',
      link: `https://podhero.com/podcast/feed/${encodeURIComponent(feedUrl)}`,
    },
    {
      platform: 'podknife',
      link: `https://podknife.com/podcast?feed_url=${appleId}`,
    },
    {
      platform: 'radiopublic',
      link: `https://radiopublic.com/${encodeURIComponent(feedUrl)}`,
    },
    {
      platform: 'sonnet',
      link: `https://sonnet.fm/p/${appleId}`,
    },
  ]
}
