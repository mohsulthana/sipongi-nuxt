<template>
  <div class="inner-page">
    <div class="page-desc">
      <b-container>
        <b-row>
          <b-col md="7">
            <h3>Sipongi+ Galeri</h3>
            <h6>
              Informasi seputar kegiatan pemadaman yang dilakukan oleh
              manggalana agni serta updates informasi seputar peringatan
              kebakaran
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
              <b-tab title="Kegiatan Pemadaman" active>
                <b-row>
                  <b-col md="4" v-for="gal in gallerys" :key="gal.id">
                    <b-link :to="'/galeri/' + gal.id" class="gal-item">
                      <div
                        class="image"
                        :style="{
                          backgroundImage: 'url(' + gal.img + ')',
                        }"
                      ></div>
                      <h5>{{ gal.title }}</h5>
                      <span>{{ gal.tgl }}</span>
                    </b-link>
                  </b-col>
                  <b-col md="12" class="text-center">
                    <button class="btn btn-ghost">
                      Tampilkan Lebih Banyak
                    </button>
                  </b-col>
                </b-row>
              </b-tab>
              <b-tab title="Kegiatan Lainnya">
                <b-row>
                  <b-col md="4" order-md="2"> </b-col>
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
  data() {
    return {
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
  },
  head() {
    return {
      title: 'Galeri',
    }
  },
}
</script>
