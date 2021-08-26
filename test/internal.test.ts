import { base64Encode } from '../src/internal'

describe('base64Encode', () => {
  it('should work on Node env', () => {
    const expectResult = 'cG9kY2FzdA=='
    const actualResult = base64Encode('podcast')
    expect(actualResult).toEqual(expectResult)
  })
})
