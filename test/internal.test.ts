import { getFeedUrl, base64Encode } from '../src/internal'

describe('getFeedUrl', () => {
  it('should work', async() => {
    const expectResult = 'https://crazy.capital/feed'
    const actualResult = await getFeedUrl(1088178402)
    expect(actualResult).toEqual(expectResult)
  })
})

describe('base64Encode', () => {
  it('should work on Node env', () => {
    const expectResult = 'cG9kY2FzdA=='
    const actualResult = base64Encode('podcast')
    expect(actualResult).toEqual(expectResult)
  })
})
