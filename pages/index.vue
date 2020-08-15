<template>
  <div>
    <div class="hero" style="background-image: url('/hero.svg')">
      <b-container>
        <b-row>
          <b-col md="7">
            <h2>Pemantauan Kebakaran Hutan dan Lahan</h2>
            <h6>Sipongi+ menyajikan data kebakaran hutan dan lahan terkini yang dapat digunakan semua orang di mana saja untuk melindungi hutan dengan lebih baik.</h6>
            <b-link to="/peta" class="btn btn-secondary">
               Jelajahi peringatan kebakaran di peta
               <img src="/mini_arrow_right.svg" alt="">
            </b-link>
          </b-col>
        </b-row>
      </b-container>
      
      <a v-scroll-to="'#stat'" to="#" class="scroll">
        <img src="/arrow-white.svg" alt="angle-bot-white" />
      </a>
    </div>

    <div class="stat" id="stat">
      <b-container>
        <b-row>
          <b-col md="4">
            <div class="stat-item">
              <img src="/forest-fire.svg" alt="">
              <h2>135</h2>
              <h5>Peringatan Kebakaran</h5>
              <span>2 minggu terakhir</span>
            </div>
          </b-col>
          <b-col md="4">
            <div class="stat-item">
              <img src="/box-fire.svg" alt="">
              <h2>43K</h2>
              <h5>Hektar Hutan & Lahan</h5>
              <span>Terbakar sepanjang tahun 2020 (juli)</span>
            </div>
          </b-col>
          <b-col md="4">
            <div class="stat-item">
              <img src="/world.svg" alt="">
              <h2>12</h2>
              <h5>Provinsi</h5>
              <span>Penyebaran titik panas 2 minggu terakhir</span>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="info-wrap">
      <b-container>
        <div class="info-item">
          <b-row class="align-items-center">
            <b-col md="6" order-md="2">
              <div class="info-image" style="background-image: url('/mini-map.svg')"></div>
            </b-col> 
            <b-col md="6" order-md="1">
              <div class="info-text">
                <h3>Lihat peringatan kebakaran di peta</h3>
                <h6>Lihat peringatan kebakaran di sekitarmu, data diperbarui setiap hari kamu dan kamu dapat mengaksesnya dimanapun</h6>
                <b-link to="/peta" class="btn btn-secondary">
                  Lihat dipeta
                <img src="/mini_arrow_right.svg" alt="">
                </b-link>
              </div>
            </b-col> 
          </b-row>
          <img src="/aksen.svg" alt="" class="aksen right">
        </div>
        <div class="info-item">
          <b-row class="align-items-center">
            <b-col md="6">
              <div class="info-image" style="background-image: url('/fireman.svg')"></div>
            </b-col> 
            <b-col md="6">
              <div class="info-text">
                <h3>Dapatkan info kegiatan pemadamam</h3>
                <h6>Dapatkan berbagai info terbaru seputar pemadaman hutan yang telah dilakukan oleh tim sipongi</h6>
                <b-link to="/blog" class="btn btn-secondary">
                  Dapatkan info terbaru
                <img src="/mini_arrow_right.svg" alt="">
                </b-link>
              </div>
            </b-col> 
          </b-row>
          <img src="/aksen.svg" alt="" class="aksen left">
        </div>
        <div class="info-item">
          <b-row class="align-items-center">
            <b-col md="6" order-md="2">
              <div class="info-image" style="background-image: url('/aware.svg')"></div>
            </b-col> 
            <b-col md="6" order-md="1">
              <div class="info-text">
                <h3>Lihat peringatan kebakaran secara kumulatif</h3>
                <h6>Bandingkan dengan data kumulatif tahun tahun sebelumnya</h6>
                <b-link to="/grafik" class="btn btn-secondary">
                  Cari tahu lebih
                <img src="/mini_arrow_right.svg" alt="">
                </b-link>
              </div>
            </b-col> 
          </b-row>
          <img src="/aksen.svg" alt="" class="aksen right">
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'front',

}
</script>
