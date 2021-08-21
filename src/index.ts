import { tall } from 'tall'
import pProps from 'p-props'
import { getFeedId, getOriginalFeedLinks } from './internal'

export const getFeedLinks = async(name: string): Promise<any> => {
  const id = await getFeedId(name)
  const originalFeedLinks = await getOriginalFeedLinks(id)
  const sites = originalFeedLinks.reduce((result: {
    [key: string]: Promise<string>
  }, item) => {
    result[item.platform] = tall(item.url)
    return result
  }, {})

  return pProps(sites)
}
