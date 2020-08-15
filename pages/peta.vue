<template>
  <div>
    <div class="sidebar-map">
      <div class="logo">
        <img src="/logo.svg" alt="" />
        <img src="/logo-text.svg" alt="" />
      </div>
      <b-link class="main its-new link-one" @click="openSidebarOne">
        <div class="image">
          <img src="/fire.svg" alt="" />
          <span class="notif">{{ totalHotspot }}</span>
        </div>
        <h6>Peringatan Kebakaran</h6>
      </b-link>
      <b-link class="main link-two" @click="openSidebarTwo">
        <div class="image">
          <img src="/cowboy-hat.svg" alt="" />
        </div>
        <h6>Kegiatan Pemadamam</h6>
      </b-link>
      <b-link class="main link-three" @click="openSidebarThree">
        <div class="image">
          <img src="/cari.svg" alt="" />
        </div>
        <h6>Cari</h6>
      </b-link>
      <b-link to="/" class="hide">
        <img src="/mini_arrow_left-gray.svg" alt="" />
      </b-link>

      <div class="sidebar-slide sidebar-one">
        <div class="content-head">
          <b-link class="close" @click="openSidebarOne"
            ><i class="fas fa-times"></i
          ></b-link>
          <h6>Peringatan Kebakaran</h6>
          <b-link
            :class="`status ${checkSumber('LPN-MODIS') ? 'active' : ''}`"
            @click="changeSumber('LPN-MODIS')"
            >Terra/Aqua</b-link
          >
          <b-link
            :class="`status ${checkSumber('LPN-NPP') ? 'active' : ''}`"
            @click="changeSumber('LPN-NPP')"
            >NPP</b-link
          >
          <b-link
            :class="`status ${checkSumber('NOAA18') ? 'active' : ''}`"
            @click="changeSumber('NOAA18')"
            >NOAA</b-link
          >
        </div>

        <div class="content-list">
          <template v-for="(sumber, index) in DataHotSpot">
            <template v-for="(kotakab, index2) in sumber">
              <b-link
                class="list-item"
                v-if="checkSumber(index)"
                @click="changeCenter(kotakab[0])"
              >
                <h6>
                  {{ kotakab[0].kabkota }} - {{ kotakab[0].nama_provinsi }}
                </h6>
                <p>Terra/Aqua</p>
                <span class="count">{{ kotakab.length }}</span>
              </b-link>
            </template>
          </template>
        </div>
      </div>

      <div class="sidebar-slide sidebar-two big">
        <div class="content-head">
          <b-link class="close" @click="openSidebarThree"
            ><i class="fas fa-times"></i
          ></b-link>
          <h6>Kegiatan Pemadaman</h6>
          <p>Pencarian lokasi peringatan kebakaran</p>
        </div>

        <div class="content-list">
          <b-row>
            <b-col md="6" v-for="blog in blogs" :key="blog.id">
              <b-link to="" class="blog-item">
                <div
                  class="image"
                  :style="{ backgroundImage: `url(${blog.image})` }"
                ></div>
                <h5>{{ blog.title }}</h5>
                <span>{{ blog.date }}</span>
              </b-link>
            </b-col>
          </b-row>
        </div>
      </div>

      <div class="sidebar-slide sidebar-three">
        <div class="content-head">
          <b-link class="close" @click="openSidebarTwo"
            ><i class="fas fa-times"></i
          ></b-link>
          <h6>Cari</h6>
          <p>Pencarian lokasi peringatan kebakaran</p>
        </div>

        <div class="content-list">
          <input
            type="search"
            class="form-control search"
            name=""
            id=""
            placeholder="Cari Lokasi..."
          />
          <p class="not-found">
            Masukkan pencarian dan tekan enter untuk menemukan dataset atau
            lokasi …
          </p>
        </div>
      </div>
    </div>
    <div class="map-wrap" style="height: 100vh;">
      <div class="legend-wrap">
        <b-link class="legend-head" @click="toggleOpen">
          <img src="/windows.svg" alt="" class="hides" />
          <h6>Legenda</h6>
          <img src="/arrow-serong.svg" alt="" class="shown" />
        </b-link>
        <div class="legend-body">
          <div class="legend-item-contain">
            <div class="legend-item">
              <img src="/marker-blue.svg" alt="" />
              <h6>Aman</h6>
              <p>
                Proin ex ipsum, facilisis id tincidunt sed, vulputate in lacus.
              </p>
            </div>
            <div class="legend-item">
              <img src="/marker-green.svg" alt="" />
              <h6>Waspada</h6>
              <p>
                Proin ex ipsum, facilisis id tincidunt sed, vulputate in lacus.
              </p>
            </div>
            <div class="legend-item">
              <img src="/marker-yellow.svg" alt="" />
              <h6>Siaga</h6>
              <p>
                Proin ex ipsum, facilisis id tincidunt sed, vulputate in lacus.
              </p>
            </div>
            <div class="legend-item">
              <img src="/marker-red.svg" alt="" />
              <h6>Bahaya</h6>
              <p>
                Proin ex ipsum, facilisis id tincidunt sed, vulputate in lacus.
              </p>
            </div>
          </div>
          <div class="filter-wrap">
            <div class="select-wrap">
              <label class="mr-sm-2">Dengan periode data</label>
              <b-form-select
                class="mb-2 mr-sm-2 mb-sm-0 big"
                v-model="periodeData"
                :options="[
                  { value: 12, text: '12 Jam Terakhir' },
                  { value: 24, text: '24 Jam Terakhir' },
                  { value: 42, text: '42 Jam Terakhir' },
                ]"
              ></b-form-select>
            </div>
            <div class="select-wrap">
              <label class="mr-sm-2">Dengan tingkat kepercayaan</label>
              <b-form-select
                class="mb-2 mr-sm-2 mb-sm-0"
                v-model="trustData"
                :options="[
                  { value: 80, text: '>= 80%' },
                  { value: 70, text: '>= 70%' },
                  { value: 60, text: '>= 60%' },
                  { value: 50, text: '>= 50%' },
                ]"
              ></b-form-select>
            </div>
            <div class="select-wrap">
              <label class="mr-sm-2">Pergerakan Angin</label>
              <b-form-select
                class="mb-2 mr-sm-2 mb-sm-0 big"
                v-model="windDir"
                :options="[
                  { value: true, text: 'Tampilkan' },
                  { value: false, text: 'Tidak Tampilkan' },
                ]"
              ></b-form-select>
            </div>
          </div>
        </div>
      </div>
      <client-only>
        <l-map
          ref="mapSipongi"
          :minZoom="5"
          :maxZoom="17"
          :zoom="zoom"
          :center="centerMap"
        >
          <l-tile-layer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          ></l-tile-layer>
          <l-layer-group>
            <l-geo-json :geojson="geojson"></l-geo-json>
          </l-layer-group>
          <l-layer-group>
            <leaflet-velocity
              v-if="!$fetchState.pending"
              :options="OptWind"
              :visible="windDir"
            ></leaflet-velocity>
          </l-layer-group>
          <l-layer-group>
            <v-marker-cluster>
              <template v-for="(sumber, index) in DataHotSpot">
                <template v-for="(kotakab, index2) in sumber">
                  <template v-for="(marker, index3) in kotakab">
                    <l-marker
                      :lat-lng="[marker.lat, marker.long]"
                      :icon="getIcon(marker)"
                      :visible="checkSumber(index)"
                    >
                      <l-popup>
                        <b-table-simple small striped responsive>
                          <b-tbody>
                            <b-tr>
                              <b-th>Sumber</b-th>
                              <b-td>{{ marker.ori_sumber }}</b-td>
                            </b-tr>
                            <b-tr>
                              <b-th>Latitude</b-th>
                              <b-td>{{ marker.lat }}</b-td>
                            </b-tr>
                            <b-tr>
                              <b-th>Longitude</b-th>
                              <b-td>{{ marker.long }}</b-td>
                            </b-tr>
                            <b-tr>
                              <b-th>Tanggal</b-th>
                              <b-td>{{ marker.date_hotspot }}</b-td>
                            </b-tr>
                            <b-tr>
                              <b-th>Kepercayaan</b-th>
                              <b-td>{{ marker.confidence }}%</b-td>
                            </b-tr>
                            <b-tr>
                              <b-th>Kawasan</b-th>
                              <b-td>{{
                                marker.kawasan !== '' ? marker.kawasan : '-'
                              }}</b-td>
                            </b-tr>
                            <b-tr>
                              <b-th>Desa</b-th>
                              <b-td>{{
                                marker.desa !== '' ? marker.desa : '-'
                              }}</b-td>
                            </b-tr>
                            <b-tr>
                              <b-th>Kecamatan</b-th>
                              <b-td>{{
                                marker.kecamatan !== '' ? marker.kecamatan : '-'
                              }}</b-td>
                            </b-tr>
                            <b-tr>
                              <b-th>Kota/Kabupaten</b-th>
                              <b-td>{{
                                marker.kabkota !== '' ? marker.kabkota : '-'
                              }}</b-td>
                            </b-tr>
                            <b-tr>
                              <b-th>Provinsi</b-th>
                              <b-td>{{
                                marker.nama_provinsi !== ''
                                  ? marker.nama_provinsi
                                  : '-'
                              }}</b-td>
                            </b-tr>
                          </b-tbody>
                        </b-table-simple>
                      </l-popup>
                    </l-marker>
                  </template>
                </template>
              </template>
            </v-marker-cluster>
          </l-layer-group>
          <!-- <l-polygon :lat-lngs="polygon.latlngs" :color="polygon.color" /> -->
        </l-map>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {
    await this.loadHotSpot()
    await this.loadWind()
  },
  data() {
    return {
      browser: process.browser,
      centerMap: [-2.548926, 118.0148634],
      periodeData: 24,
      trustData: 80,
      zoom: 5,
      windDir: false,
      DataHotSpot: [],
      totals: [],
      sumber: [],
      chkSumber: ['LPN-MODIS', 'LPN-NPP', 'NOAA18'],
      geojson: null,
      OptWind: {
        displayValues: true,
        displayOptions: {
          velocityType: 'Global Wind',
          displayPosition: 'bottomleft',
          displayEmptyString: 'No wind data',
        },
        data: [],
        velocityScale: 0.015,
        maxVelocity: 10,
      },
      polygon: {
        latlngs: [
          [-6.890985, 107.586215],
          [-6.893999, 107.582707],
          [-6.893988, 107.588222],
        ],
        color: '#ff00ff',
      },
      blogs: [
        {
          id: 1,
          image:
            'https://images.unsplash.com/photo-1572204097183-e1ab140342ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          title: 'Pemadaman di wilker Daops Singkawang, Kalbar',
          date: '23 Sep 2020',
        },
        {
          id: 2,
          image:
            'https://images.unsplash.com/photo-1523861751938-121b5323b48b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1043&q=80',
          title: 'Pemadaman di wilker Daops Singkawang, Kalbar',
          date: '23 Sep 2020',
        },
        {
          id: 3,
          image:
            'https://images.unsplash.com/photo-1455747634646-0ef67dfca23f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
          title: 'Pemadaman di wilker Daops Singkawang, Kalbar',
          date: '23 Sep 2020',
        },
        {
          id: 4,
          image:
            'https://images.unsplash.com/photo-1483917841983-f83104f9ffa5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1061&q=80',
          title: 'Pemadaman di wilker Daops Singkawang, Kalbar',
          date: '23 Sep 2020',
        },
        {
          id: 5,
          image:
            'https://images.unsplash.com/photo-1511149547418-801db51a015f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          title: 'Pemadaman di wilker Daops Singkawang, Kalbar',
          date: '23 Sep 2020',
        },
        {
          id: 6,
          image:
            'https://images.unsplash.com/photo-1481121871234-1f3fb96a5f45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          title: 'Pemadaman di wilker Daops Singkawang, Kalbar',
          date: '23 Sep 2020',
        },
      ],
    }
  },
  watch: {
    periodeData: {
      async handler() {
        await this.loadHotSpot()
      },
    },
    trustData: {
      async handler() {
        await this.loadHotSpot()
      },
    },
  },
  computed: {
    redIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/marker-red.svg',
        iconSize: [40, 40],
      })
    },
    blueIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/marker-blue.svg',
        iconSize: [40, 40],
      })
    },
    greenIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/marker-green.svg',
        iconSize: [40, 40],
      })
    },
    yellowIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/marker-yellow.svg',
        iconSize: [40, 40],
      })
    },
    totalHotspot() {
      let datas = this.totals
      let sum = 0

      Object.keys(datas).forEach((key) => {
        let index = this.chkSumber.indexOf(key)
        if (index >= 0) {
          sum += datas[key]
        }
      })

      return sum
    },
  },
  methods: {
    changeSumber(val) {
      let index = this.chkSumber.indexOf(val)
      if (index < 0) {
        this.chkSumber.push(val)
      } else {
        this.chkSumber.splice(index, 1)
      }
    },
    checkSumber(val) {
      return this.chkSumber.indexOf(val) >= 0
    },
    changeCenter(item) {
      console.log(this.totalHotspot)
      this.$refs.mapSipongi.mapObject.setView([item.latcen, item.longcen], 8)
    },
    getIcon(item) {
      if (item.counter <= 1) {
        return this.blueIcon
      } else if (item.counter === 2) {
        return this.greenIcon
      } else if (item.counter === 3) {
        return this.yellowIcon
      } else {
        return this.redIcon
      }
    },
    async loadHotSpot() {
      const url = !process.server ? `/v1/indoHotspot` : `/api/indoHotspot`

      await this.$axios
        .$get(url, {
          params: {
            late: this.periodeData,
            confidence: this.trustData,
          },
        })
        .then(({ data, totals }) => {
          this.DataHotSpot = data
          this.totals = totals
          this.$refs.mapSipongi.mapObject.setView([-2.548926, 118.0148634], 5)
        })
        .catch((err) => {})
    },
    async loadWind() {
      const url = !process.server ? `/v1/gfs` : `/api/gfs`

      await this.$axios
        .$get(url)
        .then((res) => {
          this.OptWind.data = res
        })
        .catch((err) => {})
    },
    toggleOpen() {
      var legend = document.querySelector('.legend-wrap')

      legend.classList.toggle('open')
    },
    openSidebarOne() {
      var sidebar = document.querySelector('.sidebar-one')
      var sidebar2 = document.querySelector('.sidebar-two')
      var sidebar3 = document.querySelector('.sidebar-three')
      var link = document.querySelector('.link-one')
      var link2 = document.querySelector('.link-two')
      var link3 = document.querySelector('.link-three')
      var map = document.querySelector('.map-wrap')

      if (
        map.classList.contains('openSide') &&
        (sidebar2.classList.contains('opened') ||
          sidebar3.classList.contains('opened'))
      ) {
        sidebar2.classList.remove('opened')
        sidebar3.classList.remove('opened')
        link2.classList.remove('active')
        link3.classList.remove('active')
        map.classList.remove('big')
        link.classList.add('active')
        sidebar.classList.add('opened')
      } else {
        sidebar.classList.toggle('opened')
        map.classList.toggle('openSide')
        link.classList.toggle('active')
      }
    },
    openSidebarTwo() {
      var sidebar = document.querySelector('.sidebar-one')
      var sidebar2 = document.querySelector('.sidebar-two')
      var sidebar3 = document.querySelector('.sidebar-three')
      var link = document.querySelector('.link-one')
      var link2 = document.querySelector('.link-two')
      var link3 = document.querySelector('.link-three')
      var map = document.querySelector('.map-wrap')

      if (
        map.classList.contains('openSide') &&
        (sidebar.classList.contains('opened') ||
          sidebar3.classList.contains('opened'))
      ) {
        sidebar.classList.remove('opened')
        sidebar3.classList.remove('opened')
        link.classList.remove('active')
        link3.classList.remove('active')
        map.classList.add('big')
        link2.classList.add('active')
        sidebar2.classList.add('opened')
      } else {
        sidebar2.classList.toggle('opened')
        map.classList.toggle('openSide')
        map.classList.toggle('big')
        link2.classList.toggle('active')
      }
    },
    openSidebarThree() {
      var sidebar = document.querySelector('.sidebar-one')
      var sidebar2 = document.querySelector('.sidebar-two')
      var sidebar3 = document.querySelector('.sidebar-three')
      var link = document.querySelector('.link-one')
      var link2 = document.querySelector('.link-two')
      var link3 = document.querySelector('.link-three')
      var map = document.querySelector('.map-wrap')

      if (
        map.classList.contains('openSide') &&
        (sidebar.classList.contains('opened') ||
          sidebar2.classList.contains('opened'))
      ) {
        sidebar.classList.remove('opened')
        sidebar2.classList.remove('opened')
        link.classList.remove('active')
        link2.classList.remove('active')
        link3.classList.add('active')
        map.classList.remove('big')
        sidebar3.classList.add('opened')
      } else {
        sidebar3.classList.toggle('opened')
        map.classList.toggle('openSide')
        link3.classList.toggle('active')
      }
    },
  },
}
</script>
