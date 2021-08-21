import got from 'got'
import cheerio from 'cheerio'

const GOOGLE_PODCAST_URL = 'https://podcasts.google.com'

export const getGooglePodcastFeedLink = async(name: string) => {
  try {
    const html = await got(`${GOOGLE_PODCAST_URL}/search/${name}`).text()
    const $ = cheerio.load(html)
    const feedUrl = $('a[href^=\'./feed\']').first().attr('href')
    return `${GOOGLE_PODCAST_URL}${feedUrl?.replace('.', '')}`
  }
  catch (err) {
    throw new Error(err)
  }
}
