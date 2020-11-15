<template>
  <div class="inner-page">
    <div class="page-desc">
      <b-container>
        <b-row>
          <b-col md="12">
            <h3>Emisi CO2</h3>
            <h6>Emisi CO2 dari Kebakaran Hutan dan Lahan (Ton CO2e)</h6>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="emisi-wrap">
      <b-container>
        <b-row>
          <b-col lg="12">
            <b-row v-if="emisi">
              <b-col lg="4" order-lg="2">
                <div
                  :class="[
                    { toBot: scrolledToBottom },
                    { scrolling: isScroll },
                    'nav-content',
                  ]"
                >
                  <h3>Data dan Grafik</h3>
                  <b-link to="grafik">Grafik</b-link>
                  <b-link to="emisi">Emisi CO2</b-link>
                </div>
              </b-col>
              <b-col lg="8" order-lg="1">
                <h5 class="title"></h5>
                <b-table
                  show-empty
                  small
                  striped
                  responsive="sm"
                  class="text-center"
                  :items="emisi.items"
                  :current-page="currentPage"
                  :fields="emisi.tableFields"
                  :per-page="perPage"
                >
                  <template #cell(luas)="data">
                    {{ data.item.luas ? data.item.luas : 0 }}
                  </template>
                </b-table>
                <b-row>
                  <b-col sm="7" md="6" class="mb-3 text-center">
                    <b-pagination
                      v-model="currentPage"
                      :total-rows="emisi.items.length"
                      :per-page="perPage"
                      align="fill"
                      size="sm"
                      class="my-0"
                    ></b-pagination>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'front',
  data() {
    return {
      currentPage: 1,
      totalRows: 1,
      perPage: 10,
      isScroll: null,
      scrolledToBottom: false,
      emisi: true,
      daerahOp: false,
      sarana: false,
      emisi: {
        items: [],
        tableFields: [
          {
            key: 'provinsi',
            label: 'Provinsi',
            sortable: true,
            sortDirection: 'desc',
          },
          {
            key: 'tahun',
            label: 'Tahun',
            sortable: true,
            sortDirection: 'desc',
          },
          {
            key: 'luas',
            label: 'Luas',
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
    }
  },
  async fetch() {
    await this.loadEmisi()
  },
  methods: {
    async loadEmisi() {
      // const url = process.server ? `/v1/data/emisi-co2` : `/api/data/emisi-co2`
      const url = 'http://139.99.52.109:8286/api/data/emisi-co2'

      await this.$axios.$get(url).then((res) => {
        for (const [key, value] of Object.entries(res.data)) {
          this.emisi.items.push({
            provinsi: key,
            tahun: value[0].tahun,
            luas: value[0].luas,
          })
        }
      })
    },
    updateHeader() {
      this.$store.commit('head/innerHeader', true)
    },

    handleScroll(e) {
      this.isScroll = window.scrollY || window.scrollTop
      let heightDoc = document.documentElement.offsetHeight - 250
      let bottomOfWindow =
        Math.ceil((window.scrollY || window.scrollTop) + window.innerHeight) >=
        heightDoc
      if (bottomOfWindow) {
        this.scrolledToBottom = true
      } else {
        this.scrolledToBottom = false
      }
    },

    showEmisi() {
      this.emisi = true
      this.daerahOp = false
      this.sarana = false
    },
    showDaerahOp() {
      this.emisi = false
      this.daerahOp = true
      this.sarana = false
    },
    showSarana() {
      this.emisi = false
      this.daerahOp = false
      this.sarana = true
    },

    head() {
      return {
        title: 'Emisi CO2',
      }
    },
  },
  created() {
    this.$nextTick(function () {
      this.updateHeader()
    })
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>