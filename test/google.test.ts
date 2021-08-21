import { getGooglePodcastFeedLink } from '../src'

describe('getGooglePodcastFeedLink', () => {
  it('should work', async() => {
    const expectResult
      = 'https://podcasts.google.com/feed/aHR0cHM6Ly9jcmF6eS5jYXBpdGFsL2ZlZWQ'
    const actualResult = await getGooglePodcastFeedLink('风投圈')
    expect(actualResult).toEqual(expectResult)
  })
})
