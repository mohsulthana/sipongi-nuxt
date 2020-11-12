<template>
  <div class="inner-page">
    <div class="page-desc">
      <b-container>
        <b-row>
          <b-col md="7">
            <h3>Tentang Sipongi+</h3>
            <h6>
              SiPongi bertujuan untuk mengantisipasi dan melakukan upaya
              pencegahan kebakaran hutan dengan lebih cepat sehingga bencana
              tersebut dapat dikurangi.
            </h6>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="tentang-wrap">
      <b-container>
        <b-row>
          <b-col md="12">
            <b-tabs>
              <!-- Direktorat PKHL -->
              <b-tab title="Direktorat PKHL" active>
                <b-row>
                  <b-col md="4" order-md="2">
                    <img
                      :src="direktoratPKHL.logo_url"
                      alt=""
                      class="img-fluid img-logo"
                    />
                  </b-col>
                  <b-col md="8" order-md="1" v-html="direktoratPKHL.text">
                    
                  </b-col>
                </b-row>
              </b-tab>
              <!-- Manggala Agni -->
              <b-tab title="Manggala Agni">
                <b-row>
                  <b-col md="8">
                    <div class="nav-agni">
                      <b-link @click="showProfile" :class="{ 'active': profile }">Profil</b-link>
                      <b-link @click="showDaerahOp" :class="{ 'active': daerahOp }">Daerah Operasional</b-link>
                      <b-link @click="showSarana" :class="{ 'active': sarana }">Sarana & Prasarana</b-link>
                    </div>
                  </b-col>
                  <b-col lg="12">
                    <!-- Profil -->
                    <b-row v-if="profile">
                      <b-col lg="4" order-lg="2">
                        <div :class="[{ 'toBot' : scrolledToBottom }, { 'scrolling': isScroll  }, 'nav-content']">
                          <h3>Profil</h3>
                          <b-link v-for="prof in profil" :key="prof.id" v-scroll-to="'#data'+prof.urutan" to="#">{{prof.title}}</b-link>
                        </div>
                      </b-col>
                      <b-col lg="8" order-lg="1">
                        <h5 class="title">
                          Profil
                        </h5>
                        <div v-for="prof in profil" :key="prof.id">
                          <h6 class="subtitle" :id="'data'+prof.urutan">{{prof.title}}</h6>
                          <img v-if="prof.image !== null" :src="prof.image_url" alt="" class="img-fluid mb-3">
                          <div v-html="prof.text"></div>
                        </div>
                      </b-col>
                    </b-row>
                    <!-- Daerah Operasi -->
                    <b-row v-if="daerahOp">
                      <b-col md="8">
                        <h6 class="title">
                          Daerah Operasional
                        </h6>
                        <div class="daerah-item" v-for="(d,i) in daerah" :key="i">
                          <!-- <h5>Sumatra Utara-01</h5> -->
                          <h5>{{d.daerah}}</h5>
                          <b-row v-for="(k,j) in d.kota" :key="j">
                            <b-col md="6">
                              <p class="heading">{{k.daerah}}</p>
                              <span class="alamat">{{k.alamat}}</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu</span>
                              <span class="count">{{k.jumlah_regu}}</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Anggota </span>
                              <span class="count">{{k.jumlah_anggota}}</span>
                            </b-col>
                          </b-row>
                        </div>
                      </b-col>
                    </b-row>
                    <!-- Sarana & Prasarana -->
                    <b-row v-if="sarana">
                      <b-col md="12" v-html="sarpras.text">
                        Sarana
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
              </b-tab>
              <!-- Struktur Organisasi -->
              <b-tab title="Struktur Organisasi">
                <b-row>
                  <b-col md="8"> 
                    <img :src="strukturOrganisasi.image_url" alt="" class="img-fluid">
                  </b-col>
                </b-row>
              </b-tab>
            </b-tabs>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'front',
  async fetch() {
    // Direktorat PKHL
    const urlPKHL = !process.server ? `/v1/data/direktorat-pkhl` : `/api/data/direktorat-pkhl`
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
    const urlOrg = !process.server ? `/v1/data/struktur-organisasi` : `/api/data/struktur-organisasi`
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
    const urlProfil = !process.server ? `/v1/data/profil` : `/api/data/profil`
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
    const urlSarpras = !process.server ? `/v1/data/sarpras` : `/api/data/sarpras`
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
    const urlDaerah = !process.server ? `/v1/data/daerah` : `/api/data/daerah`
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
  },
  data() {
    return {
      direktoratPKHL: [],
      strukturOrganisasi: [],
      profil: [],
      sarpras: [],
      daerah: [],
      isScroll: null,
      scrolledToBottom: false,
      profile: true,
      daerahOp: false,
      sarana: false,
    }
  },
  methods: {
    updateHeader() {
      this.$store.commit('head/innerHeader', true)
    },
    handleScroll(e) {
      this.isScroll = window.scrollY || window.scrollTop
      let heightDoc = document.documentElement.offsetHeight - 250
      let bottomOfWindow = Math.ceil((window.scrollY || window.scrollTop) + window.innerHeight) >= heightDoc
      console.log(heightDoc)
      console.log(bottomOfWindow)
      if (bottomOfWindow) {
        this.scrolledToBottom = true
      } else {
        this.scrolledToBottom = false
      }
    },
    showProfile(){
      this.profile = true
      this.daerahOp = false
      this.sarana = false
    },
    showDaerahOp(){
      this.profile = false
      this.daerahOp = true
      this.sarana = false
    },
    showSarana(){
      this.profile = false
      this.daerahOp = false
      this.sarana = true
    },
  },
  created() {
    this.$nextTick(function () {
      this.updateHeader()
    })
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  head() {
    return {
      title: 'Tentang',
    }
  },
}
</script>
