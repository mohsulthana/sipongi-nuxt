<template>
  <b-navbar toggleable="md" :class="[{ 'in-inner': inners }, 'navbar-home']">
    <b-container>
      <b-navbar-brand to="/">
        <img src="/logo.svg" alt="" />
        <img src="/logo-text.svg" alt="" class="ml-1" />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"
        ><i class="fas fa-bars"></i
      ></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Left aligned nav items -->
        <b-navbar-nav>
          <b-nav-item to="/peta">Peta</b-nav-item>
          
          <b-nav-item-dropdown right>
          	<template v-slot:button-content>
              Data & Grafik
            </template>
          		<b-dropdown-item
              to="/grafik">Grafik
              </b-dropdown-item>
              <b-dropdown-item
              to="/emisi">Emisi CO2
              </b-dropdown-item>
          </b-nav-item-dropdown>
          
          <b-nav-item to="/blog">Berita</b-nav-item>
          <b-nav-item to="/galeri">Galeri</b-nav-item>
          <b-nav-item to="/fdrs">FDRS</b-nav-item>
          <b-nav-item to="/publikasi">Publikasi</b-nav-item>
          <b-nav-item to="/tentang">Tentang</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item 
            href="https://wa.me/+6281310035000"
            target="_blank"
          >
            <img src="/phone-white.svg" alt="" class="mr-1 home" />
            <img src="/phone-red.svg" alt="" class="mr-1 inner" />
            Sipongi+
          </b-nav-item>
          <b-nav-item-dropdown right>
            <template v-slot:button-content>
              Menu Lainnya
              <img src="/dots.svg" alt="" class="ml-1 home" />
              <img src="/dots-gray.svg" alt="" class="ml-1 inner" />
            </template>
            <b-dropdown-item
              href="http://sipongi.menlhk.go.id/laporan_dalkarhutla_mitra/app2020/"
              target="_blank"
              >Pelaporan Dalkarhutla</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {}
  },
  mounted() {
    window.addEventListener('scroll', this.handleSCroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleSCroll)
  },
  computed: {
    inners() {
      return this.$store.state.head.inner
    },
  },
  methods: {
    handleSCroll(event) {
      const header = document.querySelector('.navbar-home')
      if (window.scrollY > 10 && !header.className.includes('fixed')) {
        header.classList.add('fixed')
      } else if (window.scrollY < 10) {
        header.classList.remove('fixed')
      }
    },
  },
}
</script>
