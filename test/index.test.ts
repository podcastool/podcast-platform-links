import { getFeedId, getOriginalFeedLinks } from '../src/internal'
import { getFeedLinks } from '../src'

describe('getFeedId', () => {
  it('should work', async() => {
    const expectResult = 1453346141
    const actualResult = await getFeedId('海螺电台')
    expect(actualResult).toEqual(expectResult)
  })
})

describe('getOriginalFeedLinks', () => {
  it('should work', async() => {
    const expectResult = [
      { platform: 'apple', url: 'https://pod.link/1453346141.apple' },
      { platform: 'spotify', url: 'https://pod.link/1453346141.spotify' },
      { platform: 'google', url: 'https://pod.link/1453346141.google' },
      { platform: 'overcast', url: 'https://pod.link/1453346141.overcast' },
      { platform: 'stitcher', url: 'https://pod.link/1453346141.stitcher' },
      { platform: 'castbox', url: 'https://pod.link/1453346141.castbox' },
      { platform: 'castro', url: 'https://pod.link/1453346141.castro' },
      {
        platform: 'podcastaddict',
        url: 'https://pod.link/1453346141.podcastaddict',
      },
      {
        platform: 'pocketcasts',
        url: 'https://pod.link/1453346141.pocketcasts',
      },
      {
        platform: 'iheartradio',
        url: 'https://pod.link/1453346141.iheartradio',
      },
      { platform: 'playerfm', url: 'https://pod.link/1453346141.playerfm' },
      { platform: 'breaker', url: 'https://pod.link/1453346141.breaker' },
      {
        platform: 'radiopublic',
        url: 'https://pod.link/1453346141.radiopublic',
      },
      { platform: 'rss', url: 'https://pod.link/1453346141.rss' },
    ]
    const actualResult = await getOriginalFeedLinks(1453346141)
    expect(actualResult).toEqual(expectResult)
  })

  it('id is wrong | return []', async() => {
    const expectResult: any[] = []
    const actualResult = await getOriginalFeedLinks(123456)
    expect(actualResult).toEqual(expectResult)
  })
})

describe('getFeedLinks', () => {
  it('should work', async() => {
    const actualResult = await getFeedLinks('海螺电台')
    expect(actualResult).toHaveProperty('spotify', 'https://open.spotify.com/show/2dmXaTPuhzANPVsNsjeVIH')
  })
})
