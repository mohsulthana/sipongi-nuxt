<template>
  <div class="inner-page">
    <div class="page-desc">
      <b-container>
        <b-row>
          <b-col md="7">
            <h3>Data & Grafik</h3>
            <h6>
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
            <h6 class="charts-title">Data Peringatan kebakaran mingguan</h6>
            <line-chart
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
                v-model="compareYear"
                :options="[
                  'Tahun 2019',
                  'Tahun 2018',
                  'Tahun 2017',
                  'Tahun 2016',
                ]"
                :value="null"
              ></b-form-select>
            </div>
            <line-chart
              :data="kebKumulatif"
              :options="kebKumulatifOpt"
              class="charts"
            />

            <h6 class="charts-title">Luas kebakaran hutan dan lahan</h6>
            <b-row class="align-items-center">
              <b-col md="6">
                <pie-chart
                  :data="kebLuas"
                  :options="kebLuasOpt"
                  class="charts"
                />
              </b-col>
              <b-col md="6">
                <div class="legend-pie">
                  <span class="color blue"></span>
                  <h6>2017</h6>
                  <p>165.483,92 Ha</p>
                </div>
                <div class="legend-pie">
                  <span class="color green"></span>
                  <h6>2018</h6>
                  <p>165.483,92 Ha</p>
                </div>
                <div class="legend-pie">
                  <span class="color yellow"></span>
                  <h6>2019</h6>
                  <p>165.483,92 Ha</p>
                </div>
                <div class="legend-pie">
                  <span class="color orange"></span>
                  <h6>2020</h6>
                  <p>165.483,92 Ha</p>
                </div>
              </b-col>
            </b-row>
          </b-col>
          <b-col md="4">
            <div class="statistik-wrap">
              <h5>Statistik</h5>
              <div class="statistik-item">
                <img src="/forest-fire.svg" alt="" />
                <h3>135</h3>
                <h6>Peringatan Kebakaran</h6>
                <p>Dalam 2 minggu terakhir</p>
              </div>
              <div class="statistik-item">
                <img src="/box-fire.svg" alt="" />
                <h3>43.834</h3>
                <h6>Hektar Hutan & Lahan</h6>
                <p>Terbakar sepanjang tahun 2020 (juli)</p>
              </div>
              <div class="statistik-item">
                <img src="/world.svg" alt="" />
                <h3>12</h3>
                <h6>Provinsi</h6>
                <p>Penyebaran titik panas 2 minggu terakhir</p>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import LineChart from '~/components/LineChart'

export default {
  layout: 'front',
  data() {
    return {
      compareYear: null,
      kebMingguan: {
        labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
        datasets: [
          {
            label: 'Minggu Ini',
            backgroundColor: '#FE6500',
            borderColor: '#FE6500',
            fill: false,
            lineTension: 0,
            data: [3, 8, 4, 5, 2, 12, 7],
          },
          {
            label: 'Minggu Sebelumnya',
            backgroundColor: '#C5CDD5',
            borderColor: '#C5CDD5',
            fill: false,
            lineTension: 0,
            data: [1, 3, 2, 4, 1, 7, 3],
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
      kebKumulatif: {
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
            data: [70, 140, 250, 160, 60, 40, 20],
          },
          {
            label: '2019',
            backgroundColor: '#C5CDD5',
            borderColor: '#C5CDD5',
            fill: false,
            lineTension: 0,
            data: [20, 270, 300, 160, 170, 80, 310],
          },
        ],
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
        labels: ['2017', '2018', '2019', '2020'],
        datasets: [
          {
            data: [165483.92, 529266.64, 1649258.0, 43834.0],
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
}
</script>
