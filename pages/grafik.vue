<template>
  <div class="inner-page">
    <div class="page-desc">
      <b-container>
        <b-row>
          <b-col md="7">
            <h3>Data & Grafik</h3>
            <h6>
              Pada tahun 2001s, Indonesia memiliki 93,8 juta hektar hutan primer
              , yang mencakup lebih dari 50% wilayah daratannya. Pada tahun
              2019, ia kehilangan 324kha hutan primer , setara dengan 187 juta
              ton CO₂ dari emisi.
            </h6>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="grafik-wrap">
      <b-container>
        <b-row>
          <b-col md="8">
            <h6 class="charts-title">Data Peringatan kebakaran mingguan</h6>
            <line-chart
              v-if="!$fetchState.pending"
              :data="kebMingguan"
              :options="kebMingguanOpt"
              class="charts"
            />

            <h6 class="charts-title">Data peringatan kebakaran kumulatif</h6>
            <div class="compare-select">
              <label class="mr-sm-2" for="inline-form-custom-select-pref"
                >Bandingkan dengan</label
              >
              <b-form-select
                id="inline-form-custom-select-pref"
                class="mb-2 mr-sm-2 mb-sm-0"
                value-field="id"
                text-field="name"
                v-model="compareYear"
                :options="tahuns"
              ></b-form-select>
            </div>
            <line-chart
              v-if="!loadingGrafiKum"
              :data="kebKumulatif"
              :options="kebKumulatifOpt"
              class="charts"
            />

            <h6 class="charts-title">Luas kebakaran hutan dan lahan</h6>
            <b-row class="align-items-center">
              <b-col md="6">
                <pie-chart
                  v-if="!$fetchState.pending"
                  :data="kebLuas"
                  :options="kebLuasOpt"
                  class="charts"
                />
              </b-col>
              <b-col md="6">
                <div
                  v-for="(data, index) in kebLuasData"
                  :key="index"
                  class="legend-pie"
                >
                  <span :class="`color ${kebLuasColor[index]}`"></span>
                  <h6>{{ data.year }}</h6>
                  <p>
                    {{
                      parseFloat(data.value).toLocaleString('id', {
                        maximumFractionDigits: 2,
                      })
                    }}
                    Ha
                  </p>
                </div>
              </b-col>
            </b-row>

            <h6 class="charts-title">Tabel Peringatan kebakaran mingguan</h6>
            <b-row class="align-items-center">
              <b-col md="12">
                <b-table
                  show-empty
                  small
                  striped
                  responsive="sm"
                  class="text-center"
                  :items="kebMingguan.items"
                  :fields="kebMingguan.tableFields"
                  :per-page="perPage"
                >
                  <template #cell(trend)="data">
                    <i class="fas fa-angle-up text-success" v-if="data.item.trend == 'naik'"></i>
                    <i class="fas fa-angle-down text-danger" v-else-if="data.item.trend == 'turun'"></i>
                    <div v-else> - </div>
                  </template>
                </b-table>
                <b-row>
                  <b-col sm="7" md="6" class="mb-3 text-center">
                    <b-pagination
                      v-model="currentPage"
                      :total-rows="totalRows"
                      :per-page="perPage"
                      align="fill"
                      size="sm"
                      class="my-0"
                    ></b-pagination>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>

            <!-- <h6 class="charts-title">Tabel Peringatan kebakaran mingguan</h6>
            <b-row class="align-items-center">
              <b-col md="12">
                <b-table
                  show-empty
                  small
                  class="text-center"
                  stacked="md"
                  :items="kebMingguan.items"
                  :fields="kebMingguan.tableFields"
                  :per-page="10"
                />
                <b-row>
                  <b-col sm="7" md="6" class="mb-3 text-center">
                    <b-pagination
                      v-model="currentPage"
                      :total-rows="totalRows"
                      :per-page="perPage"
                      align="fill"
                      size="sm"
                      class="my-0"
                    ></b-pagination>
                  </b-col>
                </b-row>
              </b-col>
            </b-row> -->
          </b-col>
          <b-col md="4">
            <div class="statistik-wrap">
              <h5>Statistik</h5>
              <div class="statistik-item">
                <img src="/forest-fire.svg" alt="" />
                <h3>{{ totalTitik }}</h3>
                <h6>Peringatan Kebakaran</h6>
                <p>Dalam 2 minggu terakhir</p>
              </div>
              <div class="statistik-item">
                <img src="/box-fire.svg" alt="" />
                <h3>
                  {{
                    luasKebakaran.toLocaleString('id', {
                      maximumFractionDigits: 2,
                    })
                  }}
                </h3>
                <h6>Hektar Hutan & Lahan</h6>
                <p>
                  Terbakar sepanjang tahun
                  {{ $moment().format('YYYY (MMMM)') }}
                </p>
              </div>
              <div class="statistik-item">
                <img src="/world.svg" alt="" />
                <h3>{{ totalProv }}</h3>
                <h6>Provinsi</h6>
                <p>Penyebaran titik panas 2 minggu terakhir</p>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="splash-screen" v-if="$fetchState.pending || loadingGrafiKum">
      <div class="wrap">
        <h4>Mohon Tunggu Sebentar</h4>
        <b-spinner
          style="width: 3rem; height: 3rem"
          label="Large Spinner"
        ></b-spinner>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from '~/components/LineChart'
import { BIconArrowUp, BIconArrowDown } from 'bootstrap-vue'

export default {
  layout: 'front',
  data: () => ({
    currentPage: 1,
    totalRows: 1,
    perPage: 10,
    totalTitik: 0,
    totalProv: 0,
    luasKebakaran: 0,
    compareYear: null,
    tahuns: ['2019', '2018'],
    loadingGrafiKum: false,
    kebLuasData: [],
    kebLuasColor: ['blue', 'green', 'yellow', 'orange'],
    kebMingguan: {
      items: [],
      tableFields: [
        {
          key: 'provinsi',
          label: 'Provinsi',
          sortable: true,
          sortDirection: 'desc',
        },
        {
          key: 'weekNow',
          label: 'Minggu Ini',
          sortable: true,
          sortDirection: 'desc',
        },
        {
          key: 'weekBefore',
          label: 'Minggu Lalu',
          sortable: true,
          sortDirection: 'desc',
        },
        { key: 'trend', label: 'Trend', sortable: true, sortDirection: 'desc' },
      ],
      data: [],
      labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
      datasets: [
        {
          label: 'Minggu Ini',
          backgroundColor: '#FE6500',
          borderColor: '#FE6500',
          fill: false,
          lineTension: 0,
          data: [],
        },
        {
          label: 'Minggu Sebelumnya',
          backgroundColor: '#C5CDD5',
          borderColor: '#C5CDD5',
          fill: false,
          lineTension: 0,
          data: [],
        },
      ],
    },
    kebMingguanOpt: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        align: 'start',
        labels: {
          boxWidth: 10,
        },
      },
    },
    kebKumulatifOpt: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        align: 'start',
        labels: {
          boxWidth: 10,
        },
      },
    },
    kebLuas: {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: ['#0088FE', '#00C49F', '#FFBB28', '#FF7F42'],
          borderdColor: ['#0088FE', '#00C49F', '#FFBB28', '#FF7F42'],
        },
      ],
    },
    kebLuasOpt: {
      responsive: true,
      maintainAspectRatio: false,
      rotation: 1 * Math.PI,
      circumference: 1 * Math.PI,
      cutoutPercentage: 70,
      legend: false,
    },
  }),
  computed: {
    kebKumulatif() {
      return {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'Mei',
          'Jun',
          'Jul',
          'Agu',
          'Sep',
          'Okt',
          'Nov',
          'Des',
        ],
        datasets: [
          {
            label: '2020',
            backgroundColor: '#FE6500',
            borderColor: '#FE6500',
            fill: false,
            lineTension: 0,
            data: [],
          },
          {
            label: this.compareYear,
            backgroundColor: '#C5CDD5',
            borderColor: '#C5CDD5',
            fill: false,
            lineTension: 0,
            data: [],
          },
        ],
      }
    },
  },
  async fetch() {
    await this.loadTotalTitik()
    await this.loadLuasKebakaran()
    await this.loadTotalProv()
    await this.loadGrafikMingguan()
    await this.loadGrafikLuasKebakaran()
  },
  watch: {
    compareYear: {
      async handler() {
        await this.loadGrafikKumulatif()
      },
    },
  },
  created() {
    this.$nextTick(function () {
      this.updateHeader()
    })

    for (let x = parseInt(this.$moment().format('YYYY')) - 1; x >= 2016; x--) {
      this.tahuns.push({
        id: x,
        name: x,
      })
    }
    this.compareYear = parseInt(this.$moment().format('YYYY')) - 1
  },
  methods: {
    updateHeader() {
      this.$store.commit('head/innerHeader', true)
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
            short: 0,
          },
        })
        .then((res) => {
          this.luasKebakaran = res
        })
        .catch((err) => {})
    },
    async loadGrafikMingguan() {
      // const url = !process.server ? `/api/grafikMingguan` : `/api/grafikMingguan`
      const url = 'http://139.99.52.109:8286/api/grafikMingguan'

      await this.$axios
        .$get(url)
        .then((res) => {
          this.kebMingguan.items = res.map((data) => {
            if (data.weekNow > data.weekBefore) {
              return {
                weekNow: data.weekNow,
                weekBefore: data.weekBefore,
                provinsi: data.provinsi,
                trend: 'naik',
              }
            } else if (data.weekNow < data.weekBefore) {
              return {
                weekNow: data.weekNow,
                weekBefore: data.weekBefore,
                provinsi: data.provinsi,
                trend: 'turun',
              }
            } else {
              return {
                weekNow: data.weekNow,
                weekBefore: data.weekBefore,
                provinsi: data.provinsi,
              }
            }
          })
        })
        .catch((err) => {})
    },
    async loadGrafikKumulatif() {
      this.loadingGrafiKum = true
      const url = !process.server
        ? `/v1/grafikKumulatif`
        : `/api/grafikKumulatif`

      await this.$axios
        .$get(url, {
          params: {
            from: this.compareYear,
            satelit: ['LPN-MODIS', 'LPN-NPP', 'LPN-NOAA20', 'LPN-LANDSAT8'],
          },
        })
        .then((res) => {
          this.kebKumulatif.datasets[0].data = res.yearNow
          this.kebKumulatif.datasets[1].data = res.yearBefore
          console.log(this.kebKumulatif)
        })
        .catch((err) => {})
        .finally(() => {
          this.loadingGrafiKum = false
        })
    },
    async loadGrafikLuasKebakaran() {
      this.loadingGrafiKum = true
      const url = !process.server
        ? `/v1/grafikLuasKebakaran`
        : `/api/grafikLuasKebakaran`

      await this.$axios
        .$get(url)
        .then(async (res) => {
          this.kebLuasData = res
          console.log(res)
          await Promise.all(
            res.forEach(async (data) => {
              // console.log(data)
              // this.kebLuas.labels.push(data.year)
              // this.kebLuas.datasets[0].data.push(parseFloat(data.value))
            })
          )
          this.kebKumulatif.datasets[0].data = res.yearNow
          this.kebKumulatif.datasets[1].data = res.yearBefore
        })
        .catch((err) => {})
        .finally(() => {
          this.loadingGrafiKum = false
        })
    },
  },
  head() {
    return {
      title: 'Grafik',
    }
  },
}
</script>
