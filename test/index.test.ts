import { getPodcastPlatformLinks, PodcastPlatformLinkItem } from '../src'

describe('getPodcastPlatformLinks', () => {
  it('should work', async() => {
    const expectResult: PodcastPlatformLinkItem[] = [
      {
        platform: 'Apple Podcasts',
        link: 'https://podcasts.apple.com/podcast/id1088178402',
      },
      {
        platform: 'Bullhorn',
        link: 'https://bullhorn.fm/podchaser/itunes/1088178402',
      },
      { platform: 'Castbox', link: 'https://castbox.fm/vic/1088178402' },
      { platform: 'Castro', link: 'https://castro.fm/itunes/1088178402' },
      {
        platform: 'Google Podcasts',
        link: 'https://podcasts.google.com/?feed=aHR0cHM6Ly9jcmF6eS5jYXBpdGFsL2ZlZWQ=',
      },
      { platform: 'Overcast', link: 'https://overcast.fm/itunes1088178402' },
      {
        platform: 'Player FM',
        link: 'https://player.fm/subscribe?id=https%3A%2F%2Fcrazy.capital%2Ffeed',
      },
      { platform: 'Pocket Casts', link: 'https://pca.st/itunes/1088178402' },
      {
        platform: 'Podbean',
        link: 'https://www.podbean.com/itunes/1088178402',
      },
      {
        platform: 'Podcast Addict',
        link: 'https://podcastaddict.com/feed/https%3A%2F%2Fcrazy.capital%2Ffeed',
      },
      {
        platform: 'Podcast Guru',
        link: 'https://app.podcastguru.io/podcast/1088178402',
      },
      {
        platform: 'Podfriend',
        link: 'https://web.podfriend.com/podcast/1088178402',
      },
      {
        platform: 'Podhero',
        link: 'https://podhero.com/podcast/feed/https%3A%2F%2Fcrazy.capital%2Ffeed',
      },
      {
        platform: 'RadioPublic',
        link: 'https://radiopublic.com/https%3A%2F%2Fcrazy.capital%2Ffeed',
      },
      { platform: 'Sonnet', link: 'https://sonnet.fm/p/1088178402' },
      { platform: 'Momento', link: 'https://momento.fm/pod/1088178402' },
    ]
    const actualResult = await getPodcastPlatformLinks(1088178402, 'https://crazy.capital/feed')
    expect(actualResult).toEqual(expectResult)
  })
})
