<template>
  <div class="inner-page">
    <div class="page-blog">
      <b-container>
        <b-row>
          <b-col md="10" lg="8" offset-md="1" offset-lg="2">
            <b-link to="/blog" class="back-link"><img src="/mini_arrow_left-gray.svg" alt=""> Kembali ke halaman blog</b-link>
            <div class="image" :style="{ backgroundImage: 'url(' + detail.image + ')'}"></div>
            <h3 class="title">{{ detail.title }}</h3>
            <span class="date">{{ detail.date }}</span>
            <vue-markdown>{{ detail.desc }}</vue-markdown>
          </b-col>
        </b-row>

        <div class="share-wrap">
          <h6>Bagikan</h6>
          <ShareNetwork
            network="twitter"
            :url="'http://' + host + ':' + port + $nuxt.$route.fullPath"
            :title="detail.title"
            :description="detail.shortDesc"
          >
            <i class="fab fa-twitter"></i>
          </ShareNetwork>
            <ShareNetwork
              network="facebook"
              :url="'http://' + host + ':' + port + $nuxt.$route.fullPath"
              :title="detail.title"
              :description="detail.shortDesc"
            >
              <i class="fab fa-facebook-f"></i>
          </ShareNetwork>
        </div>
      </b-container>
      
    </div>
  </div>
</template>

<script>
export default {
  layout: 'front',
  data(){
    return{
      host: process.env.HOST,
      port: process.env.PORT,
      detail: {
        image: 'https://images.unsplash.com/photo-1572204097183-e1ab140342ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
        title: 'Pemadaman di wilker Daops Singkawang, Kalbar',
        date: '23 Sep 2020',
        shortDesc: 'test test test test',
        desc: '<p>Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat tincidunt. Nam sem lacus, ornare non ante sed, ultricies fringilla massa. Ut congue, elit non tempus elementum, sem risus tincidunt diam, vitae sodales diam ipsum vitae purus. Fusce tristique erat nulla, vel viverra mi auctor non. Integer ante lorem, dictum at felis at, bibendum egestas augue. Aenean vestibulum lacus dolor, id tincidunt arcu pellentesque ut. Mauris sed venenatis diam, quis aliquam odio. Mauris lobortis augue placerat elit ultrices, non laoreet nunc semper. Phasellus dolor sapien, molestie at ante id, porta interdum nisl. Duis sit amet ante feugiat enim viverra sagittis. Sed vitae pulvinar augue. Donec sit amet dolor non velit tincidunt commodo.<p> <p>Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat tincidunt. Nam sem lacus, ornare non ante sed, ultricies fringilla massa. Ut congue, elit non tempus elementum, sem risus tincidunt diam, vitae sodales diam ipsum vitae purus. Fusce tristique erat nulla, vel viverra mi auctor non. Integer ante lorem, dictum at felis at, bibendum egestas augue. Aenean vestibulum lacus dolor, id tincidunt arcu pellentesque ut. Mauris sed venenatis diam, quis aliquam odio. Mauris lobortis augue placerat elit ultrices, non laoreet nunc semper. Phasellus dolor sapien, molestie at ante id, porta interdum nisl. Duis sit amet ante feugiat enim viverra sagittis. Sed vitae pulvinar augue. Donec sit amet dolor non velit tincidunt commodo.</p>'
      }
    }
  },
  created(){
    this.$nextTick(function() {
      this.updateHeader();
    });   
  },
  methods: {
    updateHeader() {
      this.$store.commit("head/innerHeader", true);
    }
  }

}
</script>