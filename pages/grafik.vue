<template>
  <div class="inner-page">
    <div class="page-desc">
      <b-container>
        <b-row>
          <b-col md="8">
            <h3>Data & Grafik</h3>
            <h6 class="text-justify">
              Pada tahun 2001, Indonesia memiliki 93,8 juta hektar hutan primer
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
            <b-tabs content-class="mt-3" fill>
              <b-tab title="Grafik" active>
                <!-- <b-row class="align-items-center">
                  <h6 class="charts-title">Data Hotspot Per Tahun</h6>
                  <div class="compare-select">
                    <label class="mr-sm-2" for="inline-form-custom-select-pref"
                      >Bandingkan satelit</label
                    >
                    <b-form-select
                      class="mb-2 mr-sm-2 mb-sm-0"
                      value-field="id"
                      text-field=""
                      v-model="compareSatelit"
                      :options="satelitOpt"
                    ></b-form-select>
                  </div>
                  <line-chart
                    :data="DataHotSpot"
                    :options="DataHotSpotOpt"
                    class="charts"
                  />
                </b-row> -->
                <b-row class="align-items-center">
                  <h6 class="charts-title">
                    Data Peringatan kebakaran mingguan
                  </h6>
                  <line-chart
                    v-if="!$fetchState.pending"
                    :data="kebMingguan"
                    :options="kebMingguanOpt"
                    class="charts"
                  />
                </b-row>
                <b-row class="align-items-center">
                  <h6 class="charts-title">
                    Data peringatan kebakaran kumulatif
                  </h6>
                  <b-row>
                    <div class="compare-select">
                      <label class="mr-sm-2" for="inline-form-custom-select-pref"
                        >Satelit</label
                      >
                      <b-form-select
                        id="inline-form-custom-select-pref"
                        class="mb-2 mr-sm-2 mb-sm-0"
                        value-field="id"
                        text-field="name"
                        v-model="compareSatelit"
                        :options="satelitOpt"
                      ></b-form-select>
                    </div>
                    <div class="compare-select">
                      <label class="mr-sm-2" for="inline-form-custom-select-pref"
                        >Wilayah</label
                      >
                      <b-form-select
                        id="inline-form-custom-select-pref"
                        class="mb-2 mr-sm-2 mb-sm-0"
                        value-field="id"
                        text-field="name"
                        v-model="compareWilayah"
                        :options="wilayahOpt"
                      ></b-form-select>
                    </div>
                    <div class="compare-select">
                      <label class="mr-sm-2" for="inline-form-custom-select-pref"
                        >Level</label
                      >
                      <b-form-select
                        id="inline-form-custom-select-pref"
                        class="mb-2 mr-sm-2 mb-sm-0"
                        value-field="id"
                        text-field="name"
                        v-model="compareLevel"
                        :options="levelOpt"
                      ></b-form-select>
                    </div>
                  </b-row>
                  <line-chart
                    v-if="!loadingGrafiKum"
                    :data="kebKumulatif"
                    :options="kebKumulatifOpt"
                    class="charts"
                  />
                </b-row>
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
              </b-tab>
              <b-tab title="Tabel">
                <h6 class="charts-title">
                  Tabel Peringatan kebakaran mingguan
                </h6>
                <b-row class="align-items-center">
                  <b-col md="12">
                    <b-table
                      show-empty
                      small
                      striped
                      responsive
                      class="text-center"
                      :items="kebMingguan.items"
                      :fields="kebMingguan.tableFields"
                      :per-page="perPage"
                    >
                      <template #cell(trend)="data">
                        <i
                          class="fas fa-angle-up text-success"
                          v-if="data.item.trend == 'naik'"
                        ></i>
                        <i
                          class="fas fa-angle-down text-danger"
                          v-else-if="data.item.trend == 'turun'"
                        ></i>
                        <div v-else>-</div>
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

                <!-- Tabel Hotspot -->
                <h6 class="charts-title">Tabel Hotspot</h6>
                <b-row class="align-items-center">
                  <b-col lg="12">
                    <b-table
                      show-empty
                      responsive
                      striped
                      class="text-center"
                      :items="DataHotSpot.data"
                      :fields="DataHotSpot.tableFields"
                      :per-page="perPage"
                      :current-page="currentPage"
                    >
                    </b-table>
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
              </b-tab>
            </b-tabs>

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
  data() {
    const currentYear = new Date().getFullYear()
    return {
      currentYear: currentYear,
      satelitOpt: [
        { id: 'TERRA-AQUA', name: 'TERRA-AQUA' },
        { id: 'SNPP', name: 'SNPP' },
        { id: 'NOAA20', name: 'NOAA20' },
        { id: 'Landsat8', name: 'Landsat8' },
      ],
      wilayahOpt: [
        { id: 'Papua', name: 'Papua' },
        { id: 'Jakarta', name: 'Jakarta' },
      ],
            levelOpt: [
        { id: 'High', name: 'High' },
        { id: 'Medium', name: 'Medium' },
        { id: 'Low', name: 'Low' },
      ],
      compareSatelit: 'TERRA-AQUA',
      compareWilayah: 'Papua',
      compareLevel: 'High',
      currentPage: 1,
      totalRows: 1,
      perPage: 10,
      totalTitik: 0,
      totalProv: 0,
      luasKebakaran: 0,
      compareYear: null,
      loadingGrafiKum: false,
      kebLuasData: [],
      kebLuasColor: ['blue', 'green', 'yellow', 'orange'],
      DataHotSpotOpt: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          align: 'start',
          labels: {
            boxWidth: 10,
          },
        },
      },
      DataHotSpot: {
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
            label: '2019',
            backgroundColor: '#C5CDD5',
            borderColor: '#C5CDD5',
            fill: false,
            lineTension: 0,
            data: [],
          },
          {
            label: '2018',
            backgroundColor: '#B5ADB5',
            borderColor: '#B5ADB5',
            fill: false,
            lineTension: 0,
            data: [],
          },
          {
            label: '2017',
            backgroundColor: '#B5ACF2',
            borderColor: '#B5ADB5',
            fill: false,
            lineTension: 0,
            data: [],
          },
        ],
        data: [],
        tableFields: [
          {
            key: 'time',
            label: 'Time',
            sortable: true,
            sortDirection: 'desc',
          },
          {
            key: 'lat',
            label: 'Lat',
            sortable: true,
            sortDirection: 'desc',
          },
          {
            key: 'long',
            label: 'Long',
            sortable: true,
            sortDirection: 'desc',
          },
          {
            key: 'provinsi',
            label: 'Provinsi',
            sortable: true,
            sortDirection: 'desc',
          },
          {
            key: 'kabkota',
            label: 'Kabupaten/Kota',
            sortable: true,
            sortDirection: 'desc',
          },
          {
            key: 'kecamatan',
            label: 'Kecamatan',
            sortable: true,
            sortDirection: 'desc',
          },
          {
            key: 'desa',
            label: 'Desa',
            sortable: true,
            sortDirection: 'desc',
          },
          {
            key: 'sumber',
            label: 'Sumber',
            sortable: true,
            sortDirection: 'desc',
          },
          {
            key: 'confidence_level',
            label: 'Confidence',
            sortable: true,
            sortDirection: 'desc',
          },
        ],
        totals: {
          'LPN-LANDSAT8': 0,
          'LPN-NOAA20': 0,
          'LPN-NPP': 0,
          'LPN-MODIS': 0,
        },
        totalsLevel: {
          'LPN-LANDSAT8': {
            low: 0,
            medium: 0,
            high: 0,
          },
          'LPN-NOAA20': {
            low: 0,
            medium: 0,
            high: 0,
          },
          'LPN-NPP': {
            low: 0,
            medium: 0,
            high: 0,
          },
          'LPN-MODIS': {
            low: 0,
            medium: 0,
            high: 0,
          },
        },
      },
      DataHotSpotFeatures: {
        features: [],
        type: 'FeatureCollection',
      },
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
          {
            key: 'trend',
            label: 'Trend',
            sortable: true,
            sortDirection: 'desc',
          },
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
    }
  },
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
            label: this.currentYear,
            backgroundColor: '#FE6500',
            borderColor: '#FE6500',
            fill: false,
            lineTension: 0,
            data: [],
          },
          {
            label: this.currentYear - 1,
            backgroundColor: '#C5CDD5',
            borderColor: '#C5CDD5',
            fill: false,
            lineTension: 0,
            data: [],
          },
          {
            label: this.currentYear - 2,
            backgroundColor: '#BDB76B',
            borderColor: '#BDB76B',
            fill: false,
            lineTension: 0,
            data: [],
          },
          {
            label: this.currentYear - 3,
            backgroundColor: '#800080',
            borderColor: '#800080',
            fill: false,
            lineTension: 0,
            data: [],
          },
          {
            label: this.currentYear - 4,
            backgroundColor: '#B22222',
            borderColor: '#B22222',
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
    compareWilayah: {
      async handler() {
        await this.loadGrafikKumulatif()
      },
    },
    compareLevel: {
      async handler() {
        await this.loadGrafikKumulatif()
      },
    },
    compareSatelit: {
      async handler() {
        await this.loadGrafikKumulatif()
      },
    },
  },
  async created() {
    await this.loadGrafikKumulatif()
    await this.loadHotSpot()
    this.$nextTick(function () {
      this.updateHeader()
    })

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
      const url = !process.server ? `/v1/grafikMingguan` : `/api/grafikMingguan`

      await this.$axios
        .$get(url)
        .then((res) => {
          this.kebMingguan.items = res.map((data) => {
            this.kebMingguan.datasets[0].data.push(data.weekNow)
            this.kebMingguan.datasets[1].data.push(data.weekBefore)
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
      // const url = !process.server
      //   ? `/v1/grafikKumulatif`
      //   : `/api/grafikKumulatif`

      const url = 'http://139.99.52.109:8288/v1/grafikKumulatif'

      await this.$axios
        .$get(url, {
          params: {
            to: this.currentYear,
            from: this.currentYear - 4,
            confidence: this.compareLevel,
            wilayah: this.compareWilayah,
          },
        })
        .then((res) => {
          for (let i = 0; i < res.length; i++) {
            this.kebKumulatif.datasets[i].data = res[i].value
          }
        })
        .catch((err) => {
          console.error(err)
        })
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
          await Promise.all(
            res.forEach(async (data) => {
              this.kebLuas.labels.push(data.year)
              this.kebLuas.datasets[0].data.push(parseFloat(data.value))
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
    async loadHotSpot() {
      // const url = !process.server ? `/v1/indoHotspot` : `/v1/indoHotspot`
      const url = 'http://139.99.52.109:8288/v1/indoHotspot'

      await this.$axios
        .$get(url, {
          params: {
            confidence: ['high'],
            from: '2020-09-03',
            to: '2020-09-04',
          },
        })
        .then(({ data }) => {
          data.features.forEach((element) => {
            if (element.properties.date_hotspot == 2020) {
              this.DataHotSpot.datasets[0].data.push(element.properties.counter)
            } else if (element.properties.date_hotspot == 2019) {
              this.DataHotSpot.datasets[1].data.push(element.properties.counter)
            } else if (element.properties.date_hotspot == 2018) {
              this.DataHotSpot.datasets[2].data.push(element.properties.counter)
            } else if (element.properties.date_hotspot == 2017) {
              this.DataHotSpot.datasets[3].data.push(element.properties.counter)
            }
          })

          this.DataHotSpot.data = data.features.map((element) => {
            return {
              time: element.properties.date_hotspot,
              lat: element.properties.lat,
              long: element.properties.long,
              provinsi: element.properties.nama_provinsi,
              sumber: element.properties.sumber,
              kabkota: element.properties.kabkota,
              kecamatan: element.properties.kecamatan,
              desa: element.properties.desa,
              confidence_level: element.properties.confidence_level,
            }
          })
          // this.DataHotSpot.data = data
          // this.DataHotSpotFeatures.features = data.features
        })
        .catch((err) => {
          console.error(err)
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
