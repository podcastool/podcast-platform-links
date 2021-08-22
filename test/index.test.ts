import { getPodacstPlatformLinks } from '../src'

describe('getPodacstPlatformLinks', () => {
  it('should work', async() => {
    const expectResult = [
      {
        platform: 'apple',
        link: 'https://podcasts.apple.com/podcast/id1088178402',
      },
      {
        platform: 'breaker',
        link: 'https://breaker.audio/shows?feed_url=https%3A%2F%2Fcrazy.capital%2Ffeed',
      },
      {
        platform: 'bullhorn',
        link: 'https://bullhorn.fm/podchaser/itunes/1088178402',
      },
      { platform: 'castbox', link: 'https://castbox.fm/vic/1088178402' },
      { platform: 'castro', link: 'https://castro.fm/itunes/1088178402' },
      {
        platform: 'google',
        link: 'https://podcasts.google.com/?feed=aHR0cHM6Ly9jcmF6eS5jYXBpdGFsL2ZlZWQ=',
      },
      { platform: 'overcast', link: 'https://overcast.fm/itunes1088178402' },
      {
        platform: 'player',
        link: 'https://player.fm/series/https%3A%2F%2Fcrazy.capital%2Ffeed',
      },
      { platform: 'pocketcasts', link: 'https://pca.st/itunes/1088178402' },
      {
        platform: 'podbean',
        link: 'https://podbean.com/play/https%3A%2F%2Fcrazy.capital%2Ffeed',
      },
      {
        platform: 'podcastaddict',
        link: 'https://podcastaddict.com/feed/https%3A%2F%2Fcrazy.capital%2Ffeed',
      },
      {
        platform: 'podcastguru',
        link: 'https://app.podcastguru.io/podcast/1088178402',
      },
      {
        platform: 'podfriend',
        link: 'https://web.podfriend.com/podcast/1088178402',
      },
      {
        platform: 'podhero',
        link: 'https://podhero.com/podcast/feed/https%3A%2F%2Fcrazy.capital%2Ffeed',
      },
      {
        platform: 'podknife',
        link: 'https://podknife.com/podcast?feed_url=1088178402',
      },
      {
        platform: 'radiopublic',
        link: 'https://radiopublic.com/https%3A%2F%2Fcrazy.capital%2Ffeed',
      },
      { platform: 'sonnet', link: 'https://sonnet.fm/p/1088178402' },
    ]
    const actualResult = await getPodacstPlatformLinks(1088178402)
    expect(actualResult).toEqual(expectResult)
  })
})
