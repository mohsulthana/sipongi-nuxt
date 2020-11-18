<template>
  <div class="inner-page">
    <div class="page-desc">
      <b-container>
        <b-row>
          <b-col md="12">
            <h3>Sipongi+ FDRS - Wilayah {{params}}</h3>
          </b-col>
          <b-col md="7">
            <h6>
              Informasi seputar kegiatan pemadaman yang dilakukan oleh
              Manggalana Agni serta update informasi seputar peringatan
              kebakaran
            </h6>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="tentang-wrap">
      <b-container>
        <!-- Filter Opsi By Wilayah -->
        <div class="mb-4">
          <div class="row">
            <div class="col-6">
              <div class="d-flex">
                <b-form-select v-model="selected" 
                    :options="opsiFile">
                </b-form-select>
                <button class="btn btn-danger ml-2" @click="getSelectedItem">Filter</button>
              </div>
            </div>
          </div>
        </div>

        <b-row>
          <b-col md="12">
            <b-row>
              <b-col md="12" v-if="filename != null">
                  <div
                    class="single-image"
                    :style="{
                      backgroundImage: 'url(' + fileurl + ')',
                    }"
                  ></div>
                  <h5>{{ filename }}</h5>
              </b-col>
            </b-row>
          </b-col>
        </b-row>

      </b-container>
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

<style scoped>
.single-image {
  width: 100%;
  height: 780px;
  background-size: cover;
  margin-bottom: 12px;
}
</style>

<script>
export default {
  layout: 'front',
  async fetch() {
    await this.loadFdrs()
  },
  computed: {
    params(){
      return this.$route.params.id
    }
  },
  data() {
    return {
      filename: null,
      fileurl: null,
      selected: 'Default',
      selectedItem: 'Default',
      opsiFile: [],
      loading: false,
    }
  },
  created() {
    this.$nextTick(function () {
      this.updateHeader()
    })
  },
  methods: {
    updateHeader() {
      this.$store.commit('head/innerHeader', true)
    },
    async loadFdrs() {
      this.loading = true
      //const url = !process.server ? `/v1/fdrs/detail` : `/api/fdrs/detail`
      const url = `http://127.0.0.1:8081/api/fdrs/detail`

      const params = {
        wilayah: this.params,
        filename: this.selectedItem,
      }

      await this.$axios
        .$get(url, {
          params,
        })
        .then((res) => {
          this.fileurl       = res.data.url
          this.filename      = res.data.filename
          this.opsiFile      = res.options
          this.selected      = res.data.filename
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
    async getSelectedItem(){
      this.selectedItem = this.selected
      await this.loadFdrs()
    }
  },
  head() {
    return {
      title: 'FDRS',
    }
  },
}
</script>
