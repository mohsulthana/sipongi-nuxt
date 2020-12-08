const pkg = require('./package');
var webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: '',
    titleTemplate: (titleChunk) => {
      // If undefined or blank then we don't need the hyphen
      return titleChunk ? `${titleChunk} - Sipongi+` : 'Sipongi+'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Website Sipongi+ Pemantauan Kebakaran Hutan dan Lahan',
      },
      {
        property: 'og:site_name',
        content: 'Website Sipongi+',
      },
    ],
    script: [
			{ src: "https://unpkg.com/xlsx/dist/shim.min.js" },
			{ src: "https://unpkg.com/xlsx/dist/xlsx.full.min.js" }
		],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/kementerian-logo.svg' },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css',
        integrity:
          'sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr',
        crossorigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Rubik:ital,wght@0,400;0,500;1,700&display=swap',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [
    {
      src: '~/assets/css/app.scss',
    },
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    {
      src: '~plugins/vue-analytics.js', mode: 'client'
    },
    {
      src: '~/plugins/vue2-leaflet-markercluster.js',
      ssr: false,
    },
    {
      src: '~/plugins/vue-scrollto',
      ssr: true,
    },
    {
      src: '~/plugins/leaflet-velocity.js',
      ssr: false,
    },
    {
      src: '~/plugins/vue-markdown.js',
      ssr: false,
    },
    {
      src: '~/plugins/vue2-datetimepicker',
      ssr: false,
    },
    {
      src: '~/plugins/vue-slick-carousel.js',
      ssr: false,
    },
    {
      src: '~plugins/ga.js', mode: 'client',
    },
    {
      src: '~/plugins/vue-flickity.js',
      ssr: false,
    },
    {
      src: '~/plugins/slide-menu.js',
      ssr: false,
    },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    [
     'nuxt-fontawesome', {
       imports: [
         {
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['fas']
         },
         {
           set: '@fortawesome/free-brands-svg-icons',
          icons: ['fab']
         }
       ]
    }
    ],
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/proxy',
    '@nuxtjs/toast',
    '@nuxtjs/dotenv',
    'nuxt-leaflet',
    'vue-social-sharing/nuxt',
    ['@nuxtjs/moment', ['id']],
  ],

  toast: {
    position: 'top-right',
    iconPack: 'material',
    register: [
      // Register custom toasts
      {
        name: 'myError',
        message: (message) => message,
        options: {
          type: 'error',
          icon: 'cancel',
          theme: 'outline',
          duration: 3000,
        },
      },
      {
        name: 'myInfo',
        message: (message) => message,
        options: {
          type: 'info',
          icon: 'error_outline',
          theme: 'outline',
          duration: 3000,
        },
      },
      {
        name: 'mySuccess',
        message: (message) => message,
        options: {
          type: 'success',
          icon: 'check_circle_outline',
          theme: 'outline',
          duration: 3000,
        },
      },
    ],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true,
  },

  proxy: {
    '/v1': {
      target: process.env.API_URL,
      pathRewrite: {
        '^/v1': '/api',
      },
    },
    '/api': {
      target: process.env.API_URL,
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
  },

  server: {
    port: process.env.PORT || 3000, // default: 3000
    host: process.env.HOST || 'localhost', // default: localhost
  },
}
