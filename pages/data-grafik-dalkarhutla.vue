<template>
  <div class="inner-page">
    <div class="page-desc">
      <b-container>
        <b-row>
          <b-col md="7">
            <h3>Data & Grafik</h3>
            <h6>
              Pada tahun 2001s, Indonesia memiliki 93,8 juta hektar hutan primer
              , yang mencakup lebih dari 50% wilayah daratannya. Pada tahun
              2019, ia kehilangan 324kha hutan primer , setara dengan 187 juta
              ton CO₂ dari emisi.
            </h6>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="grafik-wrap">
    </div>
  </div>
</template>

<script>
export default {
  layout: 'front',
  async created() {
    await this.loadHotSpotSatelit();
  },
  methods: {
    async loadHotSpotSatelit() {
      const url = !process.server ? `/v1/hotspot/satelit` : `/api/hotspot/satelit`

      await this.$axios
        .$get(url)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>