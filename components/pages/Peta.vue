<template>
  <div>
    <div class="sidebar-map">
      <b-link to="/" class="logo">
        <img src="/logo.svg" alt="" />
      </b-link>
      <b-link class="logotext" v-b-toggle.sidebar-backdrop>
        <img src="/logo-text.svg" alt="" />
      </b-link>
      <!-- <b-button variant="primary-outline" block @click="hide"> </b-button> -->
      <div>
        <b-sidebar
          id="sidebar-backdrop"
          title=""
          :backdrop-variant="'transparent'"
          backdrop
          shadow
          width="250px"
        >
          <div class="px-3 py-2">
            <nav class="mb-3">
              <b-nav vertical>
                <img src="/logo.svg" alt="" /><img
                  src="/logo-text.svg"
                  alt=""
                />
                <b-nav-item
                  v-b-modal.modal-titikpanas
                  v-b-toggle.sidebar-backdrop
                  class="d-md-block d-none mt-4"
                  style="text-align: left"
                  >Titik Panas</b-nav-item
                >

                <b-nav-item-dropdown
                  id="my-nav-dropdown"
                  text="Karhutla"
                  toggle-class="nav-link-custom"
                  left
                  size="sm"
                >
                  <b-dropdown-item
                    v-b-modal.modal-luaskebakaran
                    v-b-toggle.sidebar-backdrop
                    class="d-md-block d-none"
                    style="text-align: left"
                    >Luas Karhutla</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-b-modal.modal-emisico2
                    v-b-toggle.sidebar-backdrop
                    class="d-md-block d-none"
                    style="text-align: left"
                    >Emisi CO2</b-dropdown-item
                  >
                  <b-dropdown-item
                    href="#"
                    class="d-md-block d-none"
                    style="text-align: left"
                    >Pemadaman</b-dropdown-item
                  >
                </b-nav-item-dropdown>

                <b-nav-item-dropdown
                  id="my-nav-dropdown"
                  text="Dalkarhutla"
                  toggle-class="nav-link-custom"
                  left
                  size="sm"
                >
                  <b-dropdown-item
                    href="http://sipongi.menlhk.go.id/laporan_dalkarhutla_mitra/app2020/"
                    target="_blank"
                    class="d-md-block d-none"
                    style="text-align: left"
                    >Pelaporan Dalkarhutla</b-dropdown-item
                  >
                  <b-dropdown-item
                    to="/grafik"
                    target="_blank"
                    class="d-md-block d-none"
                    style="text-align: left"
                    >Data & Grafik Dalkarhutla</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-b-modal.modal-fdrs
                    v-b-toggle.sidebar-backdrop
                    class="d-md-block d-none"
                    style="text-align: left"
                    >FDRS</b-dropdown-item
                  >
                </b-nav-item-dropdown>

                <b-nav-item-dropdown
                  id="my-nav-dropdown"
                  text="Prediksi Karhutla"
                  toggle-class="nav-link-custom"
                  left
                  size="sm"
                >
                  <b-dropdown-item
                    href="#"
                    class="d-md-block d-none"
                    style="text-align: left"
                    >Peta Rawan
                  </b-dropdown-item>
                  <b-dropdown-item
                    href="#"
                    class="d-md-block d-none"
                    style="text-align: left"
                    >Prediksi Titik Panas</b-dropdown-item
                  >
                  <b-dropdown-item
                    href="#"
                    class="d-md-block d-none"
                    style="text-align: left"
                    >Prediksi Iklim</b-dropdown-item
                  >
                  <b-dropdown-item
                    href="#"
                    class="d-md-block d-none"
                    style="text-align: left"
                    >Prediksi Elnino
                  </b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown
                  id="my-nav-dropdown"
                  text="Publikasi"
                  toggle-class="nav-link-custom"
                  left
                  size="sm"
                >
                  <b-dropdown-item
                    v-b-toggle.sidebar-backdrop
                    v-b-modal.modal-berita
                    class="d-md-block d-none"
                    style="text-align: left"
                    >Berita</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-b-toggle.sidebar-backdrop
                    v-b-modal.modal-galeri
                    class="d-md-block d-none"
                    style="text-align: left"
                    >Galeri</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-b-toggle.sidebar-backdrop
                    v-b-modal.modal-perundangan
                    class="d-md-block d-none"
                    style="text-align: left"
                    >Peraturan Perundangan</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-b-toggle.sidebar-backdrop
                    v-b-modal.modal-laporanposko
                    class="d-md-block d-none"
                    style="text-align: left"
                    >Laporan Harian Posko</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-b-toggle.sidebar-backdrop
                    v-b-modal.modal-dokumenlain
                    class="d-md-block d-none"
                    style="text-align: left"
                    >Dokumen Lainnya</b-dropdown-item
                  >
                </b-nav-item-dropdown>

                <b-nav-item-dropdown
                  id="my-nav-dropdown"
                  text="Tentang Sipongi"
                  toggle-class="nav-link-custom"
                  left
                  size="sm"
                >
                  <b-dropdown-item
                    v-b-toggle.sidebar-backdrop
                    v-b-modal.modal-direktorat
                    class="link-seven"
                    style="text-align: left"
                    >Direktorat PKHL</b-dropdown-item
                  >
                  <b-dropdown-item
                    class="link-eight"
                    v-b-toggle.sidebar-backdrop
                    v-b-modal.modal-manggala-agni
                    style="text-align: left"
                    >Manggala Agni</b-dropdown-item
                  >
                  <b-dropdown-item
                    class="link-nine"
                    v-b-toggle.sidebar-backdrop
                    v-b-modal.modal-struktur-organisasi
                    style="text-align: left"
                    >Struktur Organisasi</b-dropdown-item
                  >
                  <b-dropdown-item
                    class="link-ten"
                    v-b-toggle.sidebar-backdrop
                    v-b-modal.modal-kontak-kami
                    style="text-align: left"
                    >Kontak Kami</b-dropdown-item
                  >
                  <b-dropdown-item
                    v-b-toggle.sidebar-backdrop
                    v-b-modal.modal-disclaimer
                    class="d-md-block d-none"
                    style="text-align: left"
                    >Disclaimer</b-dropdown-item
                  >
                </b-nav-item-dropdown>
              </b-nav>
            </nav>
          </div>
        </b-sidebar>

        <b-link class="main link-two d-md-none" v-b-modal.modal-berita>
          <div class="wrap">
            <div class="image d-md-none d-block">
              <img src="/paper.svg" alt="" />
            </div>
            <h6>Berita</h6>
          </div>
        </b-link>

        <b-link class="main link-three d-md-none" v-b-modal.modal-galeri>
          <div class="wrap">
            <div class="image d-md-none d-block">
              <img src="/fire-extinguisher.svg" alt="" />
            </div>
            <h6>Galeri</h6>
          </div>
        </b-link>

        <b-link class="main link-four d-md-none" @click="openLegend">
          <div class="wrap">
            <div class="image">
              <img src="/cowboy-hat.svg" alt="" />
            </div>
            <h6>Legend</h6>
          </div>
        </b-link>

        <b-link class="main link-one d-md-none" v-b-modal.modal-titikpanas>
          <div class="wrap">
            <div class="image">
              <img src="/fire-extinguisher.svg" alt="" />
            </div>
            <h6>Titik Panas</h6>
          </div>
        </b-link>
      </div>

      <b-link v-b-toggle.collapse-3 class="hide" data-toggle="collapse">
        <!--<img src="/mini_arrow_left-gray.svg" alt="" />--><i class="fa"></i>
      </b-link>

</div>

    <div class="map-wrap" style="height: 100vh">
      <!--<div class="notification">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        <strong>Ini adalah teks notifikasi</strong> yang muncul di atas
      </div>-->
      <b-link to="/" class="statik"> Karhutla Monitoring Sistem </b-link>
      <b-link class="statikstat">
        <div class="stat2" id="stat">
          <b-container>
            <b-row>
              <b-col md="4">
                <div class="stat2-item">
                  <img src="/forest-fire.svg" alt="" />
                  <h6>{{ totalTitik }}</h6>
                  <h5>Peringatan Kebakaran</h5>
                </div>
              </b-col>
              <b-col md="4">
                <div class="stat2-item">
                  <img src="/box-fire.svg" alt="" />
                  <h6>{{ luasKebakaran }}</h6>
                  <h5>Hektar Hutan & Lahan</h5>
                </div>
              </b-col>
              <b-col md="4">
                <div class="stat2-item">
                  <img src="/world.svg" alt="" />
                  <h6>{{ totalProv }}</h6>
                  <h5>Provinsi</h5>
                </div>
              </b-col>
            </b-row>
          </b-container>
        </div>
      </b-link>

      <b-link class="tematic" v-if="tematicImage[0]">
        <img
          :src="tematicImage[0].image"
          class="img img-responsives center-block"
          width="130"
        />
      </b-link>
      <b-link href="https://wa.me/+6281310035000" target="_blank" class="call">
        <img src="/phone-red.svg" alt="" class="mr-1 inner" />
        Sipongi
      </b-link>
      <b-link class="logo-responsive" v-b-toggle.sidebar-backdrop>
        <img src="/logo.svg" alt="" />
        <img src="/logo-text.svg" alt="" />
      </b-link>
      <marquee behavior="" direction="">
        {{ runningText }}
      </marquee>

      <div class="geser">
        <div class="bawah">
          <div id="logo_maps">
            <ul>
              <li>
                <a href="http://www.menlhk.go.id" target="_blank"
                  ><img
                    src="/logo_klhk.png"
                    class="img img-responsives center-block"
                  />
                  KLHK
                </a>
              </li>
              <li>
                <a href="http://www.ditjenppi.menlhk.go.id" target="_blank"
                  ><img
                    src="/logo_klhk.png"
                    class="img img-responsives center-block"
                  />
                  DitjenPPI
                </a>
              </li>
              <li>
                <a href="http://www.bmkg.go.id" target="_blank"
                  ><img
                    src="/logo_bmkg.png"
                    class="img img-responsives center-block"
                  />
                  BMKG
                </a>
              </li>
              <li>
                <a href="http://www.lapan.go.id" target="_blank"
                  ><img
                    src="/logo_lapan.png"
                    class="img img-responsives center-block"
                  />
                  LAPAN
                </a>
              </li>
              <li>
                <a href="http://www.bnpb.go.id" target="_blank"
                  ><img
                    src="/logo_bnpb.png"
                    class="img img-responsives center-block"
                  />
                  BNPB
                </a>
              </li>
            </ul>
            <b-link id="counter" class="counter">
              <h6
                class="sec-title"
                style="margin-bottom: 0px; font-weight: bolder"
              >
                Visitor {{ counter }}
              </h6>
              <!--<h6 class="sec-title" style="text-align: center;">{{counter}}</h6>-->
            </b-link>

            <div
              :class="['legend-wrap', 'content-list', { open: openedLegend }]"
            >
              <b-link class="legend-head" @click="toggleOpen">
                <h6 class="d-md-none d-block">Summary</h6>
                <h6 class="d-md-block d-none">Summary</h6>
                <img src="/arrow-serong.svg" alt="" class="shown" />
                <i class="fas fa-times close"></i>
              </b-link>
              <div class="legend-body">
                <div class="legend-item-contain">
                  <!-- <p>
                    Tanda yang muncul sesuai hasil prosedur pengendalian kebakaran
                    hutan melalui petugas patroli pencegahan
                  </p> -->
                  <div class="legend-item w-border-top">
                    <b-link @click="changeSumber('LPN-MODIS')"
                      ><h6>Satelit TERRA/AQUA</h6></b-link
                    >
                    <p class="count-total">
                      {{ getTotal('LPN-MODIS') }}
                    </p>
                    <span class="count-satellite">
                      <img src="/terra-red.svg" alt="" />
                      {{ getTotalLevel('LPN-MODIS', 'high') }}
                    </span>
                    <span class="count-satellite">
                      <img src="/terra-yw.svg" alt="" />
                      {{ getTotalLevel('LPN-MODIS', 'medium') }}
                    </span>
                    <span class="count-satellite">
                      <img src="/terra-gr.svg" alt="" />
                      {{ getTotalLevel('LPN-MODIS', 'low') }}
                    </span>
                  </div>
                  <div class="legend-item">
                    <b-link @click="changeSumber('LPN-NPP')"
                      ><h6>Satelit SNPP</h6></b-link
                    >
                    <p class="count-total">
                      {{ getTotal('LPN-NPP') }}
                    </p>
                    <span class="count-satellite">
                      <img src="/snpp-red.svg" alt="" />
                      {{ getTotalLevel('LPN-NPP', 'high') }}
                    </span>
                    <span class="count-satellite">
                      <img src="/snpp-yw.svg" alt="" />
                      {{ getTotalLevel('LPN-NPP', 'medium') }}
                    </span>
                    <span class="count-satellite">
                      <img src="/snpp-gr.svg" alt="" />
                      {{ getTotalLevel('LPN-NPP', 'low') }}
                    </span>
                  </div>
                  <div class="legend-item">
                    <b-link @click="changeSumber('LPN-NOAA20')"
                      ><h6>Satelit NOAA20</h6></b-link
                    >
                    <p class="count-total">
                      {{ getTotal('LPN-NOAA20') }}
                    </p>
                    <span class="count-satellite">
                      <img src="/noaa-red.svg" alt="" />
                      {{ getTotalLevel('LPN-NOAA20', 'high') }}
                    </span>
                    <span class="count-satellite">
                      <img src="/noaa-yw.svg" alt="" />
                      {{ getTotalLevel('LPN-NOAA20', 'medium') }}
                    </span>
                    <span class="count-satellite">
                      <img src="/noaa-gr.svg" alt="" />
                      {{ getTotalLevel('LPN-NOAA20', 'low') }}
                    </span>
                  </div>
                  <div class="legend-item">
                    <b-link @click="changeSumber('LPN-LANDSAT8')"
                      ><h6>Satelit LANDSAT8</h6></b-link
                    >
                    <p class="count-total">
                      {{ getTotal('LPN-LANDSAT8') }}
                    </p>
                    <span class="count-satellite">
                      <img src="/land-red.svg" alt="" />
                      {{ getTotalLevel('LPN-LANDSAT8', 'high') }}
                    </span>
                    <span class="count-satellite">
                      <img src="/land-yw.svg" alt="" />
                      {{ getTotalLevel('LPN-LANDSAT8', 'medium') }}
                    </span>
                    <span class="count-satellite">
                      <img src="/land-gr.svg" alt="" />
                      {{ getTotalLevel('LPN-LANDSAT8', 'low') }}
                    </span>
                  </div>
                </div>
                <b-button
                  variant="primary"
                  style="opacity: 0.5"
                  block
                  squared
                  v-b-toggle="'collapse-2'"
                  >Opsi</b-button
                >
                <b-collapse id="collapse-2">
                  <div class="filter-wrap">
                    <div class="select-wrap">
                      <label class="mr-sm-2">Periode</label>
                      <b-form-select
                        v-model="periodeData"
                        :options="[
                          { value: 12, text: '12 Jam Terakhir' },
                          { value: 24, text: '24 Jam Terakhir' },
                          { value: 48, text: '48 Jam Terakhir' },
                        ]"
                      ></b-form-select>
                    </div>
                    <div class="select-wrap w-border-bottom">
                      <label class="mr-sm-2">Confidence</label>

                      <b-form-checkbox
                        background-color="green"
                        id="checkbox-rendah"
                        class="checkbox-rendah"
                        v-model="trustData"
                        name="checkbox-rendah"
                        value="low"
                      >
                        <span class="color low"></span>
                        Rendah
                      </b-form-checkbox>
                      <b-form-checkbox
                        background-color="yellow"
                        id="checkbox-sedang"
                        v-model="trustData"
                        name="checkbox-sedang"
                        value="medium"
                      >
                        <span class="color med"></span>
                        Sedang
                      </b-form-checkbox>
                      <b-form-checkbox
                        background-color="red"
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
                        <span class="speed text-right">30 m/s</span>
                      </div>
                    </div>
                    <div class="select-wrap">
                      <label class="float-left">Indeks Kualitas Udara</label>
                      <b-form-checkbox
                        v-model="aqmsShow"
                        name="check-button"
                        switch
                        class="float-right"
                      >
                      </b-form-checkbox>
                      <ul class="index-udara-list" v-if="aqmsShow">
                        <li>Baik (0-50)</li>
                        <li>Sedang (51-100)</li>
                        <li>Tidak Sehat (101-199)</li>
                        <li>Sangat Tidak Sehat (200-299)</li>
                        <li>Berbahaya (> 300)</li>
                      </ul>
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

                    <div class="select-wrap">
                      <label class="mr-sm-2"></label>
                      <b-form-select v-model="currentTiles">
                        <option v-for="(t, i) in tiles" :key="i" :value="i">
                          {{ t.name }}
                        </option>
                      </b-form-select>
                    </div>
                  </div>
                </b-collapse>
              </div>
            </div>
          </div>

            <b-collapse visible id="collapse-3" data-toggle="collapse">
              <div class="carousel-wrapper" style="background-color: rgba(255, 255, 255, 0.5); padding: 7px 15px">
                <VueSlickCarousel v-bind="slickOptions" v-if="Object.keys(beritas).length > 0">
                  <div v-for="blog in beritas" :key="blog.slug" class="img-wrapper">
                    <b-link :to="`/blog/${blog.slug}`" class="blog-item"> <img :src="blog.image_url">
                      <div class="text-block">
                        <h5>{{ blog.title }}</h5>
                      </div>
                    </b-link>
                  </div>
                </VueSlickCarousel>
              </div>
            </b-collapse>
        </div>
      </div>

      <client-only>
        <l-map
          ref="mapSipongi"
          :minZoom="5.4"
          :maxZoom="17"
          :zoom="zoom"
          :center="centerMap"
          :options="{ zoomControl: false, attributionControl: false }"
          @update:zoom="zoomUpdated"
        >
          <l-tile-layer :url="tilesUrl"> </l-tile-layer>

          <l-image-overlay
            url="/gelap.png"
            :bounds="[
              [-85, -85],
              [1021.5, 1023],
            ]"
            :bubblingMouseEvents="false"
            :opacity="0.4"
            :visible="windDir"
          />
          <!-- Layer Cluster Kotakab -->
          <l-layer-group v-if="clusterKabKota.visible">
            <l-geo-json
              :geojson="clusterKabKota.data"
              :options="optionsKabKota"
              :options-style="styleFunction"
            ></l-geo-json>
          </l-layer-group>

          <!-- Layer Cluster Gambut -->
          <l-layer-group>
            <l-geo-json
              :geojson="clusterGambut"
              :options="optionsGambut"
              :visible="clusterGambutVisible"
              :options-style="styleFunctionGambut"
            ></l-geo-json>
          </l-layer-group>

          <!-- Layer Cluster Moratorium -->
          <l-layer-group>
            <l-geo-json
              :geojson="clusterMoratorium"
              :options="optionsMoratorium"
              :visible="clusterMoratoriumVisible"
              :options-style="styleFunctionMoratorium"
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
              :geojson="aqmsData"
              :visible="aqmsShow"
              :options="optionsAqms"
            ></l-geo-json>
          </l-layer-group>
          <l-layer-group>
            <l-geo-json
              :geojson="dataDaops.data"
              :visible="dataDaops.visible"
              :options="optionsDaops"
            ></l-geo-json>
          </l-layer-group>
          <l-layer-group>
            <l-geo-json
              v-if="dataHotSpotVisible"
              :geojson="dataHotSpot2"
              :options="optionsHotspot"
              :visible="dataHotSpotVisible"
            ></l-geo-json>
          </l-layer-group>
          <!-- <l-layer-group>
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
          </l-layer-group> -->
        </l-map>
      </client-only>
    </div>
    <div class="splash-screen" v-if="loading">
      <div class="wrap">
        <h4>Mohon Tunggu Sebentar, Kami Sedang Mengambil Data</h4>
        <b-spinner
          style="width: 3rem; height: 3rem"
          label="Large Spinner"
        ></b-spinner>
      </div>
    </div>

    <!-- Modal Titik Panas -->
    <b-modal
      centered
      scrollable
      id="modal-titikpanas"
      body-class="modal-titikpanas"
      size="xl"
      hide-footer
      title="Titik Panas"
    >
      <div class="content-list">
        <b-form-select
          @input="loadHotSpot()"
          v-model="confidence_level"
          class="mb-3 form-control"
          value-field="id"
          :options="['high', 'medium', 'low']"
        >
        </b-form-select>
        <b-form-select
          v-model="cariProvinsi"
          class="mb-3 form-control"
          value-field="id"
          text-field="nama_provinsi"
          :options="provs"
        ></b-form-select>

        <b-form-select
          v-model="cariKota"
          class="form-control"
          value-field="id"
          text-field="nama"
          @input="loadHotSpot()"
          :disabled="provs.length <= 0 || !cariProvinsi || kotakabs.length <= 1"
          :options="kotakabs"
        ></b-form-select>

        <div class="mt-4">
          <label for="fromDate">Filter data from: </label>
          <b-form-datepicker
            @input="loadHotSpot()"
            :max="yesterday"
            width="135px"
            id="fromDate"
            class="form-control"
            v-model="fromDate"
          ></b-form-datepicker>
          <label for="toDate">to: </label>
          <b-form-datepicker
            @input="loadHotSpot()"
            :max="today"
            width="135px"
            id="toDate"
            class="form-control"
            v-model="toDate"
          ></b-form-datepicker>
        </div>
      </div>

      <!-- Filter Periode
          <div class="mt-3">
            <div style="font-size: 12.5px;margin-bottom: 2px;color: #6c757d;">
              Periode
            </div>
            <client-only>
              <date-picker
                id="published_at"
                v-model="titikDate"
                type="date"
                format="dddd, DD MMMM YYYY"
                placeholder="Pilih tanggal"
              ></date-picker>
            </client-only>
          </div>
          -->

      <!-- Filter Convidence  -->
      <div class="mt-2 mb-3">
        <div style="font-size: 12.5px; margin-bottom: 5px; color: #6c757d">
          Confidence
        </div>
        <b-link
          :class="`status ${checkConvidence('low') ? 'active' : ''}`"
          @click="changeConvidence('low')"
          >Rendah
        </b-link>
        <b-link
          :class="`status ${checkConvidence('medium') ? 'medium' : ''}`"
          @click="changeConvidence('medium')"
          >Sedang
        </b-link>
        <b-link
          :class="`status ${checkConvidence('high') ? 'high' : ''}`"
          @click="changeConvidence('high')"
          >Tinggi
        </b-link>
      </div>

      <!-- Filter Convidence  -->
      <div class="mt-2 mb-3">
        <div style="font-size: 12.5px; margin-bottom: 5px; color: #6c757d">
          Lahan
        </div>
        <b-link
          :class="`status ${checkGambut('gambut') ? 'gambut' : ''}`"
          @click="changeGambut('gambut')"
          >Gambut
        </b-link>
        <b-link
          :class="`status ${checkMoratorium('moratorium') ? 'moratorium' : ''}`"
          @click="changeMoratorium('moratorium')"
          >Moratorium
        </b-link>
      </div>

      <b-row class="d-flex justify-content-between px-3 my-4">
        <div class="float-right">
          <b-link to="" class="pdf">
            <img src="/pdf.svg" alt="" />
            <span>Download XLS</span>
          </b-link>
        </div>
        <div class="float-left">
          <b-link
            :class="`status ${checkSumber('LPN-MODIS') ? 'active' : ''}`"
            @click="changeSumber('LPN-MODIS')"
            >Terra/Aqua
          </b-link>
          <b-link
            :class="`status ${checkSumber('LPN-NPP') ? 'active' : ''}`"
            @click="changeSumber('LPN-NPP')"
            >SNPP
          </b-link>
          <b-link
            :class="`status ${checkSumber('LPN-NOAA20') ? 'active' : ''}`"
            @click="changeSumber('LPN-NOAA20')"
            >NOAA20
          </b-link>
          <b-link
            :class="`status ${checkSumber('LPN-LANDSAT8') ? 'active' : ''}`"
            @click="changeSumber('LPN-LANDSAT8')"
            >LANDSAT8
          </b-link>
        </div>
      </b-row>

      <div class="content-list titik">
        <template v-for="datas in DataHotSpot.kabkota">
          <template v-for="(kotakab, index) in datas">
            <b-link
              :key="index"
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
    </b-modal>

    <!-- Modal Emisi CO2 -->
    <b-modal
      centered
      scrollable
      id="modal-emisico2"
      body-class="modal-emisico2"
      size="lg"
      hide-footer
      title="Emisi CO2 dari Kebakaran Hutan dan Lahan (Ton CO2e)"
    >
      <b-container>
        <div class="mb-4">
          <div class="row">
            <div class="col-12">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <!-- <th scope="col">#</th> -->
                    <th scope="col">Provinsi</th>
                    <th scope="col" v-for="tahun in emisis" :key="tahun">
                      {{ tahun }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(data, i) in dataemisis" :key="i">
                    <td>{{ i }}</td>
                    <td v-for="(total, j) in data" :key="j">
                      {{
                        total.luas != '' || total.luas != null ? total.luas : 0
                      }}
                    </td>
                  </tr>
                </tbody>
                <tfoot style="font-weight: bold">
                  <tr>
                    <td>Total</td>
                    <td v-for="(total, i) in totalemisis" :key="i">
                      {{ total.total }}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </b-container>
    </b-modal>

    <!-- Modal Luas Kebakaran -->
    <b-modal
      centered
      scrollable
      id="modal-luaskebakaran"
      body-class="modal-luaskebakaran"
      size="lg"
      hide-footer
      title="Rekapitulasi Luas Kebakaran Hutan dan Lahan (Ha) Per Provinsi Di Indonesia Tahun 2015-2020 (Data s/d 30 September 2020)"
    >
      <b-container>
        <div class="mb-4">
          <div class="row">
            <div class="col-12">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <!-- <th scope="col">#</th> -->
                    <th scope="col">Provinsi</th>
                    <th scope="col" v-for="tahun in luass" :key="tahun">
                      {{ tahun }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(data, i) in dataluass" :key="i">
                    <td>{{ i }}</td>
                    <td v-for="(total, j) in data" :key="j">
                      {{
                        total.luas != '' || total.luas != null ? total.luas : 0
                      }}
                    </td>
                  </tr>
                </tbody>
                <tfoot style="font-weight: bold">
                  <tr>
                    <td>Total</td>
                    <td v-for="(total, i) in totalluass" :key="i">
                      {{ total.total }}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </b-container>
    </b-modal>

    <!-- Modal FDRS -->
    <b-modal
      centered
      scrollable
      id="modal-fdrs"
      body-class="modal-fdrs"
      size="lg"
      hide-footer
      title="FDRS"
    >
      <div class="content-list">
        <b-container>
          <div class="mb-4">
            <div class="row">
              <div class="col-12 col-md-4">
                <!-- Option Wilayah -->
                <div class="form-group">
                  <div class="row">
                    <!-- <label class="col-sm-2 control-label">Wilayah</label> -->
                    <div class="col-sm-10">
                      <b-form-select
                        v-model="defaultWilayah"
                        :options="opsiWilayah"
                      >
                      </b-form-select>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-4">
                <!-- Option Index -->
                <div class="form-group">
                  <div class="row">
                    <!--  <label class="col-sm-2 control-label">Hari</label> -->
                    <div class="col-sm-10">
                      <b-form-select v-model="defaultHari" :options="opsiHari">
                      </b-form-select>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12 col-md-4">
                <div class="form-group">
                  <div class="row">
                    <label class="col-sm-2 control-label"></label>
                    <div class="col-sm-10">
                      <button variant="primary" @click="filter">Filter</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <b-row>
            <b-col md="12">
              <b-row>
                <b-col md="12">
                  <div>
                    <img
                      :src="dataFdrs.image"
                      :alt="dataFdrs.wilayah"
                      class="img-fluid"
                    />
                  </div>
                  <div>
                    <a
                      href="#"
                      @click="download(dataFdrs.image, dataFdrs.wilayah)"
                    >
                      Download
                    </a>
                  </div>
                  <p class="pt-1" style="font-size: 12px">
                    *Sumber data : Badan Meteorologi Dan Meteorologi Klimatologi
                    dan Geofisika
                  </p>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </b-modal>

    <!-- Modal Berita -->
    <b-modal
      centered
      scrollable
      id="modal-berita"
      body-class="modal-berita"
      size="md"
      hide-footer
      title="Berita"
    >
      <div class="content-list">
        <b-container>
          <b-row>
            <b-col md="6" v-for="blog in beritas" :key="blog.slug">
              <b-link :to="`/blog/${blog.slug}`" class="blog-item">
                <div
                  class="image"
                  :style="{ backgroundImage: `url(${blog.image_url})` }"
                ></div>
                <h5>{{ blog.title }}</h5>
                <span>{{ blog.created_at }}</span>
              </b-link>
            </b-col>
            <b-col v-if="loadMore" md="12" class="text-center">
              <button class="btn btn-ghost" @click="loadMoreData()">
                Tampilkan Lebih Banyak
              </button>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </b-modal>

    <!-- Modal Galeri -->
    <b-modal
      centered
      scrollable
      id="modal-galeri"
      body-class="modal-galeri"
      size="lg"
      hide-footer
      title="Galeri"
    >
      <div class="content-list">
        <b-tabs>
          <b-tab title="Kegiatan Pemadaman" active>
            <b-row>
              <b-col cols="6" v-for="blog in pemadamans" :key="blog.slug">
                <b-link :to="`/galeri/` + blog.slug" class="blog-item">
                  <div
                    class="image"
                    :style="{
                      backgroundImage: `url(${blog.detail.image_url})`,
                    }"
                  ></div>
                  <h5>{{ blog.title }}</h5>
                  <span>{{
                    $moment(blog.created_at).format('DD MMMM YYYY')
                  }}</span>
                </b-link>
              </b-col>
              <b-col v-if="loadMoreGal" md="12" class="text-center">
                <b-button
                  variant="primary"
                  class="loadMore"
                  @click="loadMoreDataGal()"
                  >Lihat Lebih Banyak</b-button
                >
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Kegiatan Lainnya">
            <b-row>
              <b-col cols="6" v-for="blog in lains" :key="blog.slug">
                <b-link :to="`/galeri/` + blog.slug" class="blog-item">
                  <div
                    class="image"
                    :style="{
                      backgroundImage: `url(${blog.detail.image_url})`,
                    }"
                  ></div>
                  <h5>{{ blog.title }}</h5>
                  <span>{{ blog.created_at }}</span>
                </b-link>
              </b-col>
              <b-col v-if="loadMoreLain" md="12" class="text-center">
                <b-button
                  variant="primary"
                  class="loadMore"
                  @click="loadMoreDataLain()"
                  >Lihat Lebih Banyak</b-button
                >
              </b-col>
            </b-row>
          </b-tab>
        </b-tabs>
      </div>
    </b-modal>

    <!-- Modal Perundangan -->
    <b-modal
      centered
      scrollable
      id="modal-perundangan"
      body-class="modal-perundangan"
      size="lg"
      hide-footer
      title="Peraturan Perundangan"
    >
      <div class="content-list">
        <b-row>
          <b-col md="12" class="text-center">
            <div role="tablist" class="accordion-publikasipeta">
              <b-card
                style="background-color: #f7f7f7"
                v-for="(kat, index) in kategories"
                no-body
                class="mb-1"
                :key="kat.slug"
              >
                <b-card-header header-tag="header" role="tab">
                  <b-button block v-b-toggle="`${kat.slug}`" variant="info">
                    <h5>
                      {{ kat.name }}
                    </h5>
                    <img src="/arrow-orange.svg" alt="" />
                  </b-button>
                </b-card-header>
                <b-collapse
                  :id="kat.slug"
                  :visible="index === 0"
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <div
                      v-for="perpu in kat.perpu.data"
                      :key="perpu.slug"
                      class="uud-item"
                    >
                      <b-link
                        :href="`${
                          perpu.tipe === 'file'
                            ? `/v1/peraturan-perundangan/file/${perpu.slug}`
                            : perpu.file_url
                        }`"
                        target="_blank"
                      >
                        {{ perpu.title }}
                      </b-link>
                      <span>
                        {{ perpu.nomor }}
                      </span>
                    </div>
                  </b-card-body>
                </b-collapse>
              </b-card>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-modal>

    <!-- Modal Laporan Harian Posko -->
    <b-modal
      centered
      scrollable
      id="modal-laporanposko"
      body-class="modal-laporanposko"
      size="md"
      hide-footer
      title="Laporan Harian Posko"
    >
      <div class="content-list">
        <b-row>
          <b-col md="12">
            <div
              v-for="(laporan, i) in laporanHarian"
              :key="i"
              class="document-item"
            >
              <img :src="`/paper.svg`" alt="icon" />
              <h5>{{ laporan.bulan_nama }}&nbsp;{{ laporan.tahun }}</h5>
              <b-link
                :href="laporan.link"
                target="_blank"
                class="btn btn-secondary"
              >
                Open
                <i class="fas fa-angle-right"></i>
              </b-link>
            </div>
            <div v-if="loadMoreLaporan" class="text-center mt-4">
              <b-button @click="loadMoreDataLaporan()" variant="primary"
                >Lihat lebih banyak</b-button
              >
            </div>
          </b-col>
        </b-row>
      </div>
    </b-modal>

    <!-- Modal Dokumen Lainnya -->
    <b-modal
      centered
      scrollable
      id="modal-dokumenlain"
      body-class="modal-dokumenlain"
      size="md"
      hide-footer
      title="Dokumen Lainnya"
    >
      <div class="content-list">
        <b-row>
          <b-col md="12">
            <div
              v-for="dok in dokumen"
              :key="dok.slug"
              class="document-itempeta"
            >
              <img
                :src="`/${
                  dok.tipe === 'file'
                    ? 'paper.svg'
                    : dok.tipe === 'video'
                    ? 'video.svg'
                    : 'paper.svg'
                }`"
                alt="icon"
              />
              <h5>{{ dok.title }}</h5>
              <b-link
                :href="`${
                  dok.tipe === 'file'
                    ? `/v1/dokumen-lain/file/${dok.slug}`
                    : dok.file_url
                }`"
                target="_blank"
                :class="`btn ${
                  dok.tipe === 'file'
                    ? 'btn-secondary'
                    : dok.tipe === 'video'
                    ? 'btn-third'
                    : 'btn-secondary'
                }`"
              >
                {{
                  dok.tipe === 'file'
                    ? 'Download'
                    : dok.tipe === 'video'
                    ? 'Watch'
                    : 'Open'
                }}
                <i class="fas fa-angle-right"></i>
              </b-link>
            </div>
            <div v-if="loadMorePerundangan" md="12" class="text-center">
              <b-button
                class="loadMore"
                @click="loadMoreDataPerundangan()"
                variant="primary"
                >Lihat lebih banyak</b-button
              >
            </div>
          </b-col>
        </b-row>
      </div>
    </b-modal>

    <!-- Modal Direktorat -->
    <b-modal
      centered
      scrollable
      id="modal-direktorat"
      body-class="modal-direktorat"
      size="md"
      hide-footer
      title="Direktorat PKHL"
    >
      <div class="content-list">
        <b-row>
          <b-col md="4" order-md="2">
            <img
              :src="direktoratPKHL.logo_url"
              alt=""
              class="img-fluid img-logo"
            />
          </b-col>
          <b-col md="8" order-md="1" v-html="direktoratPKHL.text"> </b-col>
        </b-row>
      </div>
    </b-modal>

    <!-- Modal Manggala Agni -->
    <b-modal
      centered
      scrollable
      id="modal-manggala-agni"
      body-class="modal-manggala-agni"
      size="md"
      hide-footer
      title="Manggala Agni"
    >
      <div class="content-list">
        <b-row>
          <b-col md="12">
            <div class="nav-agni2">
              <b-link @click="showProfile" :class="{ active: profile }"
                >Profil</b-link
              >
              <b-link @click="showDaerahOp" :class="{ active: daerahOp }"
                >Daerah Operasional</b-link
              >
              <b-link @click="showSarana" :class="{ active: sarana }"
                >Sarana & Prasarana</b-link
              >
            </div>
          </b-col>
          <b-col lg="12">
            <!-- Profil -->
            <b-row v-if="profile">
              <b-col lg="4" order-lg="2">
                <div
                  :class="[
                    { toBot: scrolledToBottom },
                    { scrolling: isScroll },
                    'nav-content',
                  ]"
                >
                  <h3>Profil</h3>
                  <b-link
                    v-for="prof in profil"
                    :key="prof.id"
                    v-scroll-to="'#data' + prof.urutan"
                    to="#"
                    >{{ prof.title }}</b-link
                  >
                </div>
              </b-col>
              <b-col lg="8" order-lg="1">
                <h5 class="title">Profil</h5>
                <div v-for="prof in profil" :key="prof.id">
                  <h6 class="subtitle" :id="'data' + prof.urutan">
                    {{ prof.title }}
                  </h6>
                  <img
                    v-if="prof.image !== null"
                    :src="prof.image_url"
                    alt=""
                    class="img-fluid mb-3"
                  />
                  <div v-html="prof.text"></div>
                </div>
              </b-col>
            </b-row>
            <!-- Daerah Operasi -->
            <b-row v-if="daerahOp">
              <b-col md="12">
                <h6 class="title">Daerah Operasional</h6>
                <div class="daerah-item" v-for="(d, i) in daerah" :key="i">
                  <!-- <h5>Sumatra Utara-01</h5> -->
                  <h5>{{ d.daerah }}</h5>
                  <b-row v-for="(k, j) in d.kota" :key="j">
                    <b-col md="6">
                      <p class="heading">{{ k.daerah }}</p>
                      <span class="alamat">{{ k.alamat }}</span>
                    </b-col>
                    <b-col md="3" cols="6">
                      <span class="jumlah">Jumlah Regu</span>
                      <span class="count">{{ k.jumlah_regu }}</span>
                    </b-col>
                    <b-col md="3" cols="6">
                      <span class="jumlah">Jumlah Anggota </span>
                      <span class="count">{{ k.jumlah_anggota }}</span>
                    </b-col>
                  </b-row>
                </div>
              </b-col>
            </b-row>
            <!-- Sarana & Prasarana -->
            <b-row v-if="sarana">
              <b-col md="12" v-html="sarpras.text"> Sarana </b-col>
            </b-row>
          </b-col>
        </b-row>
      </div>
    </b-modal>

    <!-- Modal Struktur Organisasi -->
    <b-modal
      centered
      scrollable
      id="modal-struktur-organisasi"
      body-class="modal-struktur-organisasi"
      size="md"
      hide-footer
      title="Struktur Organisasi"
    >
      <div class="content-list">
        <b-row>
          <b-col md="12">
            <img :src="strukturOrganisasi.image_url" alt="" class="img-fluid" />
          </b-col>
        </b-row>
      </div>
    </b-modal>

    <!-- Modal Kontak Kami -->
    <b-modal
      centered
      scrollable
      id="modal-kontak-kami"
      body-class="modal-kontak-kami"
      size="md"
      hide-footer
      title="Kontak Kami"
    >
      <div class="content-list">
        <b-row>
          <b-col md="12" class="text-center">
            <div class="logo-footer">
              <img src="/kementerian-logo.svg" />
              <h6>Kementerian Lingkungan Hidup dan Kehutanan</h6>
            </div>
            <p font-size="14px" font-weight="100">
              Gedung Pusat Kehutanan Manggala Wanabakti Blok VII Lt. 13
              <br />Jl. Jend. Gatot Subroto Jakarta 10270
            </p>
            <p>
              <i class="far fa-envelope"></i> posko.karhutla@menlhk.go.id<br />
              <i class="fas fa-phone"></i> 021-5704618
            </p>
          </b-col>
        </b-row>
      </div>
    </b-modal>

    <!-- Modal Disclaimer -->
    <b-modal
      centered
      scrollable
      id="modal-disclaimer"
      body-class="modal-disclaimer"
      size="md"
      hide-footer
      title="Dislaimer"
    >
      <div class="content-list">
        <b-col md="12" order-md="1" v-html="disclaimer.text"> </b-col>
      </div>
    </b-modal>
  </div>
</template>

<script>
import modal from '../Modal'

export default {
  name: 'Peta',
  data() {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const yesterday = new Date(today - 1)
    return {
      fromDate: '',
      toDate: '',
      totalTitik: 0,
      totalProv: 0,
      luasKebakaran: 0,
      tematicImage: [],
      open: false,
      confidence_level: 'high',
      slickOptions: {
        slidesToShow: 8,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 6000
      },

      yesterday: new Date(today - 1),
      today: now,
      dataHotSpotSatelit: [],
      beritaMarqueeText: true,
      currentTiles: 0,
      tiles: [
        {
          name: 'Basemap Street Map',
          url:
            'https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png',
        },

        {
          name: 'Basemap Topo Map',
          url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
        },

        {
          name: 'Basemap Imagery Map',
          url:
            'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        },
      ],

      isScroll: null,
      scrolledToBottom: false,
      profile: true,
      daerahOp: false,
      sarana: false,
      counter: 0,
      runningText: null,
      openedLegend: true,
      titikDate: '',
      browser: process.browser,
      centerMap: [-2.548926, 118.0148634],
      periodeData: 24,
      trustData: ['high'],
      zoom: 5.4,
      windDir: false,
      unitKerja: false,
      btsAdmf: false,
      DataHotSpot: {
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
      dataHotSpot2: {
        features: [],
        type: 'FeatureCollection',
      },
      dataHotSpotVisible: true,
      chkSumber: ['LPN-MODIS', 'LPN-NPP', 'LPN-NOAA20', 'LPN-LANDSAT8'],
      clusterKabKota: {
        data: null,
        visible: false,
        oldId: null,
      },

      // Gambut
      clusterGambut: {
        features: [],
        type: 'FeatureCollection',
      },
      chkGambut: [],
      clusterGambutVisible: false,

      // Moratorium
      clusterMoratorium: {
        features: [],
        type: 'FeatureCollection',
      },
      chkMoratorium: [],
      clusterMoratoriumVisible: false,

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
      aqmsData: null,
      aqmsShow: false,
      options: {
        direction: 'desc',
        sortBy: 'created_at',
        page: 1,
        per_page: 6,
      },
      OptWind: {
        displayValues: true,
        displayOptions: {
          velocityType: 'Global Wind',
          displayPosition: 'bottomleft',
          displayEmptyString: 'No wind data',
        },
        data: [],
        colorScale: [
          '#00ff3a',
          '#22f932',
          '#84ea1a',
          '#d8d507',
          '#ffbf00',
          '#ff9900',
          '#ff6e06',
          '#ff3d0e',
          '#ff1415',
          '#ff0018',
        ],
        velocityScale: 0.015,
        maxVelocity: 30,
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
      pemadamans: [],
      optionsGal: {
        tipe: 'Pemadaman',
        page: 1,
        per_page: 6,
      },
      lains: [],
      optionsLain: {
        tipe: 'Lainnya',
        page: 1,
        per_page: 6,
      },
      beritas: [],
      options: {
        direction: 'desc',
        sortBy: 'created_at',
        page: 1,
        per_page: 6,
      },
      kategories: [],
      dokumen: [],
      options: {
        direction: 'desc',
        sortBy: 'created_at',
        page: 1,
        per_page: 15,
      },

      laporanHarian: [],
      optionsLaporan: {
        direction: 'desc',
        sortBy: 'created_at',
        page: 1,
        per_page: 15,
      },
      direktoratPKHL: [],
      strukturOrganisasi: [],
      profil: [],
      disclaimer: [],
      sarpras: [],
      daerah: [],
      isScroll: null,
      scrolledToBottom: false,
      profile: true,
      daerahOp: false,
      sarana: false,
      loadMoreGal: false,
      loadMoreLain: false,
      loadMore: false,
      loadMorePerundangan: false,
      loadMoreLaporan: false,

      dataLuas: {
      nomor: 1,
      luass: [],
      dataluass: [],
      totalluass: [],
      },

      dataEmisi: {
      nomor: 1,
      emisis: [],
      dataemisis: [],
      totalemisis: [],
      },

      dataFdrs: {},
      //Default Opsi Wilayah
      defaultWilayah: 'indonesia',
      selectedWilayah: 'indonesia',
      //Default Opsi Hari
      defaultHari: 'obs',
      selectedHari: 'obs',
      //Filter
      opsiWilayah: [],
      opsiHari: [],
      option: {
        index: 'dc',
      },
      loading: false,
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
        let self = this
        this.dataHotSpotVisible = false
        setTimeout(function () {
          self.dataHotSpotVisible = true
        }, 100)
        this.$refs.mapSipongi.mapObject.setView([-2.548926, 118.0148634], 5)
        this.$refs.mapSipongi.mapObject.doubleClickZoom = false
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
  components: {
    modal,
  },
  computed: {
    tilesUrl() {
      return this.tiles[this.currentTiles].url
    },
    noaaGreenIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/noaa_low.svg',
        iconSize: [10, 10],
      })
    },
    noaaYellowIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/noaa_medium.svg',
        iconSize: [10, 10],
      })
    },
    noaaRedIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/noaa_high.svg',
        iconSize: [10, 10],
      })
    },
    landsatGreenIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/landsat_low.svg',
        iconSize: [10, 10],
      })
    },
    landsatYellowIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/landsat_medium.svg',
        iconSize: [10, 10],
      })
    },
    landsatRedIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/landsat_high.svg',
        iconSize: [10, 10],
      })
    },
    terraGreenIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/terra_low.svg',
        iconSize: [10, 10],
      })
    },
    terraYellowIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/terra_medium.svg',
        iconSize: [10, 10],
      })
    },
    terraRedIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/terra_high.svg',
        iconSize: [10, 10],
      })
    },
    snppGreenIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/snpp_low.svg',
        iconSize: [10, 10],
      })
    },
    snppYellowIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/snpp_medium.svg',
        iconSize: [10, 10],
      })
    },
    snppRedIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/snpp_high.svg',
        iconSize: [10, 10],
      })
    },
    unitIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/marker-unit.svg',
        iconSize: [20, 20],
      })
    },
    aqmsGreenIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/marker-unit.svg',
        iconSize: [10, 10],
      })
    },
    aqmsGreenIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/udara-green.svg',
        iconSize: [20, 20],
      })
    },
    aqmsBlueIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/udara-blue.svg',
        iconSize: [20, 20],
      })
    },
    aqmsYellowIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/udara-yellow.svg',
        iconSize: [20, 20],
      })
    },
    aqmsRedIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/udara-red.svg',
        iconSize: [20, 20],
      })
    },
    aqmsBlackIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/udara-black.svg',
        iconSize: [20, 20],
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

    optionsGambut() {
      return {
        onEachFeature: this.onEachFeatureGambut,
      }
    },
    onEachFeatureGambut() {
      return (feature, layer) => {
        let popupHtml = `<div class='table-responsive'><table class='table b-table table-striped table-sm'>`
        popupHtml += `<tbody>`
        popupHtml += `<tr><th>Kota/Kabupaten</th><td>${
          feature.properties.nama !== '' ? feature.properties.nama : '-'
        }</td></tr>`
        popupHtml += `<tr><th>Provinsi</th><td>${
          feature.properties.provinsi !== '' ? feature.properties.provinsi : '-'
        }</td></tr>`
        popupHtml += `<tr><th>Lahan</th><td>${
          feature.properties.lahan !== '' ? feature.properties.lahan : '-'
        }</td></tr>`
        popupHtml += `<tr><th>Kedalaman</th><td>${
          feature.properties.kedalaman !== ''
            ? feature.properties.kedalaman
            : '-'
        }</td></tr>`
        popupHtml += `<tr><th>Sumber</th><td>${
          feature.properties.sumber !== '' ? feature.properties.sumber : '-'
        }</td></tr>`
        popupHtml += `</tbody>`
        popupHtml += `</table></div>`
        layer.bindPopup(popupHtml)
      }
    },
    optionsMoratorium() {
      return {
        onEachFeature: this.onEachFeatureMoratorium,
      }
    },
    onEachFeatureMoratorium() {
      return (feature, layer) => {
        let popupHtml = `<div class='table-responsive'><table class='table b-table table-striped table-sm'>`
        popupHtml += `<tbody>`
        popupHtml += `<tr><th>Kota/Kabupaten</th><td>${
          feature.properties.nama !== '' ? feature.properties.nama : '-'
        }</td></tr>`
        popupHtml += `<tr><th>Provinsi</th><td>${
          feature.properties.provinsi !== '' ? feature.properties.provinsi : '-'
        }</td></tr>`
        popupHtml += `<tr><th>Lahan</th><td>${
          feature.properties.lahan !== '' ? feature.properties.lahan : '-'
        }</td></tr>`
        popupHtml += `<tr><th>Sumber</th><td>${
          feature.properties.sumber !== '' ? feature.properties.sumber : '-'
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

    styleFunctionGambut() {
      return () => {
        return {
          weight: 2,
          color: '#00807f',
          opacity: 1,
          fillColor: '#00807f',
          fillOpacity: 0.15,
        }
      }
    },
    styleFunctionMoratorium() {
      return () => {
        return {
          weight: 2,
          color: '#9d6a89',
          opacity: 1,
          fillColor: '#9d6a89',
          fillOpacity: 0.15,
        }
      }
    },

    optionsAqms() {
      let self = this
      return {
        onEachFeature: this.onEachFeatureAqms,
        pointToLayer: function (feature, latlng) {
          let marker = self.$L.marker(latlng, {
            icon: self.getIconAqms(feature.properties),
          })

          marker.on('dblclick', function (e) {
            self.changeCenterMarker(e, feature.properties)
          })

          return marker
        },
        filter: function (feature, layer) {
          if (
            feature.properties.tanggal &&
            feature.properties.jam &&
            feature.properties.kriteria &&
            feature.properties.ispu
          ) {
            if (feature.properties.kriteria.kategori !== 'NONAKTIF') {
              return true
            }
          }

          return false
        },
      }
    },
    onEachFeatureAqms() {
      let self = this
      return (feature, layer) => {
        let image = '/nophoto.jpg'
        if (feature.properties.image) {
          image = `http://iku.menlhk.go.id/aqms/uploads/stasiun/${feature.properties.image}`
        }

        let popupHtml = `<table class='table b-table table-striped table-sm'>`
        popupHtml += `<tbody>`
        popupHtml += `<tr><th>Tanggal/Jam</th><td>${
          feature.properties.tanggal && feature.properties.jam
            ? self
                .$moment(
                  `${feature.properties.tanggal} ${feature.properties.jam}`
                )
                .format('dddd, DD MMMM YYYY HH:mm')
            : '-'
        }</td><td rowspan="6" style="vertical-align:middle"><img src="${image}" width="200"></td></tr>`
        popupHtml += `<tr><th>Stasiun</th><td>${
          feature.properties.kode ? feature.properties.kode : '-'
        }</td></tr>`
        popupHtml += `<tr><th>Kab/Kota</th><td>${
          feature.properties.kabupatenNama
            ? feature.properties.kabupatenNama
            : '-'
        }</td></tr>`
        popupHtml += `<tr><th>Provinsi</th><td>${
          feature.properties.provinsiNama
            ? feature.properties.provinsiNama
            : '-'
        }</td></tr>`
        popupHtml += `<tr><th>ISPU</th><td>${
          feature.properties.ispu
            ? feature.properties.ispu.nilai
              ? feature.properties.ispu.nilai
              : '-'
            : '-'
        }</td></tr>`
        popupHtml += `<tr><th>Parameter</th><td>${
          feature.properties.ispu
            ? feature.properties.ispu.parameter
              ? feature.properties.ispu.parameter
              : '-'
            : '-'
        }</td></tr>`
        popupHtml += `</tbody>`
        popupHtml += `</table>`
        layer.bindPopup(popupHtml, {
          maxWidth: 600,
        })
      }
    },
    optionsHotspot() {
      let self = this
      let visible = this.dataHotSpotVisible
      return {
        onEachFeature: this.onEachFeatureHotpot,
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
          return self.checkSumber(feature.properties.sumber)
        },
      }
    },
    onEachFeatureHotpot() {
      let self = this
      return (feature, layer) => {
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
          feature.properties.kawasan !== '' ? feature.properties.kawasan : '-'
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
          feature.properties.kabkota !== '' ? feature.properties.kabkota : '-'
        }</td></tr>`
        popupHtml += `<tr><th>Provinsi</th><td>${
          feature.properties.nama_provinsi !== ''
            ? feature.properties.nama_provinsi
            : '-'
        }</td></tr>`
        popupHtml += `</tbody>`
        popupHtml += `</table></div>`
        layer.bindPopup(popupHtml)
      }
    },
  },
  async created() {
    if (this.firstLoad) {
      await this.cmbProvs()
    }
    this.openLeg()

    window.addEventListener('resize', this.openLeg)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.openLeg)
  },
  async fetch() {
    this.loading = true
    await this.loadHotSpot()
    await this.loadTematicBar()
    await this.getRunningText()
    await this.loadPemadaman()
    await this.loadLain()
    await this.loadBerita()
    await this.loadPerundangan()
    await this.loadFdrs()
    await this.loadAqms()
    await this.loadWind()
    await this.loadDataLuas()
    await this.loadDataEmisi()
    await this.loadTotalTitik()
    await this.loadLuasKebakaran()
    await this.loadTotalProv()

    this.loading = false
  },
  filters: {
    petaFilter: function (value) {
      console.log(this.DataHotSpot, value)
    },
  },
  methods: {
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

    async loadTematicBar() {
      // const url = !process.server ? `/api/data/tematic` : `/api/data/tematic`
      const url = `http://139.99.52.109:8288/api/data/tematic`

      await this.$axios
        .$get(url)
        .then((res) => {
          this.tematicImage.push({
            image: res.data[0].image_url,
            title: res.data[0].title,
          })
        })
        .catch((err) => {
          console.log(err)
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
    },
    async visitor() {
      const url = !process.server ? `/v1/visitor` : `/api/visitor`

      await this.$axios
        .$get(url)
        .then((res) => {
          this.counter = res.visitor
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
    },

    next() {
      this.$refs.flickity.next()
    },

    previous() {
      this.$refs.flickity.previous()
    },

    hideBerita() {
      this.beritaMarqueeText = !this.beritaMarqueeText
    },
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false)
      }
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
      console.log(heightDoc)
      console.log(bottomOfWindow)
      if (bottomOfWindow) {
        this.scrolledToBottom = true
      } else {
        this.scrolledToBottom = false
      }
    },
    showProfile() {
      this.profile = true
      this.daerahOp = false
      this.sarana = false
    },
    showDaerahOp() {
      this.profile = false
      this.daerahOp = true
      this.sarana = false
    },
    showSarana() {
      this.profile = false
      this.daerahOp = false
      this.sarana = true
    },

    async getRunningText() {
      const url = !process.server
        ? `/v1/data/running-text`
        : `/api/data/running-text`

      await this.$axios
        .$get(url)
        .then((res) => {
          this.runningText = res.text
          // console.log(res)
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
    },

    showProfile() {
      this.profile = true
      this.daerahOp = false
      this.sarana = false
    },
    showDaerahOp() {
      this.profile = false
      this.daerahOp = true
      this.sarana = false
    },
    showSarana() {
      this.profile = false
      this.daerahOp = false
      this.sarana = true
    },

    async getRunningText() {
      const url = !process.server
        ? `/v1/data/running-text`
        : `/api/data/running-text`

      await this.$axios
        .$get(url)
        .then((res) => {
          this.runningText = res.text
          // console.log(res)
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
    },

    async loadDataLuas() {
      const url = !process.server
        ? `/v1/data/luas-kebakaran`
        : `/api/data/luas-kebakaran`

      await this.$axios
        .$get(url)
        .then((res) => {
          this.luass = res.tahun
          this.dataluass = res.data
          this.totalluass = res.total
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
    },
    async loadDataEmisi() {
      const url = !process.server ? `/v1/data/emisi-co2` : `/api/data/emisi-co2`

      await this.$axios
        .$get(url)
        .then((res) => {
          this.emisis = res.tahun
          this.dataemisis = res.data
          this.totalemisis = res.total
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
    },
    openLeg() {
      if (window.innerWidth > 767) {
        this.openedLegend = true
      } else {
        this.openedLegend = false
      }
    },
    getTotalLevel(key, level) {
      return this.DataHotSpot.totalsLevel[key] &&
        this.DataHotSpot.totalsLevel[key][level] &&
        this.checkSumber(key)
        ? this.DataHotSpot.totalsLevel[key][level]
        : 0
    },
    getTotal(key) {
      return this.DataHotSpot.totals[key] && this.checkSumber(key)
        ? this.DataHotSpot.totals[key]
        : 0
    },
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

    changeConvidence(val) {
      let index = this.trustData.indexOf(val)
      if (index < 0) {
        this.trustData.push(val)
      } else {
        this.trustData.splice(index, 1)
      }
    },
    checkConvidence(val) {
      return this.trustData.indexOf(val) >= 0
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
    getIconAqms(item) {
      if (item.ispu.nilai <= 50) {
        return this.aqmsGreenIcon
      } else if (item.ispu.nilai >= 51 && item.ispu.nilai <= 100) {
        return this.aqmsBlueIcon
      } else if (item.ispu.nilai >= 101 && item.ispu.nilai <= 199) {
        return this.aqmsYellowIcon
      } else if (item.ispu.nilai >= 200 && item.ispu.nilai <= 299) {
        return this.aqmsRedIcon
      } else if (item.ispu.nilai >= 300) {
        return this.aqmsBlackIcon
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
      // const url = !process.server ? `/v1/indoHotspot` : `/v1/indoHotspot`
      const url = 'http://139.99.52.109:8288/v1/indoHotspot'

      await this.$axios
        .$get(url, {
          params: {
            confidence: [this.confidence_level],
            from: this.fromDate,
            to: this.toDate,
          },
        })
        .then(({ data }) => {
          this.DataHotSpot = data
          this.dataHotSpot2.features = data.features
        })
        .catch((err) => {
          console.error(err)
        })
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
            self.clusterProv.visible = false
            setTimeout(function () {
              self.clusterKabKota.data = data
              self.clusterKabKota.visible = true
            }, 1000)
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
    async loadAqms() {
      const url = !process.server ? `/v1/aqms` : `/api/aqms`

      await this.$axios
        .$get(url)
        .then(({ data }) => {
          this.aqmsData = data
        })
        .catch((err) => {})
        .finally(() => {})
    },
    async cmbProvs() {
      const url = !process.server
        ? `/v1/getProvinsi/all`
        : `/api/getProvinsi/all`

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
          this.firstLoad = false
        })
    },
    async cmbKotaKab() {
      const url = !process.server
        ? `/v1/getKotaKab/${this.cariProvinsi}`
        : `/api/getKotaKab/${this.cariProvinsi}`

      this.loading = true
      this.clusterKabKota.visible = false

      // Check Gambut
      this.clusterGambutVisible = false
      let ckGambut = this.chkGambut.indexOf('gambut1')
      if (ckGambut < 0) {
        this.chkGambut.splice(ckGambut, 1)
      }

      // Check Gambut
      this.clusterMoratoriumVisible = false
      let ckMoratorium = this.chkMoratorium.indexOf('moratorium1')
      if (ckMoratorium < 0) {
        this.chkMoratorium.splice(ckMoratorium, 1)
      }

      await this.$axios
        .$get(url)
        .then((data) => {
          const datas = [
            {
              id: null,
              nama: 'Pilih Kota/Kabupaten',
            },
          ]

          this.$refs.mapSipongi.mapObject.setView(
            [data.prov.center[1], data.prov.center[0]],
            10
          )
          let self = this
          //self.clusterKabKota.visible = false

          Array.prototype.push.apply(datas, data.kotakab)
          this.kotakabs = datas
        })
        .catch((err) => {})
        .finally(() => {
          this.loading = false
        })
    },

    checkGambut(val) {
      return this.chkGambut.indexOf(val) >= 0
    },
    async changeGambut(val) {
      let index = this.chkGambut.indexOf(val)
      if (this.cariProvinsi === null || this.cariProvinsi == '') {
        alert('Provinsi belum dipilih')
        return false
      } else if (index < 0) {
        this.chkGambut.push(val)

        const url = !process.server
          ? `/v1/getDataGambut/${this.cariProvinsi}`
          : `/api/getDataGambut/${this.cariProvinsi}`

        this.loading = true

        await this.$axios
          .$get(url)
          .then((data) => {
            this.$refs.mapSipongi.mapObject.setView(
              [data.prov.center[1], data.prov.center[0]],
              8
            )

            this.clusterKabKota.visible = false
            this.clusterGambutVisible = true
            this.clusterGambut.features = data.kabkota
          })
          .catch((err) => {})
          .finally(() => {
            this.loading = false
          })
      } else {
        this.chkGambut.splice(index, 1)
        this.clusterGambutVisible = false
      }
    },
    checkMoratorium(val) {
      return this.chkMoratorium.indexOf(val) >= 0
    },
    async changeMoratorium(val) {
      let index = this.chkMoratorium.indexOf(val)
      if (this.cariProvinsi === null || this.cariProvinsi == '') {
        alert('Provinsi belum dipilih')
        return false
      } else if (index < 0) {
        this.chkMoratorium.push(val)

        const url = !process.server
          ? `/v1/getDataMoratorium/${this.cariProvinsi}`
          : `/api/getDataMoratorium/${this.cariProvinsi}`

        this.loading = true

        await this.$axios
          .$get(url)
          .then((data) => {
            this.$refs.mapSipongi.mapObject.setView(
              [data.prov.center[1], data.prov.center[0]],
              8
            )

            this.clusterKabKota.visible = false
            this.clusterMoratoriumVisible = true
            this.clusterMoratorium.features = data.kabkota
          })
          .catch((err) => {})
          .finally(() => {
            this.loading = false
          })
      } else {
        this.chkMoratorium.splice(index, 1)
        this.clusterMoratoriumVisible = false
      }
    },

    async loadPemadaman() {
      const url = !process.server ? `/v1/listGaleri` : `/api/listGaleri`

      const params = {
        tipe: this.optionsGal.tipe,
        page: this.optionsGal.page,
        per_page: this.optionsGal.per_page,
      }

      await this.$axios
        .$get(url, {
          params,
        })
        .then((res) => {
          this.pemadamans = this.pemadamans.concat(res.data)
          this.loadMoreGal = !!res.links.next
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
        .finally(async () => {})
    },

    async loadLain() {
      const url = !process.server ? `/v1/listGaleri` : `/api/listGaleri`

      const params = {
        tipe: this.optionsLain.tipe,
        page: this.optionsLain.page,
        per_page: this.optionsLain.per_page,
      }

      await this.$axios
        .$get(url, {
          params,
        })
        .then((res) => {
          this.lains = this.lains.concat(res.data)
          this.loadMoreLain = !!res.links.next
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
        .finally(async () => {})
    },

    async loadBerita() {
      const url = !process.server ? `/v1/listBerita` : `/api/listBerita`

      const params = {
        direction: this.options.direction,
        sortBy: this.options.sortBy,
        page: this.options.page,
        per_page: this.options.per_page,
      }

      await this.$axios
        .$get(url, {
          params,
        })
        .then((res) => {
          this.beritas = this.beritas.concat(res.data)
          this.loadMore = !!res.links.next
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
        .finally(async () => {})
    },

    async loadPerundangan() {
      const url = !process.server ? `/v1/listDokumen` : `/api/listDokumen`

      const params = {
        direction: this.options.direction,
        sortBy: this.options.sortBy,
        page: this.options.page,
        per_page: this.options.per_page,
      }

      await this.$axios
        .$get(url, {
          params,
        })
        .then((res) => {
          this.dokumen = this.dokumen.concat(res.data)
          this.loadMorePerundangan = !!res.links.next
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

      const urlPerpu = !process.server ? `/v1/listPerpu` : `/api/listPerpu`

      await this.$axios
        .$get(urlPerpu)
        .then((res) => {
          this.kategories = res.data
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

      // Laporan Harian
      const urlLaporan = !process.server
        ? `/v1/data/laporan-harian`
        : `/api/data/laporan-harian`

      const paramsLaporan = {
        direction: this.options.direction,
        sortBy: this.options.sortBy,
        page: this.options.page,
        per_page: this.options.per_page,
      }

      await this.$axios
        .$get(urlLaporan, {
          paramsLaporan,
        })
        .then((res) => {
          this.laporanHarian = this.laporanHarian.concat(res.data)
          this.loadMoreLaporan = !!res.links.next
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

      // Direktorat PKHL
      const urlPKHL = !process.server
        ? `/v1/data/direktorat-pkhl`
        : `/api/data/direktorat-pkhl`
      await this.$axios
        .$get(urlPKHL)
        .then((res) => {
          this.direktoratPKHL = res
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

      // Struktur Organisasi
      const urlOrg = !process.server
        ? `/v1/data/struktur-organisasi`
        : `/api/data/struktur-organisasi`
      await this.$axios
        .$get(urlOrg)
        .then((res) => {
          this.strukturOrganisasi = res
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

      // Manggala Agni Profil
      const urlProfil = !process.server
        ? `/v1/data/profil`
        : `/api/data/profil`
      await this.$axios
        .$get(urlProfil)
        .then((res) => {
          this.profil = res.data
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

      // Manggala Agni Sarpas
      const urlSarpras = !process.server
        ? `/v1/data/sarpras`
        : `/api/data/sarpras`
      await this.$axios
        .$get(urlSarpras)
        .then((res) => {
          this.sarpras = res
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

      // Manggala Agni Daerah Operasional
      const urlDaerah = !process.server
        ? `/v1/data/daerah`
        : `/api/data/daerah`
      // const urlDaerah = 'http://127.0.0.1:8081/api/data/daerah'
      await this.$axios
        .$get(urlDaerah)
        .then((res) => {
          this.daerah = res
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

      // Disclaimer
      const urlDisclaimer = !process.server
        ? `/v1/data/disclaimer`
        : `/api/data/disclaimer`

      await this.$axios
        .$get(urlDisclaimer)
        .then((res) => {
          this.disclaimer = res
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
    },

    async loadFdrs() {
      // const url = !process.server ? `/v1/fdrs/getData` : `/api/fdrs/getData`
      const url = `http://139.99.52.109:8285/api/fdrs/data`

      const params = {
        index: this.option.index,
        wilayah: this.selectedWilayah,
        hari: this.selectedHari,
      }

      await this.$axios
        .$get(url, {
          params,
        })
        .then((res) => {
          this.dataFdrs = res.data
          this.opsiWilayah = res.option.wilayah
          this.opsiHari = res.option.hari
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
        .finally(async () => {})
    },

    async filter() {
      this.selectedWilayah = this.defaultWilayah
      this.selectedHari = this.defaultHari
      await this.loadFdrs()
    },

    download(link, wilayah) {
      const filename = wilayah + '.png'

      this.$axios({
        url: link,
        method: 'GET',
        responseType: 'blob',
      }).then((response) => {
        var fileURL = window.URL.createObjectURL(new Blob([response.data]))
        var fileLink = document.createElement('a')

        fileLink.href = fileURL
        fileLink.setAttribute('download', filename)
        document.body.appendChild(fileLink)

        fileLink.click()
      })
    },

    async loadMoreDataGal() {
      this.optionsGal.page++
      await this.loadPemadaman()
    },
    async loadMoreDataLain() {
      this.optionsLain.page++
      await this.loadLain()
    },
    async loadMoreData() {
      this.options.page++
      await this.loadBerita()
    },

    async loadMoreDataPerundangan() {
      this.options.page++
      await this.loadPerundangan()
    },

    async loadMoreDataLaporan() {
      this.optionsLaporan.page++
      await this.$fetch()
    },

    toggleOpen() {
      var legend = document.querySelector('.legend-wrap')

      legend.classList.toggle('open')
    },

    openLegend() {
      var legend = document.querySelector('.legend-wrap')
      var link4 = document.querySelector('.link-four')
      var map = document.querySelector('.map-wrap')

      if (
        map.classList.contains('openSide') &&
        legend.classList.contains('open')
      ) {
        map.classList.remove('big')
        legend.classList.toggle('open')
        link4.classList.toggle('active')
      } else {
        legend.classList.toggle('open')
        link4.classList.toggle('active')
        map.classList.toggle('openSide')
      }
    },
  },

  mounted() {
    this.$nextTick(function () {
      this.visitor()
    })
  },
}
</script>

<style lang="scss">
.marqueeBottomMobile {
  bottom: 45px;
}
.marqueeBottom {
  bottom: 0px;
}

.high {
  background-color: #ff1415 !important;
  color: white !important;
}

.medium {
  background-color: #ffbf00 !important;
  color: white !important;
}

.gambut {
  background-color: #00807f !important;
  color: white !important;
}

.moratorium {
  background-color: #a06b8b !important;
  color: white !important;
}

.sidebar-map .sidebar-slide .content-list.titik {
  max-height: calc(100vh - 490px) !important;
}

.leaflet-fade-anim .leaflet-tile,
.leaflet-zoom-anim .leaflet-zoom-animated {
  will-change: auto !important;
}

.btn-group-sm > .btn,
.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 11px;
  line-height: 1.5;
  border-radius: 0.2rem;
  color: rgba(0, 0, 0, 0.6);
}
.nav-link {
  text-align: center;
  color: rgba(0, 0, 0, 0.6);
  transition: 0.1s;
  &:hover {
    background-color: #009c3a;
    color: white;
  }
}
.modal-body {
  max-height: calc(100% - 120px);
  overflow-y: scroll;
}
</style>
