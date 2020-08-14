<template>
  <b-navbar toggleable="md" :class="[{ 'in-inner': inners }, 'navbar-home']">
    <b-container>
      <b-navbar-brand href="/">
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
          <b-nav-item to="/grafik">Grafik</b-nav-item>
          <b-nav-item to="/blog">Blog</b-nav-item>
          <b-nav-item to="/tentang">Tentang</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/development-center">
            <img src="/phone-white.svg" alt="" class="mr-1 home" />
            <img src="/phone-red.svg" alt="" class="mr-1 inner" />
            Call SiPongi+
          </b-nav-item>
          <b-nav-item-dropdown>
            <template v-slot:button-content>
              Menu Lainnya
              <img src="/dots.svg" alt="" class="ml-1 home" />
              <img src="/dots-gray.svg" alt="" class="ml-1 inner" />
            </template>
            <b-dropdown-item to="#">Menu</b-dropdown-item>
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
