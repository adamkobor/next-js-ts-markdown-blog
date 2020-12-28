import {AppProps} from 'next/app'
import '../styles/index.css'
import {Router} from 'next/router';
import * as gtag from '../lib/gtag'
import SimpleReactLightbox from 'simple-react-lightbox';

Router.events.on('routeChangeComplete', (url) => gtag.pageView(url))

export default function MyApp({Component, pageProps}: AppProps) {
  return (
    <SimpleReactLightbox>
      <Component {...pageProps} />
    </SimpleReactLightbox>
  )
}
