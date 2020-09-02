<template>
  <div class="inner-page">
    <div class="page-desc">
      <b-container>
        <b-row>
          <b-col md="7">
            <h3>Sipongi+ Galeri</h3>
            <h6>
              Informasi seputar kegiatan pemadaman yang dilakukan oleh
              manggalana agni serta updates informasi seputar peringatan
              kebakaran
            </h6>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="tentang-wrap">
      <b-container>
        <b-row>
          <b-col md="12">
            <b-tabs>
              <b-tab title="Kegiatan Pemadaman" active>
                <b-row>
                  <b-col md="4" v-for="gal in pemadamans" :key="gal.id">
                    <b-link :to="'/galeri/' + gal.slug" class="gal-item">
                      <div
                        class="image"
                        :style="{
                          backgroundImage: 'url(' + gal.detail.image_url + ')',
                        }"
                      ></div>
                      <h5>{{ gal.title }}</h5>
                      <span>{{
                        $moment(gal.created_at).format('DD MMMM YYYY')
                      }}</span>
                    </b-link>
                  </b-col>
                  <b-col v-if="loadMore" md="12" class="text-center">
                    <button class="btn btn-ghost" @click="loadMoreData()">
                      Tampilkan Lebih Banyak
                    </button>
                  </b-col>
                </b-row>
              </b-tab>
              <b-tab title="Kegiatan Lainnya">
                <b-row>
                  <b-col md="4" v-for="gal in lains" :key="gal.id">
                    <b-link :to="'/galeri/' + gal.slug" class="gal-item">
                      <div
                        class="image"
                        :style="{
                          backgroundImage: 'url(' + gal.detail.image_url + ')',
                        }"
                      ></div>
                      <h5>{{ gal.title }}</h5>
                      <span>{{
                        $moment(gal.created_at).format('DD MMMM YYYY')
                      }}</span>
                    </b-link>
                  </b-col>
                  <b-col v-if="loadMoreLain" md="12" class="text-center">
                    <button class="btn btn-ghost" @click="loadMoreDataLain()">
                      Tampilkan Lebih Banyak
                    </button>
                  </b-col>
                </b-row>
              </b-tab>
            </b-tabs>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="splash-screen" v-if="loading">
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
    await this.loadPemadaman()
    await this.loadLain()
  },
  data() {
    return {
      pemadamans: [],
      lains: [],
      options: {
        tipe: 'Pemadaman',
        page: 1,
        per_page: 9,
      },
      optionsLain: {
        tipe: 'Lainnya',
        page: 1,
        per_page: 9,
      },
      loadMore: false,
      loadMoreLain: false,
      loading: false,
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
    async loadPemadaman() {
      this.loading = true
      const url = !process.server ? `/v1/listGaleri` : `/api/listGaleri`

      const params = {
        tipe: this.options.tipe,
        page: this.options.page,
        per_page: this.options.per_page,
      }

      await this.$axios
        .$get(url, {
          params,
        })
        .then((res) => {
          this.pemadamans = this.pemadamans.concat(res.data)
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
        .finally(async () => {
          this.loading = false
        })
    },
    async loadLain() {
      this.loading = true
      const url = !process.server ? `/v1/listGaleri` : `/api/listGaleri`

      const params = {
        tipe: this.optionsLain.tipe,
        page: this.optionsLain.page,
        per_page: this.optionsLain.per_page,
      }

      await this.$axios
        .$get(url, {
          params,
        })
        .then((res) => {
          this.lains = this.lains.concat(res.data)
          this.loadMoreLain = !!res.links.next
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
        .finally(async () => {
          this.loading = false
        })
    },
    async loadMoreData() {
      this.options.page++
      await this.loadPemadaman()
    },
    async loadMoreDataLain() {
      this.optionsLain.page++
      await this.loadLain()
    },
  },
  head() {
    return {
      title: 'Galeri',
    }
  },
}
</script>
