<template>
  <div class="inner-page">
    <div class="page-desc">
      <b-container>
        <b-row>
          <b-col md="7">
            <h3>Publikasi</h3>
            <!-- <h6>
              Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit
              amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut,
              dignissim elementum mauris. Sed dapibus auctor
            </h6> -->
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="tentang-wrap">
      <b-container>
        <b-row>
          <b-col md="12">
            <b-tabs>
              <!-- Peraturan Perundangan -->
              <b-tab title="Peraturan Perundangan" active>
                <b-row>
                  <b-col md="9" class="text-center">
                    <div role="tablist" class="accordion-publikasi">
                      <b-card
                        v-for="(kat, index) in kategories"
                        no-body
                        class="mb-1"
                        :key="kat.slug"
                      >
                        <b-card-header header-tag="header" role="tab">
                          <b-button
                            block
                            v-b-toggle="`${kat.slug}`"
                            variant="info"
                          >
                            <h5>
                              {{ kat.name }}
                            </h5>
                            <img src="/arrow-orange.svg" alt="" />
                          </b-button>
                        </b-card-header>
                        <b-collapse
                          :id="kat.slug"
                          :visible="index === 0"
                          accordion="my-accordion"
                          role="tabpanel"
                        >
                          <b-card-body>
                            <div
                              v-for="perpu in kat.perpu.data"
                              :key="perpu.slug"
                              class="uud-item"
                            >
                              <b-link
                                :href="`${
                                  perpu.tipe === 'file'
                                    ? `/v1/peraturan-perundangan/file/${perpu.slug}`
                                    : perpu.file_url
                                }`"
                                target="_blank"
                              >
                                {{ perpu.title }}
                              </b-link>
                              <span>
                                {{ perpu.nomor }}
                              </span>
                            </div>
                          </b-card-body>
                        </b-collapse>
                      </b-card>
                    </div>
                  </b-col>
                </b-row>
              </b-tab>
              <!-- Dokumen Lainnya -->
              <b-tab title="Dokumen Lainnya">
                <b-row>
                  <b-col md="9">
                    <div
                      v-for="dok in dokumen"
                      :key="dok.slug"
                      class="document-item"
                    >
                      <img
                        :src="`/${
                          dok.tipe === 'file'
                            ? 'paper.svg'
                            : dok.tipe === 'video'
                            ? 'video.svg'
                            : 'paper.svg'
                        }`"
                        alt="icon"
                      />
                      <h5>{{ dok.title }}</h5>
                      <b-link
                        :href="`${
                          dok.tipe === 'file'
                            ? `/v1/dokumen-lain/file/${dok.slug}`
                            : dok.file_url
                        }`"
                        target="_blank"
                        :class="`btn ${
                          dok.tipe === 'file'
                            ? 'btn-secondary'
                            : dok.tipe === 'video'
                            ? 'btn-third'
                            : 'btn-secondary'
                        }`"
                      >
                        {{
                          dok.tipe === 'file'
                            ? 'Download'
                            : dok.tipe === 'video'
                            ? 'Watch'
                            : 'Open'
                        }}
                        <i class="fas fa-angle-right"></i>
                      </b-link>
                    </div>
                    <div v-if="loadMore" class="text-center mt-4">
                      <b-button @click="loadMoreData()" variant="primary"
                        >Lihat lebih banyak</b-button
                      >
                    </div>
                  </b-col>
                </b-row>
              </b-tab>
              <!-- Laporan Harian Posko -->
              <b-tab title="Laporan Harian Posko">
                <b-row>
                  <b-col md="9">
                    <div
                      v-for="(laporan,i) in laporanHarian"
                      :key="i"
                      class="document-item"
                    >
                      <img
                        :src="`/paper.svg`"
                        alt="icon"
                      />
                      <h5>{{ laporan.bulan_nama }}&nbsp;{{ laporan.tahun }}</h5>
                      <b-link
                        :href="laporan.link"
                        target="_blank"
                        class="btn btn-secondary"
                      >
                        Open
                        <i class="fas fa-angle-right"></i>
                      </b-link>
                    </div>
                    <div v-if="loadMoreLaporan" class="text-center mt-4">
                      <b-button @click="loadMoreDataLaporan()" variant="primary"
                        >Lihat lebih banyak</b-button
                      >
                    </div>
                  </b-col>
                </b-row>
              </b-tab>
            </b-tabs>
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
    const url = !process.server ? `/v1/listDokumen` : `/api/listDokumen`

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
        this.dokumen = this.dokumen.concat(res.data)
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

    const urlPerpu = !process.server ? `/v1/listPerpu` : `/api/listPerpu`

    await this.$axios
      .$get(urlPerpu)
      .then((res) => {
        this.kategories = res.data
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


    // Laporan Harian
    const urlLaporan = !process.server ? `/v1/data/laporan-harian` : `/api/data/laporan-harian`

    const paramsLaporan = {
      direction: this.options.direction,
      sortBy: this.options.sortBy,
      page: this.options.page,
      per_page: this.options.per_page,
    }

    await this.$axios
      .$get(urlLaporan, {
        paramsLaporan,
      })
      .then((res) => {
        this.laporanHarian = this.laporanHarian.concat(res.data)
        this.loadMoreLaporan = !!res.links.next
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
      kategories: [],
      dokumen: [],
      options: {
        direction: 'desc',
        sortBy: 'created_at',
        page: 1,
        per_page: 15,
      },
      loadMore: false,
      laporanHarian: [],
      optionsLaporan: {
        direction: 'desc',
        sortBy: 'created_at',
        page: 1,
        per_page: 15,
      },
      loadMoreLaporan: false,
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

    async loadMoreDataLaporan() {
      this.optionsLaporan.page++
      await this.$fetch()
    }
  },
  head() {
    return {
      title: 'Publikasi',
    }
  },
}
</script>
