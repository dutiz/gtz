import '../styles/globals.css'
import '@fontsource/jost/400.css'
import '@fontsource/jost/500.css'
import '@fontsource/jost/600.css'
import '@fontsource/jost/700.css'

import { useRouter } from 'next/router'
import Script from 'next/script'
import { NextSeo } from 'next-seo'
import { useEffect } from 'react'

import * as gtag from '../lib/gtag'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <NextSeo
        openGraph={{
          type: 'website',
          locale: 'en_EN',
          url: 'https://gtz.mk/',
          site_name: 'GTZ Maceddonia',
          description: 'We Build The Future',
          images: [
            {
              url: 'https://gtz.mk/images/og-image.png',
              alt: 'OG Image',
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
