<template>
  <div class="inner-page">
    <div class="page-desc">
      <b-container>
        <b-row>
          <b-col md="7">
            <h3>Sipongi+ Blog</h3>
            <h6>Informasi seputar kegiatan pemadaman yang dilakukan oleh manggalana agni serta updates informasi seputar peringatan kebakaran</h6>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="blog-wrap">
      <b-container>
        <b-row>
          <b-col md="4" v-for="blog in blogs" :key="blog.id">
            <b-link to="" class="blog-item">
              <div class="image" :style="{backgroundImage: `url(${ blog.image })`}"></div>
              <h5>{{ blog.title }}</h5>
              <span>{{ blog.date }}</span>
            </b-link>
          </b-col>
          <b-col md="12" class="text-center">
            <button class="btn btn-ghost">Tampilkan Lebih Banyak</button>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'front',
  data(){
    return{
      blogs: [
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1572204097183-e1ab140342ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          title: 'Pemadaman di wilker Daops Singkawang, Kalbar',
          date: '23 Sep 2020'
        },
        {
          id: 2,
          image: 'https://images.unsplash.com/photo-1523861751938-121b5323b48b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1043&q=80',
          title: 'Pemadaman di wilker Daops Singkawang, Kalbar',
          date: '23 Sep 2020'
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1455747634646-0ef67dfca23f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
          title: 'Pemadaman di wilker Daops Singkawang, Kalbar',
          date: '23 Sep 2020'
        },
        {
          id: 4,
          image: 'https://images.unsplash.com/photo-1483917841983-f83104f9ffa5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1061&q=80',
          title: 'Pemadaman di wilker Daops Singkawang, Kalbar',
          date: '23 Sep 2020'
        },
        {
          id: 5,
          image: 'https://images.unsplash.com/photo-1511149547418-801db51a015f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          title: 'Pemadaman di wilker Daops Singkawang, Kalbar',
          date: '23 Sep 2020'
        },
        {
          id: 6,
          image: 'https://images.unsplash.com/photo-1481121871234-1f3fb96a5f45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          title: 'Pemadaman di wilker Daops Singkawang, Kalbar',
          date: '23 Sep 2020'
        },
      ]
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
