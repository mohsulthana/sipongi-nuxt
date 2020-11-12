<template>
  <div>
    <div class="hero" style="background-image: url('/hero.svg');">
      <b-container>
        <b-row>
          <b-col md="7">
            <h2>Pemantauan Kebakaran Hutan dan Lahan</h2>
            <h6>
              Sipongi+ menyajikan data kebakaran hutan dan lahan terkini yang
              dapat digunakan semua orang di mana saja untuk melindungi hutan
              dengan lebih baik.
            </h6>
            <b-link to="/peta" class="btn btn-secondary">
              Jelajahi peringatan kebakaran di peta
              <img src="/mini_arrow_right.svg" alt="" />
            </b-link>
          </b-col>
        </b-row>
      </b-container>

      <a v-scroll-to="'#stat'" to="#" class="scroll">
        <img src="/arrow-white.svg" alt="angle-bot-white" />
      </a>
    </div>

    <div class="stat" id="stat">
      <b-container>
        <b-row>
          <b-col md="4">
            <div class="stat-item">
              <img src="/forest-fire.svg" alt="" />
              <h2>{{ totalTitik }}</h2>
              <h5>Peringatan Kebakaran</h5>
              <span>2 (dua)  minggu terakhir</span>
            </div>
          </b-col>
          <b-col md="4">
            <div class="stat-item">
              <img src="/box-fire.svg" alt="" />
              <h2>{{ luasKebakaran }}</h2>
              <h5>Hektar Hutan & Lahan</h5>
              <span>
                Terbakar sepanjang tahun
                {{ $moment().format('YYYY (MMMM)') }}
              </span>
            </div>
          </b-col>
          <b-col md="4">
            <div class="stat-item">
              <img src="/world.svg" alt="" />
              <h2>{{ totalProv }}</h2>
              <h5>Provinsi</h5>
              <span>Penyebaran titik panas 2 minggu terakhir</span>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="info-wrap">
      <b-container>
        <div class="info-item">
          <b-row class="align-items-center">
            <b-col md="6" order-md="2">
              <div
                class="info-image"
                style="background-image: url('/mini-map.svg');"
              ></div>
            </b-col>
            <b-col md="6" order-md="1">
              <div class="info-text">
                <h3>Lihat peringatan kebakaran di peta</h3>
                <h6>
                  Lihat peringatan kebakaran di sekitarmu, data diperbarui
                  setiap hari kamu dan kamu dapat mengaksesnya dimanapun
                </h6>
                <b-link to="/peta" class="btn btn-secondary">
                  Lihat dipeta
                  <img src="/mini_arrow_right.svg" alt="" />
                </b-link>
              </div>
            </b-col>
          </b-row>
          <img src="/aksen.svg" alt="" class="aksen right" />
        </div>
        <div class="info-item">
          <b-row class="align-items-center">
            <b-col md="6">
              <div
                class="info-image"
                style="background-image: url('/fireman.svg');"
              ></div>
            </b-col>
            <b-col md="6">
              <div class="info-text">
                <h3>Dapatkan info kegiatan pemadamam</h3>
                <h6>
                  Dapatkan berbagai info terbaru seputar pemadaman hutan yang
                  telah dilakukan oleh tim Sipongi
                </h6>
                <b-link to="/blog" class="btn btn-secondary">
                  Dapatkan info terbaru
                  <img src="/mini_arrow_right.svg" alt="" />
                </b-link>
              </div>
            </b-col>
          </b-row>
          <img src="/aksen.svg" alt="" class="aksen left" />
        </div>
        <div class="info-item">
          <b-row class="align-items-center">
            <b-col md="6" order-md="2">
              <div
                class="info-image"
                style="background-image: url('/aware.svg');"
              ></div>
            </b-col>
            <b-col md="6" order-md="1">
              <div class="info-text">
                <h3>Lihat peringatan kebakaran secara kumulatif</h3>
                <h6>Bandingkan dengan data kumulatif tahun tahun sebelumnya</h6>
                <b-link to="/grafik" class="btn btn-secondary">
                  Cari tahu lebih
                  <img src="/mini_arrow_right.svg" alt="" />
                </b-link>
              </div>
            </b-col>
          </b-row>
          <img src="/aksen.svg" alt="" class="aksen right" />
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
  data: () => ({
    totalTitik: 0,
    totalProv: 0,
    luasKebakaran: 0,
  }),

  async fetch() {
    await this.loadTotalTitik()
    await this.loadLuasKebakaran()
    await this.loadTotalProv()
  },
  created() {
    this.$nextTick(function () {
      this.updateHeader()
    })
  },
  methods: {
    updateHeader() {
      this.$store.commit('head/innerHeader', false)
    },
    async loadTotalTitik() {
      const url = !process.server
        ? `/v1/totalIndoHotspot`
        : `/api/totalIndoHotspot`

      await this.$axios
        .$get(url, {
          params: {
            day: 14,
            confidence: ['high'],
          },
        })
        .then((res) => {
          this.totalTitik = res
        })
        .catch((err) => {})
    },
    async loadTotalProv() {
      const url = !process.server
        ? `/v1/totalIndoHotspotProv`
        : `/api/totalIndoHotspotProv`

      await this.$axios
        .$get(url, {
          params: {
            day: 14,
            confidence: ['high'],
          },
        })
        .then((res) => {
          this.totalProv = res
        })
        .catch((err) => {})
    },
    async loadLuasKebakaran() {
      const url = !process.server
        ? `/v1/totalLuasKebakaran`
        : `/api/totalLuasKebakaran`

      await this.$axios
        .$get(url, {
          params: {
            year: this.$moment().format('YYYY'),
            short: 1,
          },
        })
        .then((res) => {
          this.luasKebakaran = res
        })
        .catch((err) => {})
    },
  },
}
</script>
