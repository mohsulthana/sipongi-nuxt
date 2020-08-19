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
        <h6>Lokasi <br />Titik Panas</h6>
      </b-link>
      <b-link class="main link-two" @click="openSidebarTwo">
        <div class="image">
          <img src="/fire-extinguisher.svg" alt="" />
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
          <h6>Lokasi Titik Panas</h6>
          <b-link
            :class="`status ${checkSumber('LPN-MODIS') ? 'active' : ''}`"
            @click="changeSumber('LPN-MODIS')"
            >Terra/Aqua</b-link
          >
          <b-link
            :class="`status ${checkSumber('LPN-NPP') ? 'active' : ''}`"
            @click="changeSumber('LPN-NPP')"
            >SNPP</b-link
          >
          <b-link
            :class="`status ${checkSumber('LPN-NOAA20') ? 'active' : ''}`"
            @click="changeSumber('LPN-NOAA20')"
            >NOAA20</b-link
          >
          <b-link
            :class="`status ${checkSumber('LPN-LANDSAT8') ? 'active' : ''}`"
            @click="changeSumber('LPN-LANDSAT8')"
            >LANDSAT8</b-link
          >
        </div>

        <div class="content-list">
          <template v-for="(datas, index) in DataHotSpot.kabkota">
            <template v-for="(kotakab, index2) in datas">
              <b-link
                class="list-item"
                v-if="checkSumber(kotakab.data.sumber)"
                @click="changeCenter(kotakab.data)"
              >
                <h6>
                  {{ kotakab.data.kabkota }} - {{ kotakab.data.nama_provinsi }}
                </h6>
                <p>{{ kotakab.data.ori_sumber }}</p>
                <span class="count">{{ kotakab.count }}</span>
              </b-link>
            </template>
          </template>
        </div>
      </div>

      <div class="sidebar-slide sidebar-two big">
        <div class="content-head">
          <b-link class="close" @click="openSidebarTwo"
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
          <b-link class="close" @click="openSidebarThree"
            ><i class="fas fa-times"></i
          ></b-link>
          <h6>Cari</h6>
          <p>Pencarian lokasi peringatan kebakaran</p>
        </div>

        <div class="content-list">
          <!-- <input
            type="search"
            class="form-control search"
            name=""
            id=""
            placeholder="Cari Lokasi..."
          />
          <p class="not-found">
            Masukkan pencarian dan tekan enter untuk menemukan dataset atau
            lokasi …
          </p> -->
          <label for="">Pilih Provinsi</label>
          <b-form-select
            v-model="cariProvinsi"
            class="mb-3 form-control"
            value-field="id"
            text-field="nama_provinsi"
            :options="provs"
          ></b-form-select>
          <label for="">Pilih Kota/Kabupaten</label>
          <b-form-select
            v-model="cariKota"
            class="form-control"
            value-field="id"
            text-field="nama"
            :disabled="
              provs.length <= 0 || !cariProvinsi || kotakabs.length <= 1
            "
            :options="kotakabs"
          ></b-form-select>
        </div>
      </div>
    </div>
    <div class="map-wrap" style="height: 100vh;">
      <div class="legend-wrap">
        <b-link class="legend-head" @click="toggleOpen">
          <h6>Legenda</h6>
          <img src="/arrow-serong.svg" alt="" class="shown" />
        </b-link>
        <div class="legend-body">
          <div class="legend-item-contain">
            <!-- <p>
              Tanda yang muncul sesuai hasil prosedur pengendalian kebakaran
              hutan melalui petugas patroli pencegahan
            </p> -->
            <div class="legend-item">
              <img src="/terra.svg" alt="" />
              <h6>Satelit TERRA/AQUA</h6>
            </div>
            <div class="legend-item">
              <img src="/snpp.svg" alt="" />
              <h6>Satelit SNPP</h6>
            </div>
            <div class="legend-item">
              <img src="/noaa.svg" alt="" />
              <h6>Satelit NOAA20</h6>
            </div>
            <div class="legend-item">
              <img src="/landsat.svg" alt="" />
              <h6>Satelit LANDSAT8</h6>
            </div>
          </div>
          <div class="filter-wrap">
            <div class="select-wrap">
              <label class="mr-sm-2">Dengan periode data</label>
              <b-form-select
                v-model="periodeData"
                :options="[
                  { value: 12, text: '12 Jam Terakhir' },
                  { value: 24, text: '24 Jam Terakhir' },
                  { value: 42, text: '42 Jam Terakhir' },
                ]"
              ></b-form-select>
            </div>
            <div class="select-wrap">
              <label class="mr-sm-2">Dengan tingkat kepercayaan data</label>
              <!-- <b-form-input
                id="range-2"
                v-model="trustData"
                type="range"
                min="0"
                max="2"
              ></b-form-input>
              <span class="ket">Rendah</span>
              <span class="ket text-center">Sedang</span>
              <span class="ket text-right">Tinggi</span> -->
              <b-form-checkbox
                id="checkbox-rendah"
                v-model="trustData"
                name="checkbox-rendah"
                value="low"
              >
                <span class="color low"></span>
                Rendah
              </b-form-checkbox>
              <b-form-checkbox
                id="checkbox-sedang"
                v-model="trustData"
                name="checkbox-sedang"
                value="medium"
              >
                <span class="color med"></span>
                Sedang
              </b-form-checkbox>
              <b-form-checkbox
                id="checkbox-tinggi"
                v-model="trustData"
                name="checkbox-tinggi"
                value="high"
              >
                <span class="color high"></span>
                Tinggi
              </b-form-checkbox>
            </div>
            <div class="select-wrap">
              <label class="float-left">Pergerakan Angin</label>
              <b-form-checkbox
                v-model="windDir"
                name="check-button"
                switch
                class="float-right"
              >
              </b-form-checkbox>
              <div class="ket-wind" v-if="windDir">
                <div class="bar"></div>
                <span class="speed">0 m/s</span>
                <span class="speed text-right">40 m/s</span>
              </div>
            </div>
            <div class="select-wrap">
              <label class="float-left">Lokasi Unit Kerja</label>
              <b-form-checkbox
                v-model="unitKerja"
                name="check-button"
                switch
                class="float-right"
              >
              </b-form-checkbox>
            </div>
            <div class="select-wrap mb-0">
              <label class="float-left">Batas Administratif</label>
              <b-form-checkbox
                v-model="btsAdmf"
                name="check-button"
                switch
                class="float-right"
              >
              </b-form-checkbox>
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
          :options="optionMaps"
          @update:zoom="zoomUpdated"
        >
          <l-tile-layer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          ></l-tile-layer>
          <l-image-overlay
            url="/gelap.png"
            :bounds="[
              [-26.5, -25],
              [1021.5, 1023],
            ]"
            :bubblingMouseEvents="false"
            :opacity="0.4"
            :visible="windDir"
          />
          <l-layer-group>
            <l-geo-json
              :geojson="clusterKabKota.data"
              :visible="clusterKabKota.visible"
              :options="optionsKabKota"
              :options-style="styleFunction"
            ></l-geo-json>
          </l-layer-group>
          <l-layer-group>
            <l-geo-json
              :geojson="clusterDesa.data"
              :visible="clusterDesa.visible"
              :options="optionsDesa"
              :options-style="styleFunction"
            ></l-geo-json>
          </l-layer-group>
          <l-layer-group>
            <leaflet-velocity
              v-if="OptWind.data.length > 0"
              :options="OptWind"
              :visible="windDir"
            ></leaflet-velocity>
          </l-layer-group>
          <l-layer-group>
            <l-geo-json
              :geojson="dataDaops.data"
              :visible="dataDaops.visible"
              :options="optionsDaops"
            ></l-geo-json>
          </l-layer-group>
          <l-layer-group>
            <v-marker-cluster
              ref="markerClusterTerraHigh"
              :options="optionsMarkerClaster('terra-high')"
            ></v-marker-cluster>
            <v-marker-cluster
              ref="markerClusterTerraMed"
              :options="optionsMarkerClaster('terra-med')"
            ></v-marker-cluster>
            <v-marker-cluster
              ref="markerClusterTerraLow"
              :options="optionsMarkerClaster('terra-low')"
            ></v-marker-cluster>
          </l-layer-group>
          <l-layer-group>
            <v-marker-cluster
              ref="markerClusterSnppHigh"
              :options="optionsMarkerClaster('snpp-high')"
            ></v-marker-cluster>
            <v-marker-cluster
              ref="markerClusterSnppMed"
              :options="optionsMarkerClaster('snpp-med')"
            ></v-marker-cluster>
            <v-marker-cluster
              ref="markerClusterSnppLow"
              :options="optionsMarkerClaster('snpp-low')"
            ></v-marker-cluster>
          </l-layer-group>
          <l-layer-group>
            <v-marker-cluster
              ref="markerClusterNoaaHigh"
              :options="optionsMarkerClaster('noaa-high')"
            ></v-marker-cluster>
            <v-marker-cluster
              ref="markerClusterNoaaMed"
              :options="optionsMarkerClaster('noaa-med')"
            ></v-marker-cluster>
            <v-marker-cluster
              ref="markerClusterNoaaLow"
              :options="optionsMarkerClaster('noaa-low')"
            ></v-marker-cluster>
          </l-layer-group>
          <l-layer-group>
            <v-marker-cluster
              ref="markerClusterLansatHigh"
              :options="optionsMarkerClaster('landsat-high')"
            ></v-marker-cluster>
            <v-marker-cluster
              ref="markerClusterLansatMed"
              :options="optionsMarkerClaster('landsat-med')"
            ></v-marker-cluster>
            <v-marker-cluster
              ref="markerClusterLansatLow"
              :options="optionsMarkerClaster('landsat-low')"
            ></v-marker-cluster>
          </l-layer-group>
        </l-map>
      </client-only>
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
  name: 'Peta',
  data() {
    return {
      browser: process.browser,
      centerMap: [-2.548926, 118.0148634],
      periodeData: 24,
      trustData: ['high'],
      zoom: 5,
      windDir: false,
      unitKerja: false,
      btsAdmf: false,
      DataHotSpot: {},
      chkSumber: ['LPN-MODIS', 'LPN-NPP', 'LPN-NOAA20', 'LPN-LANDSAT8'],
      clusterKabKota: {
        data: null,
        visible: false,
        oldId: null,
      },
      clusterDesa: {
        data: null,
        visible: false,
        oldId: null,
      },
      dataDaops: {
        data: null,
        visible: false,
        loadData: false,
      },
      geoJsonLayerMarker: {},
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
      optionMaps: {
        doubleClickZoom: false,
      },
      loading: false,
      cariKota: null,
      cariProvinsi: null,
      provs: [],
      kotakabs: [
        {
          id: null,
          nama: 'Pilih Kota/Kabupaten',
        },
      ],
      firstLoad: true,
      classCluster: {
        'terra-high': 'satellite-terra-high',
        'terra-med': 'satellite-terra-medium',
        'terra-low': 'satellite-terra-low',
        'noaa-high': 'satellite-noaa-high',
        'noaa-med': 'satellite-noaa-medium',
        'noaa-low': 'satellite-noaa-low',
        'snpp-high': 'satellite-snpp-high',
        'snpp-med': 'satellite-snpp-medium',
        'snpp-low': 'satellite-snpp-low',
        'landsat-high': 'satellite-landsat-high',
        'landsat-med': 'satellite-landsat-medium',
        'landsat-low': 'satellite-landsat-low',
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
    chkSumber: {
      async handler() {
        await this.loadMarker()
      },
    },
    cariProvinsi: {
      async handler() {
        this.kotakabs = [
          {
            id: null,
            nama: 'Pilih Kota/Kabupaten',
          },
        ]
        this.cariKota = null
        if (this.cariProvinsi) {
          await this.cmbKotaKab()
        }
      },
    },
    cariKota: {
      async handler() {
        if (this.cariKota) {
          await this.loadClusterKabKota(this.cariKota)
        }
      },
    },
    unitKerja: {
      async handler() {
        if (!this.dataDaops.loadData && this.unitKerja) {
          await this.loadDaops()
        }
        this.dataDaops.visible = this.unitKerja
      },
    },
    btsAdmf: {
      async handler() {
        if (this.zoom < 10 || !this.btsAdmf) {
          this.clusterKabKota.visible = false
          this.clusterDesa.visible = false
        } else if (this.zoom >= 10 && this.zoom <= 12) {
          this.clusterKabKota.visible = true
          this.clusterDesa.visible = false
        } else if (this.zoom >= 13) {
          this.clusterKabKota.visible = false
          this.clusterDesa.visible = true
        }
      },
    },
    zoom: {
      async handler() {
        if (this.zoom < 10 || !this.btsAdmf) {
          this.clusterKabKota.visible = false
          this.clusterDesa.visible = false
        } else if (this.zoom >= 10 && this.zoom <= 12) {
          this.clusterKabKota.visible = true
          this.clusterDesa.visible = false
        } else if (this.zoom >= 13) {
          this.clusterKabKota.visible = false
          this.clusterDesa.visible = true
        }
      },
    },
  },
  computed: {
    noaaGreenIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/noaa_low.svg',
        iconSize: [40, 40],
      })
    },
    noaaYellowIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/noaa_medium.svg',
        iconSize: [40, 40],
      })
    },
    noaaRedIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/noaa_high.svg',
        iconSize: [40, 40],
      })
    },
    landsatGreenIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/landsat_low.svg',
        iconSize: [40, 40],
      })
    },
    landsatYellowIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/landsat_medium.svg',
        iconSize: [40, 40],
      })
    },
    landsatRedIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/landsat_high.svg',
        iconSize: [40, 40],
      })
    },
    terraGreenIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/terra_low.svg',
        iconSize: [40, 40],
      })
    },
    terraYellowIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/terra_medium.svg',
        iconSize: [40, 40],
      })
    },
    terraRedIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/terra_high.svg',
        iconSize: [40, 40],
      })
    },
    snppGreenIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/snpp_low.svg',
        iconSize: [40, 40],
      })
    },
    snppYellowIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/snpp_medium.svg',
        iconSize: [40, 40],
      })
    },
    snppRedIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/snpp_high.svg',
        iconSize: [40, 40],
      })
    },
    unitIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/marker-unit.svg',
        iconSize: [40, 40],
      })
    },
    totalHotspot() {
      let datas = this.DataHotSpot.totals
      let sum = 0

      if (datas) {
        Object.keys(datas).forEach((key) => {
          let index = this.chkSumber.indexOf(key)
          if (index >= 0) {
            sum += datas[key]
          }
        })
      }

      return sum
    },
    optionsDaops() {
      let self = this
      return {
        onEachFeature: this.onEachFeatureDaops,
        pointToLayer: function (feature, latlng) {
          let marker = self.$L.marker(latlng, {
            icon: self.unitIcon,
          })

          marker.on('dblclick', function (e) {
            self.$refs.mapSipongi.mapObject.setView(e.latlng, 13)
          })

          return marker
        },
      }
    },
    onEachFeatureDaops() {
      return (feature, layer) => {
        let popupHtml = `<div class='table-responsive'><table class='table b-table table-striped table-sm'>`
        popupHtml += `<tbody>`
        popupHtml += `<tr><th>Kode</th><td>${
          feature.properties.kode_daops !== ''
            ? feature.properties.kode_daops
            : '-'
        }</td></tr>`
        popupHtml += `<tr><th>Nama</th><td>${
          feature.properties.nama_daops !== ''
            ? feature.properties.nama_daops
            : '-'
        }</td></tr>`
        popupHtml += `<tr><th>Alamat</th><td>${
          feature.properties.alamat !== '' ? feature.properties.alamat : '-'
        }</td></tr>`
        popupHtml += `<tr><th>Telepon</th><td>${
          feature.properties.telepon !== '' ? feature.properties.telepon : '-'
        }</td></tr>`
        popupHtml += `</tbody>`
        popupHtml += `</table></div>`
        layer.bindPopup(popupHtml)
      }
    },
    optionsDesa() {
      return {
        onEachFeature: this.onEachFeatureDesa,
      }
    },
    onEachFeatureDesa() {
      return (feature, layer) => {
        let popupHtml = `<div class='table-responsive'><table class='table b-table table-striped table-sm'>`
        popupHtml += `<tbody>`
        popupHtml += `<tr><th>Desa</th><td>${
          feature.properties.desa !== '' ? feature.properties.desa : '-'
        }</td></tr>`
        popupHtml += `<tr><th>Kecamatan</th><td>${
          feature.properties.kec !== '' ? feature.properties.kec : '-'
        }</td></tr>`
        popupHtml += `<tr><th>Kota/Kabupaten</th><td>${
          feature.properties.kabkota !== '' ? feature.properties.kabkota : '-'
        }</td></tr>`
        popupHtml += `<tr><th>Provinsi</th><td>${
          feature.properties.provinsi !== '' ? feature.properties.provinsi : '-'
        }</td></tr>`
        popupHtml += `</tbody>`
        popupHtml += `</table></div>`
        layer.bindPopup(popupHtml)
      }
    },
    optionsKabKota() {
      return {
        onEachFeature: this.onEachFeatureKabKota,
      }
    },
    onEachFeatureKabKota() {
      return (feature, layer) => {
        let popupHtml = `<div class='table-responsive'><table class='table b-table table-striped table-sm'>`
        popupHtml += `<tbody>`
        popupHtml += `<tr><th>Kota/Kabupaten</th><td>${
          feature.properties.nama !== '' ? feature.properties.nama : '-'
        }</td></tr>`
        popupHtml += `<tr><th>Provinsi</th><td>${
          feature.properties.provinsi !== '' ? feature.properties.provinsi : '-'
        }</td></tr>`
        popupHtml += `</tbody>`
        popupHtml += `</table></div>`
        layer.bindPopup(popupHtml)
      }
    },
    styleFunction() {
      return () => {
        return {
          weight: 2,
          color: '#d36301',
          opacity: 1,
          fillColor: '#d36301',
          fillOpacity: 0.15,
        }
      }
    },
  },
  async created() {
    await this.loadHotSpot()
    if (this.firstLoad) {
      await this.cmbProvs()
    }

    await this.loadWind()
  },
  methods: {
    zoomUpdated(zoom) {
      this.zoom = zoom
    },
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
      if (this.btsAdmf) {
        this.loadClusterKabKota(item.kotakab_id)
      } else {
        this.$refs.mapSipongi.mapObject.setView([item.latcen, item.longcen], 10)
        this.clusterKabKota.visible = false
        this.clusterDesa.visible = false
      }
    },
    changeCenterMarker(e, item) {
      this.$refs.mapSipongi.mapObject.setView(e.latlng, 13)
      if (this.btsAdmf) {
        this.loadClusterDesa(item)
      } else {
        this.clusterKabKota.visible = false
        this.clusterDesa.visible = false
      }
    },
    getIcon(item) {
      if (item.sumber === 'LPN-NPP') {
        if (item.confidence_level === 'low') {
          return this.snppGreenIcon
        } else if (item.confidence_level === 'medium') {
          return this.snppYellowIcon
        } else {
          return this.snppRedIcon
        }
      } else if (item.sumber === 'LPN-MODIS') {
        if (item.confidence_level === 'low') {
          return this.terraGreenIcon
        } else if (item.confidence_level === 'medium') {
          return this.terraYellowIcon
        } else {
          return this.terraRedIcon
        }
      } else if (item.sumber === 'LPN-NOAA20') {
        if (item.confidence_level === 'low') {
          return this.noaaGreenIcon
        } else if (item.confidence_level === 'medium') {
          return this.noaaYellowIcon
        } else {
          return this.noaaRedIcon
        }
      } else if (item.sumber === 'LPN-LANDSAT8') {
        if (item.confidence_level === 'low') {
          return this.landsatGreenIcon
        } else if (item.confidence_level === 'medium') {
          return this.landsatYellowIcon
        } else {
          return this.landsatRedIcon
        }
      }
    },
    optionsMarkerClaster(tipe) {
      const self = this
      return {
        iconCreateFunction: (cluster) => {
          return this.$L.divIcon({
            html: '<div>' + cluster.getChildCount() + '</div>',
            iconSize: L.point(40, 40),
            className: self.classCluster[tipe],
          })
        },
      }
    },
    async loadHotSpot() {
      const url = !process.server ? `/v1/indoHotspot` : `/api/indoHotspot`
      this.loading = true

      await this.$axios
        .$get(url, {
          params: {
            late: this.periodeData,
            confidence: this.trustData,
          },
        })
        .then(({ data }) => {
          this.DataHotSpot = data
          this.loadMarker()
        })
        .catch((err) => {})
        .finally(() => {
          this.loading = false
        })
    },
    loadGeojsonMarker(geoJsonLayer, markerCluster, tipe, sumber) {
      if (geoJsonLayer) {
        markerCluster.mapObject.removeLayer(geoJsonLayer)
      }

      geoJsonLayer = null
      if (this.checkSumber(sumber)) {
        let self = this
        geoJsonLayer = this.$L.geoJson(this.DataHotSpot, {
          onEachFeature: function (feature, layer) {
            let popupHtml = `<div class='table-responsive'><table class='table b-table table-striped table-sm'>`
            popupHtml += `<tbody>`
            popupHtml += `<tr><th>Tanggal</th><td>${feature.properties.date_hotspot}</td></tr>`
            popupHtml += `<tr><th>Sumber</th><td>${feature.properties.ori_sumber}</td></tr>`
            popupHtml += `<tr><th>Latitude</th><td>${feature.properties.lat}</td></tr>`
            popupHtml += `<tr><th>Longitude</th><td>${feature.properties.long}</td></tr>`
            popupHtml += `<tr><th>Lama Titik Panas</th><td>${feature.properties.counter} hari</td></tr>`
            popupHtml += `<tr><th>Kepercayaan</th><td>${
              feature.properties.confidence_level === 'low'
                ? 'Rendah'
                : feature.properties.confidence_level === 'medium'
                ? 'Sedang'
                : feature.properties.confidence_level === 'high'
                ? 'Tinggi'
                : '-'
            }</td></tr>`
            popupHtml += `<tr><th>Kawasan</th><td>${
              feature.properties.kawasan !== ''
                ? feature.properties.kawasan
                : '-'
            }</td></tr>`
            popupHtml += `<tr><th>Desa</th><td>${
              feature.properties.desa !== '' ? feature.properties.desa : '-'
            }</td></tr>`
            popupHtml += `<tr><th>Kecamatan</th><td>${
              feature.properties.kecamatan !== ''
                ? feature.properties.kecamatan
                : '-'
            }</td></tr>`
            popupHtml += `<tr><th>Kota/Kabupaten</th><td>${
              feature.properties.kabkota !== ''
                ? feature.properties.kabkota
                : '-'
            }</td></tr>`
            popupHtml += `<tr><th>Provinsi</th><td>${
              feature.properties.nama_provinsi !== ''
                ? feature.properties.nama_provinsi
                : '-'
            }</td></tr>`
            popupHtml += `</tbody>`
            popupHtml += `</table></div>`
            layer.bindPopup(popupHtml)
          },
          pointToLayer: function (feature, latlng) {
            let marker = self.$L.marker(latlng, {
              icon: self.getIcon(feature.properties),
            })

            marker.on('dblclick', function (e) {
              self.changeCenterMarker(e, feature.properties)
            })

            return marker
          },
          filter: function (feature, layer) {
            if (feature.properties.sumber === sumber) {
              return feature.properties.confidence_level === tipe
            }

            return false
          },
        })

        markerCluster.mapObject.addLayer(geoJsonLayer)
      }

      return geoJsonLayer
    },
    async loadMarker() {
      //terra
      this.geoJsonLayerMarker.terraHigh = this.loadGeojsonMarker(
        this.geoJsonLayerMarker.terraHigh,
        this.$refs.markerClusterTerraHigh,
        'high',
        'LPN-MODIS'
      )
      this.geoJsonLayerMarker.terraMed = this.loadGeojsonMarker(
        this.geoJsonLayerMarker.terraMed,
        this.$refs.markerClusterTerraMed,
        'medium',
        'LPN-MODIS'
      )
      this.geoJsonLayerMarker.terraLow = this.loadGeojsonMarker(
        this.geoJsonLayerMarker.terraLow,
        this.$refs.markerClusterTerraLow,
        'low',
        'LPN-MODIS'
      )

      //snpp
      this.geoJsonLayerMarker.snppHigh = this.loadGeojsonMarker(
        this.geoJsonLayerMarker.snppHigh,
        this.$refs.markerClusterSnppHigh,
        'high',
        'LPN-NPP'
      )
      this.geoJsonLayerMarker.snppMed = this.loadGeojsonMarker(
        this.geoJsonLayerMarker.snppMed,
        this.$refs.markerClusterSnppMed,
        'medium',
        'LPN-NPP'
      )
      this.geoJsonLayerMarker.snppLow = this.loadGeojsonMarker(
        this.geoJsonLayerMarker.snppLow,
        this.$refs.markerClusterSnppLow,
        'low',
        'LPN-NPP'
      )

      //noaa
      this.geoJsonLayerMarker.noaaHigh = this.loadGeojsonMarker(
        this.geoJsonLayerMarker.noaaHigh,
        this.$refs.markerClusterNoaaHigh,
        'high',
        'LPN-NOAA20'
      )
      this.geoJsonLayerMarker.noaaMed = this.loadGeojsonMarker(
        this.geoJsonLayerMarker.noaaMed,
        this.$refs.markerClusterNoaaMed,
        'medium',
        'LPN-NOAA20'
      )
      this.geoJsonLayerMarker.noaaLow = this.loadGeojsonMarker(
        this.geoJsonLayerMarker.noaaLow,
        this.$refs.markerClusterNoaaLow,
        'low',
        'LPN-NOAA20'
      )

      //landsat
      this.geoJsonLayerMarker.landsatHigh = this.loadGeojsonMarker(
        this.geoJsonLayerMarker.landsatHigh,
        this.$refs.markerClusterLansatHigh,
        'high',
        'LPN-LANDSAT8'
      )
      this.geoJsonLayerMarker.landsatMed = this.loadGeojsonMarker(
        this.geoJsonLayerMarker.landsatMed,
        this.$refs.markerClusterLansatMed,
        'medium',
        'LPN-LANDSAT8'
      )
      this.geoJsonLayerMarker.landsatLow = this.loadGeojsonMarker(
        this.geoJsonLayerMarker.landsatLow,
        this.$refs.markerClusterLansatLow,
        'low',
        'LPN-LANDSAT8'
      )

      this.$refs.mapSipongi.mapObject.setView([-2.548926, 118.0148634], 5)
      this.$refs.mapSipongi.mapObject.doubleClickZoom = false
    },
    async loadClusterKabKota(kotakab_id) {
      if (this.clusterKabKota.oldId !== kotakab_id) {
        const url = !process.server
          ? `/v1/getCluster/${kotakab_id}/kotakab`
          : `/api/getCluster/${kotakab_id}/kotakab`
        this.clusterKabKota.visible = false
        this.clusterKabKota.oldId = kotakab_id
        this.loading = true

        await this.$axios
          .$get(url)
          .then((data) => {
            this.$refs.mapSipongi.mapObject.setView(
              [data.center[1], data.center[0]],
              10
            )
            let self = this
            setTimeout(function () {
              self.clusterKabKota.data = data
              self.clusterKabKota.visible = true
            }, 500)
          })
          .catch((err) => {})
          .finally(() => {
            this.loading = false
          })
      }
    },
    async loadClusterDesa(item) {
      if (this.clusterDesa.oldId !== item.desa_id) {
        const url = !process.server
          ? `/v1/getCluster/${item.desa_id}/desa`
          : `/api/getCluster/${item.desa_id}/desa`
        this.clusterDesa.visible = false
        this.clusterDesa.oldId = item.desa_id
        this.loading = true

        await this.$axios
          .$get(url)
          .then((data) => {
            this.clusterDesa.data = data
          })
          .catch((err) => {})
          .finally(() => {
            this.clusterDesa.visible = true
            this.loading = false
          })
      }
    },
    async loadDaops(item) {
      const url = !process.server ? `/v1/daops/all` : `/api/daops/all`
      this.dataDaops.visible = false
      this.loading = true
      await this.$axios
        .$get(url)
        .then(({ data }) => {
          this.dataDaops.data = data
          this.dataDaops.loadData = true
        })
        .catch((err) => {})
        .finally(() => {
          this.dataDaops.visible = true
          this.loading = false
        })
    },
    async loadWind() {
      const url = !process.server ? `/v1/gfs` : `/api/gfs`

      await this.$axios
        .$get(url)
        .then((res) => {
          this.OptWind.data = res
        })
        .catch((err) => {})
        .finally(() => {})
    },
    async cmbProvs() {
      const url = !process.server
        ? `/v1/getProvinsi/all`
        : `/api/getProvinsi/all`
      this.loading = true

      await this.$axios
        .$get(url)
        .then((data) => {
          this.provs = [
            {
              id: null,
              nama_provinsi: 'Pilih Provinsi',
            },
          ]
          Array.prototype.push.apply(this.provs, data)
        })
        .catch((err) => {})
        .finally(() => {
          this.loading = false
          this.firstLoad = false
        })
    },
    async cmbKotaKab() {
      const url = !process.server
        ? `/v1/getKotaKab/${this.cariProvinsi}`
        : `/api/getKotaKab/${this.cariProvinsi}`

      await this.$axios
        .$get(url)
        .then((data) => {
          const datas = [
            {
              id: null,
              nama: 'Pilih Kota/Kabupaten',
            },
          ]
          Array.prototype.push.apply(datas, data)
          this.kotakabs = datas
        })
        .catch((err) => {})
        .finally(() => {})
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
<style lang="css">
.leaflet-fade-anim .leaflet-tile,
.leaflet-zoom-anim .leaflet-zoom-animated {
  will-change: auto !important;
}
</style>
