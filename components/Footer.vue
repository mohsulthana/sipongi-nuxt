<template>
  <footer>
    <div class="footer-wrap">
      <b-container>
        <b-row>
          <b-col md="5">
            <div class="logo-footer">
              <img src="/kementerian-logo.svg" />
              <h6>Kementerian Lingkungan Hidup dan Kehutanan</h6>
            </div>
            <p>
              Gedung Pusat Kehutanan Manggala Wanabakti Blok VII Lt. 13 <br />Jl.
              Jend. Gatot Subroto Jakarta 10270
            </p>
            <p>
              <i class="far fa-envelope"></i> posko.karhutla@menlhk.go.id<br />
              <i class="fas fa-phone"></i> 021-5704618
            </p>
          </b-col>
          <b-col md="2">
            <h6 class="sec-title">Link Terkait</h6>
            <ul>
              <li>
                <b-link href="http://www.menlhk.go.id/" class="w-logo"
                  ><img src="/kementerian-logo.svg" alt="" /> KLHK</b-link
                >
              </li>
              <li>
                <b-link href="http://ditjenppi.menlhk.go.id/" class="w-logo"
                  ><img src="/kementerian-logo.svg" alt="" /> DitjenPPI</b-link
                >
              </li>
              <li>
                <b-link href="http://bmkg.go.id/" class="w-logo"
                  ><img src="/bmkg.svg" alt="" /> BMKG</b-link
                >
              </li>
              <li>
                <b-link href="http://lapan.go.id/" class="w-logo"
                  ><img src="/lapan.svg" alt="" /> LAPAN</b-link
                >
              </li>
              <li>
                <b-link href="http://bnpb.go.id/" class="w-logo"
                  ><img src="/bnpb.svg" alt="" /> BNPB</b-link
                >
              </li>
            </ul>
          </b-col>
          <b-col md="2">
            <h6 class="sec-title">Menu Lainya</h6>
            <ul>
              <li><b-link to="/publikasi">Publikasi</b-link></li>
              <li><b-link to="/peta">Sebaran Titik Panas</b-link></li>
              <li><b-link to="/grafik">Luas Kebakaran</b-link></li>
              <li><b-link to="/galeri">Galeri Foto</b-link></li>
            </ul>
          </b-col>
          <b-col md="2">
            <h6 class="sec-title">Sosial Media</h6>
            <b-link
              href="https://www.facebook.com/pages/SiPongi/1021459491201560"
              target="_blank"
              class="socmed"
              ><i class="fab fa-facebook-f"></i
            ></b-link>
            <b-link
              href="https://twitter.com/sipongi_klhk"
              target="_blank"
              class="socmed"
              ><i class="fab fa-twitter"></i
            ></b-link>
            <b-link
              href="https://www.instagram.com/sipongi_klhk/"
              target="_blank"
              class="socmed"
              ><i class="fab fa-instagram"></i
            ></b-link>
            <b-link
            	<p></p>
            </b-link>
            <b-link
            id="counter"
            		<p>Visitor Counters</p><h6 class="sec-title">844.926</h6> 
            </b-link>
            
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <p class="copyright">
              Copyright © 2020. Kementerian Lingkungan Hidup dan Kehutanan
              Republik Indonesia.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

