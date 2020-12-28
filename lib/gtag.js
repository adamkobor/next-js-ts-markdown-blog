import { GA_TRACKING_ID } from './constants'

export const pageView = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}
