<template>
  <div class="inner-page">
    <div class="page-desc">
      <b-container>
        <b-row>
          <b-col md="7">
            <h3>Publikasi</h3>
            <h6>
              Sed a magna semper, porta purus eu, ullamcorper ligula. Nam sit
              amet consectetur sapien. Etiam dui ipsum, viverra vel turpis ut,
              dignissim elementum mauris. Sed dapibus auctor
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
              <b-tab title="Peraturan Perundangan" active>
                <b-row>
                  <b-col md="9" class="text-center">
                    <div role="tablist" class="accordion-publikasi">
                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                          <b-button block v-b-toggle.accordion-1 variant="info">
                            <h5>
                              PERATURAN MENTERI LINGKUNGAN HIDUP DAN KEHUTANAN
                            </h5>
                            <img src="/arrow-orange.svg" alt="" />
                          </b-button>
                        </b-card-header>
                        <b-collapse
                          id="accordion-1"
                          visible
                          accordion="my-accordion"
                          role="tabpanel"
                        >
                          <b-card-body>
                            <div class="uud-item">
                              <b-link to=""
                                >Kriteria Teknis Status Kesiagaan dan Darurat
                                Kebakaran Hutan dan Lahan</b-link
                              >
                              <span>P.9/MENLHK/SETJEN/KUM.1/3/2018</span>
                            </div>
                            <div class="uud-item">
                              <b-link to=""
                                >Prosedur Tetap Pengecekan Lapangan Informasi
                                Titik Panas dan/atau Informasi Kebakaran Hutan
                                dan Lahan</b-link
                              >
                              <span>P.8/MENLHK/SETJEN/KUM.1/3/2018</span>
                            </div>
                            <div class="uud-item">
                              <b-link to=""
                                >Pengendalian Kebakaran Hutan dan Lahan</b-link
                              >
                              <span>P.32/MenLHK/Setjen/Kum.1/3/2016</span>
                            </div>
                          </b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                          <b-button block v-b-toggle.accordion-2 variant="info">
                            <h5>UNDANG-UNDANG</h5>
                            <img src="/arrow-orange.svg" alt="" />
                          </b-button>
                        </b-card-header>
                        <b-collapse
                          id="accordion-2"
                          accordion="my-accordion"
                          role="tabpanel"
                        >
                          <b-card-body>
                            <div class="uud-item">
                              <b-link to=""
                                >KETENTUAN-KETENTUAN POKOK PENGELOLAAN
                                LINGKUNGAN HIDUP</b-link
                              >
                              <span>No. 4 Tahun 1982</span>
                            </div>
                            <div class="uud-item">
                              <b-link to=""
                                >Pengesahan United Nations Framework Convention
                                On Climate Change (Konvensi Kerangka Kerja
                                Perserikatan Bangsa Bangsa Mengenai Perubahan
                                Iklim)</b-link
                              >
                              <span>No. 6 Tahun 1994</span>
                            </div>
                            <div class="uud-item">
                              <b-link to=""
                                >Ketentuan-ketentuan Pokok Kehutanan</b-link
                              >
                              <span>No. 5 Tahun 1967</span>
                            </div>
                            <div class="uud-item">
                              <b-link to=""
                                >PENGESAHAN UNITED NATIONS CONVENTION ON
                                BIOLOGICAL DIVERSITY (KONVENSI PERSERIKATAN
                                BANGSA-BANGSA MENGENAI KEANEKARAGAMAN
                                HAYATI)</b-link
                              >
                              <span>No. 5 Tahun 1994</span>
                            </div>
                          </b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                          <b-button block v-b-toggle.accordion-3 variant="info">
                            <h5>Peraturan Pemerintah</h5>
                            <img src="/arrow-orange.svg" alt="" />
                          </b-button>
                        </b-card-header>
                        <b-collapse
                          id="accordion-3"
                          accordion="my-accordion"
                          role="tabpanel"
                        >
                          <b-card-body>
                            <div class="uud-item">
                              <b-link to="">PERLINDUNGAN HUTAN</b-link>
                              <span>No. 28 Tahun 1985</span>
                            </div>
                            <div class="uud-item">
                              <b-link to=""
                                >Kewenangan Pemerintah Dan Kewenangan Propinsi
                                Sebagai Otonom</b-link
                              >
                              <span>PP No. 25 Tahun 2000</span>
                            </div>
                            <div class="uud-item">
                              <b-link to=""
                                >Pedoman Organisasi Perangkat Daerah</b-link
                              >
                              <span>No. 84 Tahun 2000 </span>
                            </div>
                            <div class="uud-item">
                              <b-link to=""
                                >Pengendalian Kerusakan Dan Atau Pencemaran
                                Lingkungan Hidup Yang Berkaitan Dengan Kebakaran
                                Hutan Dan Atau Lahan</b-link
                              >
                              <span>No. 4 Tahun 2001</span>
                            </div>
                            <div class="uud-item">
                              <b-link to=""
                                >PENYELENGGARAAN DEKONSENTRASI</b-link
                              >
                              <span>No. 39 Tahun 2001</span>
                            </div>
                            <div class="uud-item">
                              <b-link to="">PERLINDUNGAN HUTAN</b-link>
                              <span>No. 45 Tahun 2004</span>
                            </div>
                            <div class="uud-item">
                              <b-link to=""
                                >BADAN NASIONAL PENANGGULANGAN BENCANA</b-link
                              >
                              <span>No. 8 Tahun 2008</span>
                            </div>
                            <div class="uud-item">
                              <b-link to=""
                                >Pembagian Urusan Pemerintahan Antara Pemerintah
                                Pemda Provinsi dan Pemda Kabupaten/kota
                                (lampiran pembagian urusan Kehutanan)</b-link
                              >
                              <span>PP.38 Tahun 2007 </span>
                            </div>
                            <div class="uud-item">
                              <b-link to=""
                                >Perusahaan Umum (Perum) Kehutanan Negara (Perum
                                Perhutani)</b-link
                              >
                              <span>PP No.72 tahun 2010</span>
                            </div>
                            <div class="uud-item">
                              <b-link to=""
                                >Penerimaan Negara Bukan Pajak</b-link
                              >
                              <span>PP Nomor : 13 Tahun 2010</span>
                            </div>
                          </b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                          <b-button block v-b-toggle.accordion-4 variant="info">
                            <h5>Keputusan Presiden</h5>
                            <img src="/arrow-orange.svg" alt="" />
                          </b-button>
                        </b-card-header>
                        <b-collapse
                          id="accordion-4"
                          accordion="my-accordion"
                          role="tabpanel"
                        >
                          <b-card-body>
                            <div class="uud-item">
                              <b-link to=""
                                >BADAN KOORDINASI NASIONAL PENANGGULANGAN
                                BENCANA DAN PENANGANAN PENGUNGSI</b-link
                              >
                              <span>No. 3 Tahun 2001</span>
                            </div>
                            <div class="uud-item">
                              <b-link to=""
                                >PERUBAHAN ATAS KEPUTUSAN PRESIDEN NOMOR 101
                                TAHUN 2001 TENTANG KEDUDUKAN, TUGAS, FUNGSI,
                                KEWENANGAN, SUSUNAN ORGANISASI, DAN TATA KERJA
                                MENTERI NEGARA</b-link
                              >
                              <span>No. 2 Tahun 2002</span>
                            </div>
                            <div class="uud-item">
                              <b-link to=""
                                >PERUBAHAN ATAS KEPUTUSAN PRESIDEN NOMOR 108
                                TAHUN 2001 TENTANG UNIT ORGANISASI DAN TUGAS
                                ESELON I MENTERI NEGARA</b-link
                              >
                              <span>No. 4 Tahun 2002</span>
                            </div>
                            <div class="uud-item">
                              <b-link to="">Pengelolaan Kawasan Lindung</b-link>
                              <span>No. 32 tahun 1990</span>
                            </div>
                          </b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                          <b-button block v-b-toggle.accordion-5 variant="info">
                            <h5>SK Menteri Lingkungan Hidup</h5>
                            <img src="/arrow-orange.svg" alt="" />
                          </b-button>
                        </b-card-header>
                        <b-collapse
                          id="accordion-5"
                          accordion="my-accordion"
                          role="tabpanel"
                        >
                          <b-card-body>
                            <div class="uud-item">
                              <b-link to="">
                                Mekanisme pencegahan pencemaran dan/atau
                                kerusakan lingkungan hidup yang berkaitan dengan
                                kebakaran hutan dan/atau lahan</b-link
                              >
                              <span>No. 10 TAHUN 2010 </span>
                            </div>
                          </b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                          <b-button block v-b-toggle.accordion-6 variant="info">
                            <h5>SK Menteri Kehutanan</h5>
                            <img src="/arrow-orange.svg" alt="" />
                          </b-button>
                        </b-card-header>
                        <b-collapse
                          id="accordion-6"
                          accordion="my-accordion"
                          role="tabpanel"
                        >
                          <b-card-body>
                            <div class="uud-item">
                              <b-link to=""
                                >ORGANISASI DAN TATA KERJA KEMENTERIAN
                                KEHUTANAN</b-link
                              >
                              <span>NOMOR : P. 40/Menhut-II/2010</span>
                            </div>
                            <div class="uud-item">
                              <b-link to=""
                                >PROSEDUR PENANGANAN KRISIS KEBAKARAN
                                HUTAN</b-link
                              >
                              <span>Nomor : 97/Kpts-II/1998</span>
                            </div>
                            <div class="uud-item">
                              <b-link to=""
                                >Pedoman Organisasi Perangkat Daerah</b-link
                              >
                              <span>No. 84 Tahun 2000 </span>
                            </div>
                            <div class="uud-item">
                              <b-link to=""
                                >Pengendalian Kerusakan Dan Atau Pencemaran
                                Lingkungan Hidup Yang Berkaitan Dengan Kebakaran
                                Hutan Dan Atau Lahan</b-link
                              >
                              <span>No. 4 Tahun 2001</span>
                            </div>
                            <div class="uud-item">
                              <b-link to=""
                                >PENYELENGGARAAN DEKONSENTRASI</b-link
                              >
                              <span>No. 39 Tahun 2001</span>
                            </div>
                            <div class="uud-item">
                              <b-link to="">PERLINDUNGAN HUTAN</b-link>
                              <span>No. 45 Tahun 2004</span>
                            </div>
                            <div class="uud-item">
                              <b-link to=""
                                >BADAN NASIONAL PENANGGULANGAN BENCANA</b-link
                              >
                              <span>No. 8 Tahun 2008</span>
                            </div>
                            <div class="uud-item">
                              <b-link to=""
                                >Pembagian Urusan Pemerintahan Antara Pemerintah
                                Pemda Provinsi dan Pemda Kabupaten/kota
                                (lampiran pembagian urusan Kehutanan)</b-link
                              >
                              <span>PP.38 Tahun 2007 </span>
                            </div>
                            <div class="uud-item">
                              <b-link to=""
                                >Perusahaan Umum (Perum) Kehutanan Negara (Perum
                                Perhutani)</b-link
                              >
                              <span>PP No.72 tahun 2010</span>
                            </div>
                            <div class="uud-item">
                              <b-link to=""
                                >Penerimaan Negara Bukan Pajak</b-link
                              >
                              <span>PP Nomor : 13 Tahun 2010</span>
                            </div>
                          </b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                          <b-button block v-b-toggle.accordion-7 variant="info">
                            <h5>SK Dirjen PHPA/PHKA</h5>
                            <img src="/arrow-orange.svg" alt="" />
                          </b-button>
                        </b-card-header>
                        <b-collapse
                          id="accordion-7"
                          accordion="my-accordion"
                          role="tabpanel"
                        >
                          <b-card-body>
                            <div class="uud-item">
                              <b-link to="">
                                Mekanisme pencegahan pencemaran dan/atau
                                kerusakan lingkungan hidup yang berkaitan dengan
                                kebakaran hutan dan/atau lahan</b-link
                              >
                              <span>No. 10 TAHUN 2010 </span>
                            </div>
                          </b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                          <b-button block v-b-toggle.accordion-8 variant="info">
                            <h5>Peraturan Daerah</h5>
                            <img src="/arrow-orange.svg" alt="" />
                          </b-button>
                        </b-card-header>
                        <b-collapse
                          id="accordion-8"
                          accordion="my-accordion"
                          role="tabpanel"
                        >
                          <b-card-body>
                            <div class="uud-item">
                              <b-link to="">
                                Mekanisme pencegahan pencemaran dan/atau
                                kerusakan lingkungan hidup yang berkaitan dengan
                                kebakaran hutan dan/atau lahan</b-link
                              >
                              <span>No. 10 TAHUN 2010 </span>
                            </div>
                          </b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                          <b-button block v-b-toggle.accordion-9 variant="info">
                            <h5>Peraturan Gubernur</h5>
                            <img src="/arrow-orange.svg" alt="" />
                          </b-button>
                        </b-card-header>
                        <b-collapse
                          id="accordion-9"
                          accordion="my-accordion"
                          role="tabpanel"
                        >
                          <b-card-body>
                            <div class="uud-item">
                              <b-link to="">
                                Mekanisme pencegahan pencemaran dan/atau
                                kerusakan lingkungan hidup yang berkaitan dengan
                                kebakaran hutan dan/atau lahan</b-link
                              >
                              <span>No. 10 TAHUN 2010 </span>
                            </div>
                          </b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                          <b-button
                            block
                            v-b-toggle.accordion-10
                            variant="info"
                          >
                            <h5>SK Gubernur Kepala Daerah Tingkat I</h5>
                            <img src="/arrow-orange.svg" alt="" />
                          </b-button>
                        </b-card-header>
                        <b-collapse
                          id="accordion-10"
                          accordion="my-accordion"
                          role="tabpanel"
                        >
                          <b-card-body>
                            <div class="uud-item">
                              <b-link to="">
                                Mekanisme pencegahan pencemaran dan/atau
                                kerusakan lingkungan hidup yang berkaitan dengan
                                kebakaran hutan dan/atau lahan</b-link
                              >
                              <span>No. 10 TAHUN 2010 </span>
                            </div>
                          </b-card-body>
                        </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" role="tab">
                          <b-button
                            block
                            v-b-toggle.accordion-11
                            variant="info"
                          >
                            <h5>Lain-lain</h5>
                            <img src="/arrow-orange.svg" alt="" />
                          </b-button>
                        </b-card-header>
                        <b-collapse
                          id="accordion-11"
                          accordion="my-accordion"
                          role="tabpanel"
                        >
                          <b-card-body>
                            <div class="uud-item">
                              <b-link to="">
                                Mekanisme pencegahan pencemaran dan/atau
                                kerusakan lingkungan hidup yang berkaitan dengan
                                kebakaran hutan dan/atau lahan</b-link
                              >
                              <span>No. 10 TAHUN 2010 </span>
                            </div>
                          </b-card-body>
                        </b-collapse>
                      </b-card>
                    </div>
                  </b-col>
                </b-row>
              </b-tab>
              <b-tab title="Dokumen Lainnya">
                <b-row>
                  <b-col md="9">
                    <div
                      v-for="dok in dokumen"
                      :key="dok.slug"
                      class="document-item"
                    >
                      <img
                        :src="`/${
                          dok.tipe === 'file'
                            ? 'paper.svg'
                            : dok.tipe === 'video'
                            ? 'video.svg'
                            : 'paper.svg'
                        }`"
                        alt="icon"
                      />
                      <h5>{{ dok.title }}</h5>
                      <b-link
                        :href="`${
                          dok.tipe === 'file'
                            ? `/v1/dokumen-lain/file/${dok.slug}`
                            : dok.file_url
                        }`"
                        target="_blank"
                        :class="`btn ${
                          dok.tipe === 'file'
                            ? 'btn-secondary'
                            : dok.tipe === 'video'
                            ? 'btn-third'
                            : 'btn-secondary'
                        }`"
                      >
                        {{
                          dok.tipe === 'file'
                            ? 'Download'
                            : dok.tipe === 'video'
                            ? 'Watch'
                            : 'Open'
                        }}
                        <i class="fas fa-angle-right"></i>
                      </b-link>
                    </div>
                    <div v-if="loadMore" class="text-center mt-4">
                      <b-button @click="loadMoreData()" variant="primary"
                        >Lihat lebih banyak</b-button
                      >
                    </div>
                  </b-col>
                </b-row>
              </b-tab>
            </b-tabs>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="splash-screen" v-if="$fetchState.pending">
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

<script>
export default {
  layout: 'front',
  async fetch() {
    const url = !process.server ? `/v1/listDokumen` : `/api/listDokumen`

    const params = {
      direction: this.options.direction,
      sortBy: this.options.sortBy,
      page: this.options.page,
      per_page: this.options.per_page,
    }

    await this.$axios
      .$get(url, {
        params,
      })
      .then((res) => {
        this.dokumen = this.dokumen.concat(res.data)
        this.loadMore = !!res.links.next
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
      dokumen: [],
      options: {
        direction: 'desc',
        sortBy: 'created_at',
        page: 1,
        per_page: 15,
      },
      loadMore: false,
      gallerys: [
        {
          id: 1,
          title: 'Pemadaman Darat',
          tgl: '23 Sep 2020',
          img:
            'https://images.unsplash.com/photo-1515354510367-70cfa0609079?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        },
        {
          id: 2,
          title: 'Pemadaman Darat',
          tgl: '23 Sep 2020',
          img:
            'https://images.unsplash.com/photo-1536047662067-327f912f87a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        },
        {
          id: 3,
          title: 'Pemadaman Darat',
          tgl: '23 Sep 2020',
          img:
            'https://images.unsplash.com/photo-1561439740-e8863909de77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80',
        },
        {
          id: 4,
          title: 'Pemadaman Darat',
          tgl: '23 Sep 2020',
          img:
            'https://images.unsplash.com/photo-1518904868869-fbb2cdd0429a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80',
        },
        {
          id: 5,
          title: 'Pemadaman Darat',
          tgl: '23 Sep 2020',
          img:
            'https://images.unsplash.com/photo-1504591416434-49dfd16b211c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        },
        {
          id: 6,
          title: 'Pemadaman Darat',
          tgl: '23 Sep 2020',
          img:
            'https://images.unsplash.com/photo-1563062067-7700e1d9ae1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        },
        {
          id: 7,
          title: 'Pemadaman Darat',
          tgl: '23 Sep 2020',
          img:
            'https://images.unsplash.com/photo-1576707995936-a6cffe26ef7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        },
        {
          id: 8,
          title: 'Pemadaman Darat',
          tgl: '23 Sep 2020',
          img:
            'https://images.unsplash.com/photo-1578225333359-34012ec94d39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
        },
        {
          id: 9,
          title: 'Pemadaman Darat',
          tgl: '23 Sep 2020',
          img:
            'https://images.unsplash.com/photo-1563062067-723c14a7c7ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1008&q=80',
        },
      ],
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
    async loadMoreData() {
      this.options.page++
      await this.$fetch()
    },
  },
  head() {
    return {
      title: 'Publikasi',
    }
  },
}
</script>
