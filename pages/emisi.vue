<template>
	<div class="inner-page">
    <div class="page-desc">
      <b-container>
        <b-row>
          <b-col md="12">
            <h3>Emisi CO2</h3>
            <h6>
             Emisi CO2 dari Kebakaran Hutan dan Lahan (Ton CO2e)
            </h6>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class="emisi-wrap">
    <b-container>
        <b-row>
			      <b-col lg="12">
			         <b-row v-if="emisi">
			            <b-col lg="4" order-lg="2">
			              <div :class="[{ 'toBot' : scrolledToBottom }, { 'scrolling': isScroll  }, 'nav-content']">
			                <h3>Data dan Grafik</h3>
			                    <b-link to="grafik">Grafik</b-link>
			                    <b-link to="emisi">Emisi CO2</b-link>
			              </div>
			            </b-col>
			            <b-col lg="8" order-lg="1">
			                <h5 class="title"></h5>
													<b-table striped hover :items="items" :fields="fields"></b-table>
									</b-col>
			        </b-row>
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
      	isScroll: null,
	      scrolledToBottom: false,
	      emisi: true,
	      daerahOp: false,
	      sarana: false,
      
        // Note `isActive` is left out and will not appear in the rendered table
        fields: ['provinsi', '2016', '2017', '2018', '2019', '2020'],
        items: [
          { isActive: true, 2016: '2.859.378', 2017: '2.786.053', 2018: '572.104', 2019: '281.520', 2020: '298.105', provinsi: 'Aceh' },
          { isActive: false, 2016: '862.206', 2017: '3.538', 2018: '36.752', 2019: '651.434', 2020: '602.348', provinsi: 'Kepulauan Riau' },
          { isActive: false, 2016: '12.701.836', 2017: '6.407.663', 2018: '37.236.912', 2019: '72.081.698', 2020: '12.375.385', provinsi: 'Riau' },
          { isActive: true, 2016: '91.979', 2017: '880.687', 2018: '1.701.825', 2019: '1.029.562', 2020: '549.904', provinsi: 'Sumatera Barat' },
				  { isActive: false, 2016: '6.976.758', 2017: '487.144', 2018: '3.699.638', 2019: '158.329.629', 2020: '605.107', provinsi: 'Sumatera Selatan' },
				  { isActive: true, 2016: '2.592.938', 2017: '195.189', 2018: '2.397.182', 2019: '885.018', 2020: '1.200.639', provinsi: 'Sumatera Utara' },
				  { isActive: false, 2016: '134.021', 2017: '50.232', 2018: '889', 2019: '3.912', 2020: '20.487', provinsi: 'Bengkulu' },
				  { isActive: true, 2016: '-', 2017: '-', 2018: '345.632', 2019: '839.454', 2020: '30.445', provinsi: 'Kep. Bangka Belitung' },
				  { isActive: false, 2016: '4.949.983', 2017: '598.768', 2018: '2.557.810', 2019: '6.642.737', 2020: '91.168', provinsi: 'Lampung' },
				  { isActive: true, 2016: '5.738.720', 2017: '4.447.973', 2018: '43.554.165', 2019: '71.642.105', 2020: '1.878.620', provinsi: 'Kalimantan Barat' },
				  { isActive: false, 2016: '2.645.956', 2017: '760.507', 2018: '34.182.439', 2019: '216.133.847', 2020: '1.092.152', provinsi: 'Kalimantan Tengah' },
				  { isActive: true, 2016: '912.295', 2017: '145.063', 2018: '15.447.181', 2019: '19.944.430', 2020: '38.918', provinsi: 'Kalimantan Selatan' },
				  { isActive: false, 2016: '13.033.337', 2017: '180.713', 2018: '7.029.802', 2019: '12.852.068', 2020: '565.855', provinsi: 'Kalimantan Timur' },
				  { isActive: true, 2016: '1.668.746', 2017: '7.127', 2018: '108.190', 2019: '1.112.651', 2020: '107.112', provinsi: 'Kalimantan Utara' },
				  { isActive: false, 2016: '-', 2017: '-', 2018: '-', 2019: '-', 2020: '-', provinsi: 'DKI Jakarta' },
				  { isActive: true, 2016: '-', 2017: '-', 2018: '-', 2019: '2.134', 2020: '-', provinsi: 'Banten' },
				  { isActive: false, 2016: '-', 2017: '6.249', 2018: '244.995', 2019: '743.929', 2020: '253.938', provinsi: 'Jawa Barat' },
				  { isActive: true, 2016: '-', 2017: '91.111', 2018: '5.160', 2019: '491.617', 2020: '11.731', provinsi: 'Jawa Tengah' },
				  { isActive: false, 2016: '-', 2017: '-', 2018: '-', 2019: '5.297', 2020: '246', provinsi: 'DI Yogyakarta' },
				  { isActive: true, 2016: '-', 2017: '366.532', 2018: '1.059.894', 2019: '3.872.134', 2020: '171.291', provinsi: 'Jawa Timur' },
				  { isActive: false, 2016: '-', 2017: '36.922', 2018: '51.165', 2019: '41.410', 2020: '-', provinsi: 'Bali' },
				  { isActive: true, 2016: '57.716', 2017: '2.518.853', 2018: '1.220.500', 2019: '3.544.094', 2020: '231.244', provinsi: 'Nusa Tenggara Barat' },
				  { isActive: false, 2016: '396.661', 2017: '3.204.285', 2018: '3.486.993', 2019: '8.810.217', 2020: '1.757.248', provinsi: 'Nusa Tenggara Timur' },
				  { isActive: true, 2016: '11.648', 2017: '122.518', 2018: '120.671', 2019: '818.516', 2020: '56.188', provinsi: 'Sulawesi Selatan' },
				  { isActive: false, 2016: '463.776', 2017: '89.464', 2018: '340.958', 2019: '871.489', 2020: '50.914', provinsi: 'Sulawesi Tengah' },
				  { isActive: true, 2016: '7.271', 2017: '315.332', 2018: '788.725', 2019: '1.620.921', 2020: '36.110', provinsi: 'Sulawesi Tenggara' },
				  { isActive: false, 2016: '12.666', 2017: '1.264', 2018: '4.008', 2019: '340.325', 2020: '1.415', provinsi: 'Sulawesi Utara' },
				  { isActive: true, 2016: '510.799', 2017: '2.412', 2018: '55.088', 2019: '153.410', 2020: '1.310', provinsi: 'Sulawesi Barat' },
				  { isActive: false, 2016: '116.322', 2017: '-', 2018: '16.930', 2019: '189.475', 2020: '3.459', provinsi: 'Gorontalo' },
				  { isActive: true, 2016: '707.579', 2017: '270.604', 2018: '506.543', 2019: '2.511.141', 2020: '1.024.342', provinsi: 'Maluku' },
				  { isActive: false, 2016: '18.787', 2017: '315', 2018: '7.548', 2019: '238.113', 2020: '9.375', provinsi: 'Maluku Utara' },
				  { isActive: true, 2016: '16.644.130', 2017: '577.779', 2018: '4.652.415', 2019: '6.646.052', 2020: '773.031', provinsi: 'Papua' },
				  { isActive: false, 2016: '50.719', 2017: '97.390', 2018: '192.028', 2019: '898.894', 2020: '1.235.994', provinsi: 'Papua Barat' },
				  { isActive: true, 2016: '128.730.366', 2017: '24.661.563', 2018: '162.663.071', 2019: '624.113.986', 2020: '25.136.790', provinsi: 'TOTAL' },
		     ]
      }
    },
    
    methods: {
        updateHeader() {
            this.$store.commit('head/innerHeader', true)
        },
        
        handleScroll(e) {
      this.isScroll = window.scrollY || window.scrollTop
      let heightDoc = document.documentElement.offsetHeight - 250
      let bottomOfWindow = Math.ceil((window.scrollY || window.scrollTop) + window.innerHeight) >= heightDoc
      console.log(heightDoc)
      console.log(bottomOfWindow)
      if (bottomOfWindow) {
        this.scrolledToBottom = true
      } else {
        this.scrolledToBottom = false
      }
    },
    
    showEmisi(){
      this.emisi = true
      this.daerahOp = false
      this.sarana = false
    },
    showDaerahOp(){
      this.emisi = false
      this.daerahOp = true
      this.sarana = false
    },
    showSarana(){
      this.emisi = false
      this.daerahOp = false
      this.sarana = true
    },
        
        head() {
            return {
            title: 'Emisi CO2',
            }
        },
    },
    created() {
    this.$nextTick(function () {
      this.updateHeader()
    })
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
    
  }
</script>