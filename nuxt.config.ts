const keywords = `Iron Tunnel, VPN extension, Chrome VPN, secure browsing, online privacy, bypass geo-restrictions, anonymous browsing, internet security, encrypted connection, free VPN, fast VPN, unblock websites, public Wi-Fi security, no-logs VPN, streaming VPN, privacy protection`
const description = `Iron Tunnel is a powerful and secure VPN extension for Google Chrome, designed to provide you with unrestricted access to the internet. Protect your online privacy, bypass geo-restrictions, and enjoy fast, anonymous browsing with just one click. Whether you're streaming content, accessing blocked websites, or safeguarding your data on public Wi-Fi, Iron Tunnel ensures your connection is encrypted and your identity remains private. Experience seamless browsing with no logs, no hassle, and complete peace of mind.`

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: false },

  // This reverts the new srcDir default from `app` back to your root directory
  future: {
    compatibilityVersion: 4,
  },

  experimental: {
    sharedPrerenderData: false,
    compileTemplate: true,
    resetAsyncDataToUndefined: true,
    templateUtils: true,
    relativeWatchPaths: true,
    defaults: {
      useAsyncData: {
        deep: true,
      },
    },
  },

  app: {
    head: {
      title: `Iron Tunnel | Unlimited VPN Proxy`,
      meta: [
        { charset: 'UTF8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: description },
        { name: 'keywords', content: keywords },
        { name: 'robots', content: 'index,follow' },
        
        // Open Graph
        { property: 'og:title', content: `Iron Tunnel | Unlimited VPN Proxy` },
        { property: 'og:description', content: description },
        { property: 'og:url', content: 'https://irontunnel.world' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Iron Tunnel' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: `Iron Tunnel | Unlimited VPN Proxy` },
        { name: 'twitter:description', content: description },

        // IOS
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'content' },
        { name: 'apple-mobile-web-app-title', content: 'Iron Tunnel' },
        { name: 'theme-color', content: '#fb1017' }
      ],

      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-48x48.png', sizes: '48x48' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ],

      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': "Organization",
            name: "GENZY Token",
            description: description,
            keywords: keywords
          })
        },
        {
          innerHTML: `!function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '416208351532463'); 
          fbq('track', 'PageView');`
        }
      ],

      noscript: [
        {
          innerHTML:  `<img height="1" width="1" src="https://www.facebook.com/tr?id=416208351532463&ev=PageView&noscript=1" />`
        },
      ]
      
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt'
  ],

  css: [
    '~/assets/css/main.css'
  ]
})