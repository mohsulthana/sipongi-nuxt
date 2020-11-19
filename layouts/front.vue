<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  name: 'front',
  components: {
    Header,
    Footer,
  },
  methods: {
    async visitorCount(){
      const urlCount = !process.server ? `/v1/visitor/count` : `/api/visitor/count`

      await this.$axios
        .$get(urlCount)
        .then((res) => {

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
    }
  },
  beforeMount() {
    this.$nextTick(function () {
      this.visitorCount()
    })
  },

}
</script>
