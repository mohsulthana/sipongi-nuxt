<template>
  <div class="inner-page">
    <div class="page-blog">
      <b-container>
        <b-row>
          <b-col md="10" lg="8" offset-md="1" offset-lg="2">
            <b-link to="/blog" class="back-link"
              ><img src="/mini_arrow_left-gray.svg" alt="" /> Kembali ke halaman
              blog</b-link
            >
            <div
              class="image"
              :style="{ backgroundImage: 'url(' + data.image_url + ')' }"
            ></div>
            <h3 class="title">{{ data.title }}</h3>
            <span class="date">{{ data.publish_at }}</span>
            <vue-markdown v-html="data.desc"></vue-markdown>
          </b-col>
        </b-row>

        <div class="share-wrap">
          <h6>Bagikan</h6>
          <ShareNetwork
            network="twitter"
            :url="baseUrl + $nuxt.$route.fullPath"
            :title="data.title"
            :description="data.meta_desc"
          >
            <i class="fab fa-twitter"></i>
          </ShareNetwork>
          <ShareNetwork
            network="facebook"
            :url="baseUrl + $nuxt.$route.fullPath"
            :title="data.title"
            :description="data.meta_desc"
          >
            <i class="fab fa-facebook-f"></i>
          </ShareNetwork>
        </div>
      </b-container>
    </div>
    <div class="splash-screen" v-if="$fetchState.pending">
      <div class="wrap">
        <h4>Mohon Tunggu Sebentar</h4>
        <b-spinner
          style="width: 3rem; height: 3rem;"
          label="Large Spinner"
        ></b-spinner>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'front',
  async fetch() {
    const url = !process.server
      ? `/v1/detailBerita/${this.$route.params.id}`
      : `/api/detailBerita/${this.$route.params.id}`

    await this.$axios
      .$get(url)
      .then((res) => {
        this.data = res
      })
      .catch((err) => {
        if (err.response) {
          const { status, data } = err.response
          if (status === 500) {
            this.$nuxt.error({ statusCode: 500, message: data.message })
          }

          if (status === 404) {
            this.$nuxt.error({ statusCode: 404, message: data.message })
          }
        }
      })
  },
  data() {
    return {
      data: {},
      baseUrl: process.env.BASE_URL,
      detail: {
        image:
          'https://images.unsplash.com/photo-1572204097183-e1ab140342ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        title: 'Pemadaman di wilker Daops Singkawang, Kalbar',
        date: '23 Sep 2020',
        shortDesc: 'test test test test',
        desc:
          '<p>Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat tincidunt. Nam sem lacus, ornare non ante sed, ultricies fringilla massa. Ut congue, elit non tempus elementum, sem risus tincidunt diam, vitae sodales diam ipsum vitae purus. Fusce tristique erat nulla, vel viverra mi auctor non. Integer ante lorem, dictum at felis at, bibendum egestas augue. Aenean vestibulum lacus dolor, id tincidunt arcu pellentesque ut. Mauris sed venenatis diam, quis aliquam odio. Mauris lobortis augue placerat elit ultrices, non laoreet nunc semper. Phasellus dolor sapien, molestie at ante id, porta interdum nisl. Duis sit amet ante feugiat enim viverra sagittis. Sed vitae pulvinar augue. Donec sit amet dolor non velit tincidunt commodo.<p> <p>Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat tincidunt. Nam sem lacus, ornare non ante sed, ultricies fringilla massa. Ut congue, elit non tempus elementum, sem risus tincidunt diam, vitae sodales diam ipsum vitae purus. Fusce tristique erat nulla, vel viverra mi auctor non. Integer ante lorem, dictum at felis at, bibendum egestas augue. Aenean vestibulum lacus dolor, id tincidunt arcu pellentesque ut. Mauris sed venenatis diam, quis aliquam odio. Mauris lobortis augue placerat elit ultrices, non laoreet nunc semper. Phasellus dolor sapien, molestie at ante id, porta interdum nisl. Duis sit amet ante feugiat enim viverra sagittis. Sed vitae pulvinar augue. Donec sit amet dolor non velit tincidunt commodo.</p>',
      },
    }
  },
  created() {
    this.$nextTick(function () {
      this.updateHeader()
    })
  },
  methods: {
    updateHeader() {
      this.$store.commit('head/innerHeader', true)
    },
  },
  head() {
    return {
      title: this.data.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.data.meta_desc,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'articel,berita,sipongi,karhutla,kebakaran,hutan,indonesia',
        },
        {
          property: 'article:published_time',
          content: this.data.created_at,
        },
        {
          property: 'og:description',
          content: this.data.meta_desc,
        },
        {
          property: 'og:title',
          content: this.data.title,
        },
        {
          property: 'og:image',
          content: this.data.image_url,
        },
        {
          property: 'og:url',
          content: this.baseUrl + this.$route.fullPath,
        },
        {
          property: 'og:type',
          content: 'article',
        },
      ],
    }
  },
}
</script>
