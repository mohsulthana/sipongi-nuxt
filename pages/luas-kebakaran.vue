<template>
  <div class="inner-page">
    <div class="page-desc">
      <b-container>
        <b-row>
          <b-col md="12">
            <h3>Sipongi+ Luas Kebakaran</h3>
          </b-col>
          <b-col md="7">
            <h6>
              Rekapitulasi Luas Kebakaran Hutan dan Lahan (Ha) Per Provinsi Di Indonesia
            </h6>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="tentang-wrap">
      <b-container>
        <!-- Filter Opsi By Wilayah -->
        <div class="mb-4">
          <div class="row">
              <div class="col-12">
                <table class="table table-hover">
                    <thead>
                        <tr>
                        <!-- <th scope="col">#</th> -->
                        <th scope="col">Provinsi</th>
                        <th scope="col" v-for="(tahun) in tahuns" :key="tahun">{{tahun}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(data,i) in datas" :key="i">
                            <td>{{i}}</td>
                            <td v-for="(total,j) in data" :key="j">{{(total.luas != '' || total.luas != null) ? total.luas  : 0}}</td>
                        </tr>
                    </tbody>
                    <tfoot style="font-weight: bold;">
                        <tr>
                            <td>Total</td>
                            <td v-for="(total,i) in totals" :key="i">{{total.total}}</td>
                        </tr>
                    </tfoot>
                </table>
              </div>
          </div>
        </div>

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
    await this.loadData()
  },
  data() {
    return {
      nomor: 1,
      tahuns: [],
      datas: [],
      totals: [],
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
    async loadData() {
      this.loading = true
      const url = !process.server ? `/v1/data/luas-kebakaran` : `/api/data/luas-kebakaran`

      await this.$axios
        .$get(url)
        .then((res) => {
          this.tahuns = res.tahun
          this.datas = res.data
          this.totals = res.total
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
  },
  head() {
    return {
      title: 'Luas Kebakaran',
    }
  },
}
</script>
