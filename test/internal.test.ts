import { getPodcastInfo, base64Encode } from '../src/internal'

describe('getPodcastInfo', () => {
  it('should work', async() => {
    const expectResult = {
      artistName: '黄海、Rio',
      artworkUrl600:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts115/v4/e8/d8/8e/e8d88ed9-b12c-b8d9-5e5d-25682f72c182/mza_4966428153200416701.png/600x600bb.jpg',
      collectionId: 1088178402,
      collectionName: '疯投圈',
      collectionViewUrl:
        'https://podcasts.apple.com/us/podcast/%E7%96%AF%E6%8A%95%E5%9C%88/id1088178402?uo=4',
      feedUrl: 'https://crazy.capital/feed',
    }
    const actualResult = await getPodcastInfo(1088178402)
    expect(actualResult).toStrictEqual(expectResult)
  })
})

describe('base64Encode', () => {
  it('should work on Node env', () => {
    const expectResult = 'cG9kY2FzdA=='
    const actualResult = base64Encode('podcast')
    expect(actualResult).toEqual(expectResult)
  })
})
