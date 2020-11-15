<template>
  <div class="inner-page">
    <div class="page-desc">
      <b-container>
        <b-row>
          <b-col md="12">
            <h3>Luas Karhutla</h3>
            <h6>Luas Karhutla</h6>
          </b-col>
        </b-row>
        <b-row>
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
            <h5 class="title">Tabel Tahun 2015</h5>
            <b-table
              show-empty
              small
              striped
              responsive="sm"
              class="text-center"
              :items="luasKarhutla.items"
              :current-page="currentPage"
              :fields="luasKarhutla.tableFields"
              :per-page="perPage"
            >
              <template #cell(luas)="data">
                {{ data.item.luas ? data.item.luas : 0 }}
              </template>
              <!-- <template v-for="field in luasKarhutla.tableFields" v-slot:[`cell(${field.key})`]="{ item }">
                {{item}}
              </template> -->
            </b-table>
            <b-row>
              <b-col sm="7" md="6" class="mb-3 text-center">
                <b-pagination
                  v-model="currentPage"
                  :total-rows="luasKarhutla.items.length"
                  :per-page="perPage"
                  align="fill"
                  size="sm"
                  class="my-0"
                ></b-pagination>
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
      isScroll: null,
      scrolledToBottom: false,
      currentPage: 1,
      totalRows: 1,
      perPage: 10,
      luasKarhutla: {
        items: [],
        tableFields: [
          {
            key: 'provinsi',
            label: 'Provinsi',
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
      },
    }
  },
  async fetch() {
    await this.loadLuasKarhutla()
  },
  methods: {
    async loadLuasKarhutla() {
      // const url = process.server ? `/v1/data/emisi-co2` : `/api/data/emisi-co2`
      const url = 'http://139.99.52.109:8286/api/data/luas-kebakaran'

      await this.$axios.$get(url).then((res) => {
        for (const [key, value] of Object.entries(res.data)) {
          var tahunLength = value.length
          this.luasKarhutla.items.push({
            provinsi: key,
            luas: value[0].luas
          })
        }
        for (let i = 0; i < tahunLength; i++) {
          this.luasKarhutla.tableFields.push({
            key: tahun[i],
            label: tahun[i],
            sortable: true,
            sortDirection: 'desc',
          })
        }
      })
    },
  },
}
</script>
