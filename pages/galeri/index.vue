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
                    <div class="gal-item">
                      <div
                        class="image"
                        :style="{
                          backgroundImage: 'url(' + gal.image[0].url + ')',
                        }"
                        style="width: 100%; height: 250px;"
                      ></div>
                      <b-link to="/galeri/tes">
                        <h5>{{ gal.title }}</h5>
                      </b-link>
                      <h6>{{ gal.tgl }}</h6>
                    </div>
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
          image: [
            {
              id: 1,
              url:
                'https://images.unsplash.com/photo-1515354510367-70cfa0609079?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            },
            {
              id: 2,
              url:
                'https://images.unsplash.com/photo-1536047662067-327f912f87a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            },
            {
              id: 3,
              url:
                'https://images.unsplash.com/photo-1561439740-e8863909de77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80',
            },
            {
              id: 4,
              url:
                'https://images.unsplash.com/photo-1518904868869-fbb2cdd0429a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80',
            },
            {
              id: 5,
              url:
                'https://images.unsplash.com/photo-1561439740-e8863909de77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80',
            },
            {
              id: 6,
              url:
                'https://images.unsplash.com/photo-1518904868869-fbb2cdd0429a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80',
            },
          ],
        },
        // {
        //   id: 2,
        //   title: 'Pemadaman Darat',
        //   tgl: '23 Sep 2020',
        //   image: [
        //     {
        //       id: 1,
        //       url: 'https://images.unsplash.com/photo-1515354510367-70cfa0609079?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        //     },
        //     {
        //       id: 2,
        //       url: 'https://images.unsplash.com/photo-1536047662067-327f912f87a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        //     },
        //     {
        //       id: 3,
        //       url: 'https://images.unsplash.com/photo-1561439740-e8863909de77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80',
        //     },
        //     {
        //       id: 4,
        //       url: 'https://images.unsplash.com/photo-1518904868869-fbb2cdd0429a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80',
        //     },
        //   ]
        // }
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
}
</script>
