<template>
  <div>
    <div class="sidebar-map">
      <b-link to="/" class="logo">
        <img src="/logo.svg" alt="" />
        <img src="/logo-text.svg" alt="" />
      </b-link>
      <b-link class="main its-new link-one" @click="openSidebarOne">
        <div class="wrap">
          <div class="image d-md-none d-block">
            <img src="/fire.svg" alt="" />
            <span class="notif">{{ totalHotspot }}</span>
          </div>
          <h6>Titik<br />Panas</h6>
        </div>
      </b-link>
      <b-link class="main link-two" @click="openSidebarTwo">
        <div class="wrap">
          <div class="image d-md-none d-block">
            <img src="/fire-extinguisher.svg" alt="" />
          </div>
          <h6>Kegiatan Pemadaman</h6>
        </div>
      </b-link>
      <b-link class="main link-three" @click="openSidebarThree">
        <div class="wrap">
          <div class="image d-md-none d-block">
            <img src="/cari.svg" alt="" />
          </div>
          <h6>Cari</h6>
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
      <b-link 
        href="http://sipongi.menlhk.go.id/laporan_dalkarhutla_mitra/app2020/"
        target="_blank" 
        class="main d-md-block d-none"
      >
        <h6>Luas Karthutla</h6>
      </b-link>
      <b-link 
        href=""
        target="_blank" 
        class="main d-md-block d-none"
      >
        <h6>FDRS</h6>
      </b-link>
      <b-link 
        to="/grafik"
        class="main d-md-block d-none"
      >
        <h6>Data dan Grafik</h6>
      </b-link>
      <b-link 
        href="/publikasi"
        class="main d-md-block d-none"
      >
        <h6>Publikasi</h6>
      </b-link>
      <b-link 
        href="http://sipongi.menlhk.go.id/laporan_dalkarhutla_mitra/app2020/"
        target="_blank" 
        class="main d-md-block d-none"
      >
        <h6>Pelaporan Hartkula</h6>
      </b-link>
      <b-link 
        href=""
        class="main d-md-block d-none"
      >
        <h6>Buat Peta Rawan</h6>
      </b-link>
      <b-link 
        href=""
        class="main d-md-block d-none"
      >
        <h6>Prediksi</h6>
      </b-link>
      <b-link 
        href="/tentang"
        class="main d-md-block d-none"
      >
        <h6>Tentang Kami</h6>
      </b-link>
      <b-link 
        v-b-modal.modal-disclaimer
        class="main d-md-block d-none"
      >
        <h6>Disclaimer</h6>
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
          <no-ssr>
            <date-picker
              id="published_at"
              v-model="titikDate"
              type="date"
              format="dddd, DD MMMM YYYY"
              placeholder="Kamis, 27 Agustus 2020"
            ></date-picker>
          </no-ssr>
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

        <div class="content-list titik">
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

        <b-link to="" class="pdf">
          <img src="/pdf.svg" alt="" />
          <span>Download PDF</span>
        </b-link>
      </div>

      <div class="sidebar-slide sidebar-two big">
        <div class="content-head">
          <b-link class="close" @click="openSidebarTwo"
            ><i class="fas fa-times"></i
          ></b-link>
          <h6>Kegiatan Pemadaman</h6>
          <p>Informasi seputar kegiatan pemadaman</p>
        </div>

        <div class="content-list">
          <b-row>
            <b-col cols="6" v-for="blog in pemadamans" :key="blog.slug">
              <b-link :to="'/galeri/' + blog.slug" class="blog-item">
                <div
                  class="image"
                  :style="{ backgroundImage: `url(${blog.detail.image_url})` }"
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
                >Lihat lebih banyak</b-button
              >
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
      <b-link 
        href="https://wa.me/+6281316235000"
        target="_blank"
        class="call"
      >
        <img src="/phone-red.svg" alt="" class="mr-1 inner" />
        Call SiPongi+
      </b-link>
      <b-link to="/" class="logo-responsive">
        <img src="/logo.svg" alt="" />
        <img src="/logo-text.svg" alt="" />
      </b-link>
      <marquee behavior="" direction=""
        >Langit biru tanpa asap, STOP kebakaran hutan dan lahan</marquee
      >
      <div :class="['legend-wrap',  {'open' : openedLegend}]">
        <b-link class="legend-head" @click="toggleOpen">
          <h6 class="d-md-none d-block">Legenda</h6>
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
              <h6>Satelit TERRA/AQUA</h6>
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
              <h6>Satelit SNPP</h6>
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
              <h6>Satelit NOAA20</h6>
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
              <h6>Satelit LANDSAT8</h6>
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
          <div class="filter-wrap">
            <div class="select-wrap">
              <label class="mr-sm-2">Dengan periode data</label>
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
              <label class="mr-sm-2">Dengan tingkat kepercayaan data</label>
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
              [-85, -85],
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
    <b-modal id="modal-disclaimer" body-class="modal-disclaimer" size="lg" hide-footer title="Disclaimer">
      <div class="d-block">
        <p class="text-left">Pengunaan anda atas setiap bagian dari Aplikasi ("Situs") online (SiPongi) ini atau informasi atau data yang disediakan di Situs ini tunduk pada syarat dan kententuan yang tercantum sebagai berikut :</p>
        <p class="text-left mb-1">Pengunaan Terlarang</p>
        <ol>
          <li class="text-left">Sebagai ketentuan dari pengunaan anda dari Situs ini, anda menjamin kepada Kementerian LHK bahwa anda hanya akan menggunakan Informasi yang terkandung atau terhasilkan dari Situs ini untuk tujuan identifikasi dan pemantauan potensi kebakaran.</li>
          <li class="text-left">Anda setuju untuk mematuhi semua peraturan lokal mengenai tata-perilaku online dalam wilayah hukum dimana anda mengunjungi situs ini.</li>
        </ol>
        <p class="text-left mb-1">Tanggung Jawab</p>
        <ol start="3">
          <li class="text-left">
            Anda setuju untuk tidak terlibat dalam pengunaan situs ini secara ilegal, yang meliputi, tapi tidak terbatas pada:
            <ol class="lower-alpha">
              <li>pengunanaan Informasi tersedia untuk pengunduh dari Situs untuk tujuan selain identifikasi dan pemantauan potensi kebakaran;</li>
              <li>secara tidak sah, memperoleh akses ke Situs tanpa persetujuan tertulis dari Kementerian LHK atau mitra yang ditunjuk;</li>
              <li>menganggu atau mencoba untuk mendapatkan akses tidak sah ke Situs atau jaringan komputer lainnya;</li>
              <li>mentransfer, menetapkan, atau membuat terakses publik username dan password yang diberikan kepada Anda untuk mengakses Situs; atau</li>
              <li>menyebarluaskan, menyimpan, atau mengirim virus, trojan horse, atau kode dan program berbahaya lainnya.</li>
            </ol>
          </li>
        </ol>
        <p class="text-left mb-1">Pernyataan</p>
        <ol start="4">
          <li class="text-left">Anda setuju bahwa pengunaan Situs ini dengan resiko anda sendiri. Situs ini dan perangkat lunaknya, kumpulan data dan konten lainnya, termasuk konten dari pihak ketiga yang tersedia dalam hubungan dengan atau melaui Situs, diberikan tanpa jaminan atau representasi apapun, baik tersurat maupun tersirat. Oleh karena itu, Kementerian LHK tidak bertanggung jawab atas kehilangan atau kerusakan apapun yang disebabkan oleh penggunaan Situs.</li>
        </ol>
        <p class="text-left mb-1">Tidak Ada Jaminan</p>
        <ol start="5">
          <li class="text-left">Sejauh sesuai diizinkan hukum yang berlaku, Kementerian LHK menolak semua jaminan, undang-undang, yang ternyatakan atau tersirat, termasuk, tapi tidak dibatasi olehnya, jaminan tersirat, kesesuaian untuk tujuan tertentu, gelar, dan hak kepemilikian yang tidak melanggar. Tidak ada saran atau informasi, baik lisan maupun tulisan, yang diperoleh anda dari Kementerian LHK atau melalui Situs, akan membuat jaminan yang tidak secara jelas dinyatakan di sini.</li>
        </ol>
        <p class="text-left mb-1">Pengakuan</p>
        <ol start="6">
          <li class="text-left">
            Situs ini memperbolehkan anda untuk mengakses dan melihat berbagai konten, termasuk tetapi tidak terbatas pada, data peta dan medan, dan informasi terkait lainnya yang dipersiapkan oleh Kementerian LHK dan mitranya. Sehubungan dengan semua konten yang disediakan oleh Situs ini, anda memahami dan menyetujui berikut bahwa:
            <ol class="lower-alpha">
              <li>bahwa data peta dan konten terkait disediakan untuk tujuan informasi saja, dan Kementerian LHK tidak memberikan jaminan mengenai hal yang sama;</li>
              <li>informasi di Situs mungkin saja tidak diperbarui secara real time, dan oleh karena itu hasil peta mungkin tidak akurat; dan</li>
              <li>Kementerian LHK tidak bertanggung jawab atas penggunaan atau tindakan anda dalam ketergantungan pada informasi yang terkandung di situs ini, oleh karena itu, anda sebaiknya menggunakan pertimbangan dalam penggunaan anda pada semua konten yang disediakan oleh atau melalui situs, termasuk tetapi tidak terbatasi pada, mencari vertifikasi dari informasi faktual yang Situs beri.</li>
            </ol>
          </li>
        </ol>
        <p class="text-left mb-1">Reservasi Hak</p>
        <ol start="7">
          <li class="text-left">Kementerian LHK merupakan pemilik semua hak yang tidak dinyatakan kepada Anda. Penggunaan situs, termasuk pengunaan perangkat lunak, layanan, peta, dan konten lainnya, hanya dilisensikan kepada anda dan lisensi tersebut tidak dapat dipindahtangankan. Dalam kondisi apapun,Anda ditidakperbolehkan untuk menyalin, meminjam, menyewa, time-sharing, mensublisensikan, menetapkan, mentransfer, menjual atau membuang perangkat lunak, peta, atau konten lainnya Kementerian LHK secara sementara atau permanen kecuali yang tertera dalam perjanjian.</li>
        </ol>
        <p class="text-left mb-1">Ketentuan Tambahan</p>
        <ol start="8">
          <li class="text-left">Perjanjian ini akan diatur oleh dan ditafsirkan sesuai dengen hukum yang berlaku di wilayah Republik Indonesia. Anda setuju bahwa tindakan hukum atau ekuitas yang timbul dari atau terkait dengan perjanjian ini akan diajukan hanya dalam pengadilan Republik Indonesia.</li>
          <li class="text-left">Kementerian LHK berhak, atas kebijakannya sendiri, untuk mengubah, menambah, atau menghapus bagian-bagian dari atau mengubah Ketentuan Layanan ini sewaktu-waktu tanpa pemberitahuan kepada anda dengan memasang Ketentuan Situs yang terubah. Semua perubahan akan berlaku segera setelah posting. Silakan periksa Ketentuan ini secara berkala untuk perubahan. Penerusan penggunaan anda dari layanan ini setelah posting perubahan merupakan penerimaan mengikat anda dari perubahan tersebut.</li>
          <li class="text-left">Perjanjian ini merupakan seluruh perjanjian antara para pihak dan menggantikan perjanjian sebelumnya atau kontemporer yang tertulis atau lisan atau pemahaman terhadap materi pelajaran tersebut.</li>
        </ol>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'Peta',
  data() {
    return {
      openedLegend: false,
      titikDate: '',
      browser: process.browser,
      centerMap: [-2.548926, 118.0148634],
      periodeData: 24,
      trustData: ['high'],
      zoom: 5,
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
      aqmsData: null,
      aqmsShow: false,
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
      loadMoreGal: false,
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
    aqmsGreenIcon() {
      let icon = () => {}
      if (process.browser) icon = this.$L.icon
      return icon({
        iconUrl: '/marker-unit.svg',
        iconSize: [40, 40],
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
  },
  async created() {
    await this.loadHotSpot()
    if (this.firstLoad) {
      await this.cmbProvs()
    }

    await this.loadPemadaman()
    await this.loadAqms()
    await this.loadWind()
    this.openLeg()

    
    window.addEventListener('resize', this.openLeg)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.openLeg)
  },
  methods: {
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
    async loadPemadaman() {
      this.loading = true
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
        .finally(async () => {
          this.loading = false
        })
    },
    async loadMoreDataGal() {
      this.optionsGal.page++
      await this.loadPemadaman()
    },
    toggleOpen() {
      var legend = document.querySelector('.legend-wrap')

      legend.classList.toggle('open')
    },
    openSidebarOne() {
      var legend = document.querySelector('.legend-wrap')
      var sidebar = document.querySelector('.sidebar-one')
      var sidebar2 = document.querySelector('.sidebar-two')
      var sidebar3 = document.querySelector('.sidebar-three')
      var link = document.querySelector('.link-one')
      var link2 = document.querySelector('.link-two')
      var link3 = document.querySelector('.link-three')
      var link4 = document.querySelector('.link-four')
      var map = document.querySelector('.map-wrap')

      if (
        map.classList.contains('openSide') &&
        (sidebar2.classList.contains('opened') ||
          sidebar3.classList.contains('opened') ||
          legend.classList.contains('open'))
      ) {
        sidebar2.classList.remove('opened')
        sidebar3.classList.remove('opened')
        link2.classList.remove('active')
        link3.classList.remove('active')
        map.classList.remove('big')
        link.classList.add('active')
        sidebar.classList.add('opened')
        if (window.innerWidth < 767) {
          legend.classList.remove('open')
          link4.classList.remove('active')
        }
      } else {
        sidebar.classList.toggle('opened')
        map.classList.toggle('openSide')
        link.classList.toggle('active')
      }
    },
    openSidebarTwo() {
      var legend = document.querySelector('.legend-wrap')
      var sidebar = document.querySelector('.sidebar-one')
      var sidebar2 = document.querySelector('.sidebar-two')
      var sidebar3 = document.querySelector('.sidebar-three')
      var link = document.querySelector('.link-one')
      var link2 = document.querySelector('.link-two')
      var link3 = document.querySelector('.link-three')
      var link4 = document.querySelector('.link-four')
      var map = document.querySelector('.map-wrap')

      if (
        map.classList.contains('openSide') &&
        (sidebar.classList.contains('opened') ||
          sidebar3.classList.contains('opened') ||
          legend.classList.contains('open'))
      ) {
        sidebar.classList.remove('opened')
        sidebar3.classList.remove('opened')
        link.classList.remove('active')
        link3.classList.remove('active')
        map.classList.add('big')
        link2.classList.add('active')
        sidebar2.classList.add('opened')
        if (window.innerWidth < 767) {
          legend.classList.remove('open')
          link4.classList.remove('active')
        }
      } else {
        sidebar2.classList.toggle('opened')
        map.classList.toggle('openSide')
        map.classList.toggle('big')
        link2.classList.toggle('active')
      }
    },
    openSidebarThree() {
      var legend = document.querySelector('.legend-wrap')
      var sidebar = document.querySelector('.sidebar-one')
      var sidebar2 = document.querySelector('.sidebar-two')
      var sidebar3 = document.querySelector('.sidebar-three')
      var link = document.querySelector('.link-one')
      var link2 = document.querySelector('.link-two')
      var link3 = document.querySelector('.link-three')
      var link4 = document.querySelector('.link-four')
      var map = document.querySelector('.map-wrap')

      if (
        map.classList.contains('openSide') &&
        (sidebar.classList.contains('opened') ||
          sidebar2.classList.contains('opened') ||
          legend.classList.contains('open'))
      ) {
        sidebar.classList.remove('opened')
        sidebar2.classList.remove('opened')
        link.classList.remove('active')
        link2.classList.remove('active')
        link3.classList.add('active')
        map.classList.remove('big')
        sidebar3.classList.add('opened')
        if (window.innerWidth < 767) {
          legend.classList.remove('open')
          link4.classList.remove('active')
        }
      } else {
        sidebar3.classList.toggle('opened')
        map.classList.toggle('openSide')
        link3.classList.toggle('active')
      }
    },
    openLegend() {
      var legend = document.querySelector('.legend-wrap')
      var sidebar = document.querySelector('.sidebar-one')
      var sidebar2 = document.querySelector('.sidebar-two')
      var sidebar3 = document.querySelector('.sidebar-three')
      var link = document.querySelector('.link-one')
      var link2 = document.querySelector('.link-two')
      var link3 = document.querySelector('.link-three')
      var link4 = document.querySelector('.link-four')
      var map = document.querySelector('.map-wrap')

      if (
        map.classList.contains('openSide') &&
        (sidebar.classList.contains('opened') ||
          sidebar2.classList.contains('opened') ||
          sidebar3.classList.contains('opened'))
      ) {
        sidebar.classList.remove('opened')
        sidebar2.classList.remove('opened')
        sidebar3.classList.remove('opened')
        link.classList.remove('active')
        link2.classList.remove('active')
        link3.classList.remove('active')
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
}
</script>
<style lang="css">
.leaflet-fade-anim .leaflet-tile,
.leaflet-zoom-anim .leaflet-zoom-animated {
  will-change: auto !important;
}
</style>
