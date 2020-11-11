<template>
  <div class="inner-page">
    <div class="page-desc">
      <b-container>
        <b-row>
          <b-col md="12">
            <h3>Sipongi+ FDRS</h3>
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

            <div class="col-12 col-md-4">
              <!-- Option Wilayah -->
              <div class="form-group">
                <div class="row">
                  <label class="col-sm-2 control-label">Wilayah</label>
                  <div class="col-sm-10">
                    <b-form-select v-model="defaultWilayah" 
                        :options="opsiWilayah">
                    </b-form-select>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-4">
              <!-- Option Index -->
              <div class="form-group">
                <div class="row">
                  <label class="col-sm-2 control-label">Hari</label>
                  <div class="col-sm-10">
                    <b-form-select v-model="defaultHari" 
                        :options="opsiHari">
                    </b-form-select>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="col-12 col-md-4">
                <button class="btn btn-danger" @click="filter">Filter</button>
            </div>
          </div>
        </div>
    
        <b-row>
          <b-col md="12">
            <b-row>
              <b-col md="12">
                  <div>
                    <img :src="dataFdrs.image" :alt="dataFdrs.wilayah" class="img-fluid">
                  </div>
                  <div>
                    <a href="#" @click="download(dataFdrs.image,dataFdrs.wilayah)">
                        Download
                    </a>
                  </div>
                  <p class="pt-1" style="font-size:12px;">*Sumber data : Badan Meteorologi Dan Meteorologi Klimatologi dan Geofisika</p>
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
  data() {
    return {
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
      option : {
        index : 'dc',
      },
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
      const url = !process.server ? `/v1/fdrs/getData` : `/api/fdrs/getData`
      //const url = `http://127.0.0.1:8081/api/fdrs/getData`

      const params = {
        index : this.option.index,
        wilayah : this.selectedWilayah,
        hari : this.selectedHari
      }

      await this.$axios
        .$get(url, {
          params,
        })
        .then((res) => {
          this.dataFdrs = res.data
          this.opsiWilayah  = res.option.wilayah
          this.opsiHari  = res.option.hari
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
    async filter(){
      this.selectedWilayah = this.defaultWilayah
      this.selectedHari = this.defaultHari
      await this.loadFdrs()
    },
    download(link,wilayah){
      const filename = wilayah+'.png'

      this.$axios({
          url: link,
          method: 'GET',
          responseType: 'blob',
      }).then((response) => {
          var fileURL = window.URL.createObjectURL(new Blob([response.data]));
          var fileLink = document.createElement('a');

          fileLink.href = fileURL;
          fileLink.setAttribute('download',filename );
          document.body.appendChild(fileLink);

          fileLink.click();
      });
    }
  },
  head() {
    return {
      title: 'FDRS',
    }
  },
}
</script>
