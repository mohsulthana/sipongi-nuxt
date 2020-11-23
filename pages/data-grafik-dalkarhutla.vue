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
            <b-row>
              <b-tabs content-class="mt-3" fill>
                <b-tab title="Grafik" active> </b-tab>
                <b-tab title="Tabel">
                  <h6 class="charts-title">Tabel Hotspot</h6>
                  <b-row class="align-items-center">
                    <b-col lg="12">
                      <b-table
                        show-empty
                        striped
                        responsive="lg"
                        class="text-center"
                        :items="DataHotSpot.data"
                        :fields="DataHotSpot.tableFields"
                        :per-page="perPage"
                      >
                      </b-table>
                      <b-row>
                        <b-col sm="7" md="6" class="mb-3 text-center">
                        </b-col>
                      </b-row>
                    </b-col>
                  </b-row>
                </b-tab>
              </b-tabs>
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
  data: () => {
    return {
      DataHotSpot: {
        data: [],
        tableFields: [
          {
            key: 'sumber',
            label: 'Sumber',
            sortable: true,
            sortDirection: 'desc',
          },
          {
            key: 'provinsi',
            label: 'Nama Provinsi',
            sortable: true,
            sortDirection: 'desc',
          },
          {
            key: 'kabkota',
            label: 'Kabupaten Kota',
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
    }
  },
  async created() {
    await this.loadHotSpot()
  },
  methods: {
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
          this.DataHotSpot.data = data.features.map(element => {
            return {
              provinsi: element.properties.nama_provinsi,
              sumber: element.properties.sumber,
              kabkota: element.properties.kabkota
            }
          });
          // this.DataHotSpot.data = data
          // this.DataHotSpotFeatures.features = data.features
        })
        .catch((err) => {
          console.error(err)
        })
    },
  },
}
</script>