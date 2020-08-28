<template>
  <div class="inner-page">
    <div class="page-desc">
      <b-container>
        <b-row>
          <b-col md="7">
            <h3>Sipongi+ Blog</h3>
            <h6>
              Informasi seputar kegiatan pemadaman yang dilakukan oleh
              manggalana agni serta updates informasi seputar peringatan
              kebakaran
            </h6>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="blog-wrap">
      <b-container>
        <b-row>
          <b-col md="4" v-for="blog in beritas" :key="blog.slug">
            <b-link :to="`/blog/${blog.slug}`" class="blog-item">
              <div
                class="image"
                :style="{ backgroundImage: `url(${blog.image_url})` }"
              ></div>
              <h5>{{ blog.title }}</h5>
              <span>{{ blog.created_at }}</span>
            </b-link>
          </b-col>
          <b-col v-if="loadMore" md="12" class="text-center">
            <button class="btn btn-ghost" @click="loadMoreData()">
              Tampilkan Lebih Banyak
            </button>
          </b-col>
        </b-row>
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
    const url = !process.server ? `/v1/listBerita` : `/api/listBerita`

    const params = {
      direction: this.options.direction,
      sortBy: this.options.sortBy,
      page: this.options.page,
      per_page: this.options.per_page,
    }

    await this.$axios
      .$get(url, {
        params,
      })
      .then((res) => {
        this.beritas = this.beritas.concat(res.data)
        this.loadMore = !!res.links.next
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
      beritas: [],
      options: {
        direction: 'desc',
        sortBy: 'created_at',
        page: 1,
        per_page: 6,
      },
      loadMore: false,
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
    async loadMoreData() {
      this.options.page++
      await this.$fetch()
    },
  },
  head() {
    return {
      title: 'Blog',
    }
  },
}
</script>
