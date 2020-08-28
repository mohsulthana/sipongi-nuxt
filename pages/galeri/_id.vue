<template>
  <div class="inner-page">
    <div class="galeri-wrap">
      <b-container>
        <b-row>
          <b-col md="10" offset-md="1">
            <b-link to="/galeri" target="_self" class="back-link"><img src="/mini_arrow_left-gray.svg" alt=""> Kembali ke halaman Galeri</b-link>
            <h3 class="title">{{ gallery.title }}</h3>
            <div class="gal-item">
              <VueSlickCarousel
                v-bind="slickOptions"
                class="slider-for"
                ref="sliderthumb"
                @beforeChange="syncSliders"
              >
                <div
                  class="image big"
                  v-for="img in gallery.image"
                  :key="img.id"
                  :style="{ backgroundImage: 'url(' + img.url + ')' }"
                >
                  <div class="text">{{ img.title }}</div>
                </div>
              </VueSlickCarousel>
              <VueSlickCarousel
                v-bind="slickGuideOptions"
                class="slider-nav"
                ref="sliderbig"
                @beforeChange="syncSliders"
              >
                <div class="wrap"
                  v-for="img in gallery.image"
                  :key="img.id"
                >
                  <div
                    class="image"
                    :style="{ backgroundImage: 'url(' + img.url + ')' }"
                  ></div>
                </div>
              </VueSlickCarousel>
            </div>
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
      slickOptions: {
        slidesToShow: 1,
        focusOnSelect: true,
        arrows: false,
        infinite: true,
      },
      slickGuideOptions: {
        slidesToShow: 5,
        focusOnSelect: true,
        infinite: true,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
            },
          },
        ],
      },
      gallery: {
        id: 1,
        title: 'Pemadaman Darat',
        tgl: '23 Sep 2020',
        image: [
          {
            id: 1,
            title: 'Pemadaman Darat Daops Rengat, Riau (11 Sept 2019)',
            url:
              'https://images.unsplash.com/photo-1515354510367-70cfa0609079?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          },
          {
            id: 2,
            title: 'Pemadaman Darat Daops Rengat, Riau (11 Sept 2019)',
            url:
              'https://images.unsplash.com/photo-1536047662067-327f912f87a0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          },
          {
            id: 3,
            title: 'Pemadaman Darat Daops Rengat, Riau (11 Sept 2019)',
            url:
              'https://images.unsplash.com/photo-1561439740-e8863909de77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80',
          },
          {
            id: 4,
            title: 'Pemadaman Darat Daops Rengat, Riau (11 Sept 2019)',
            url:
              'https://images.unsplash.com/photo-1518904868869-fbb2cdd0429a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80',
          },
          {
            id: 5,
            title: 'Pemadaman Darat Daops Rengat, Riau (11 Sept 2019)',
            url:
              'https://images.unsplash.com/photo-1561439740-e8863909de77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80',
          },
          {
            id: 6,
            title: 'Pemadaman Darat Daops Rengat, Riau (11 Sept 2019)',
            url:
              'https://images.unsplash.com/photo-1518904868869-fbb2cdd0429a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80',
          },
        ],
      },
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
    syncSliders(currentPosition, nextPosition) {
      this.$refs.sliderbig.goTo(nextPosition)
      this.$refs.sliderthumb.goTo(nextPosition)
    },
  },
}
</script>
