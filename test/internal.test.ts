import { getFeedUrl, universalBtoa } from '../src/internal'

describe('getFeedUrl', () => {
  it('should work', async() => {
    const expectResult = 'https://crazy.capital/feed'
    const actualResult = await getFeedUrl(1088178402)
    expect(actualResult).toEqual(expectResult)
  })
})

describe('universalBtoa', () => {
  it('should work on Node env', () => {
    const expectResult = 'cG9kY2FzdA=='
    const actualResult = universalBtoa('podcast')
    expect(actualResult).toEqual(expectResult)
  })

  /**
   * @jest-environment jsdom
   */
  it('should work on Browser env', () => {
    const expectResult = 'cG9kY2FzdA=='
    const actualResult = universalBtoa('podcast')
    expect(actualResult).toEqual(expectResult)
  })
})
