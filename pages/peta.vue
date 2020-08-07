<template>
	<div>
		<div class="sidebar-map">
			<div class="logo">
				<img src="/logo.svg" alt="">
				<img src="/logo-text.svg" alt="">
			</div>
			<b-link class="main its-new link-one" @click="openSidebarOne">
				<div class="image">
					<img src="/fire.svg" alt="">
					<span class="notif">4</span>
				</div>
				<h6>Peringatan Kebakaran</h6>
			</b-link>
			<b-link class="main link-two" @click="openSidebarTwo">
				<div class="image">
					<img src="/cowboy-hat.svg" alt="">
					<span class="notif">4</span>
				</div>
				<h6>Kegiatan Pemadamam</h6>
			</b-link>
			<b-link class="main link-three" @click="openSidebarThree">
				<div class="image">
					<img src="/cari.svg" alt="">
					<span class="notif">4</span>
				</div>
				<h6>Cari</h6>
			</b-link>
			<b-link to="/" class="hide">
				<img src="/mini_arrow_left-gray.svg" alt="">
			</b-link>

			<div class="sidebar-slide sidebar-one">
				<div class="content-head">
					<b-link class="close" @click="openSidebarOne"><i class="fas fa-times"></i></b-link>
					<h6>Peringatan Kebakaran</h6>
					<b-link class="status active">Terra/Aqua</b-link>
					<b-link class="status active">NPP</b-link>
					<b-link class="status">NOAA</b-link>
				</div>

				<div class="content-list">
					<b-link class="list-item">
						<h6>Malang - Jawa Timur</h6>
						<p>Terra/Aqua</p>
						<span class="count">1</span>
					</b-link>
					<b-link class="list-item">
						<h6>Pontianak - Kalimantan Barat</h6>
						<p>NPP</p>
						<span class="count">3</span>
					</b-link>
					<b-link class="list-item">
						<h6>Samarinda - Kalimantan Timur</h6>
						<p>Terra/Aqua</p>
						<span class="count">2</span>
					</b-link>
				</div>
			</div>

			<div class="sidebar-slide sidebar-two">
				<div class="content-head">
					<b-link class="close" @click="openSidebarTwo"><i class="fas fa-times"></i></b-link>
					<h6>Cari</h6>
					<p>Pencarian lokasi peringatan kebakaran</p>
				</div>

				<div class="content-list">
					<input type="search" class="form-control search" name="" id="" placeholder="Cari Lokasi...">
					<p class="not-found">Masukkan pencarian dan tekan enter untuk menemukan dataset atau lokasi …</p>
				</div>
			</div>

			<div class="sidebar-slide sidebar-three big">
				<div class="content-head">
					<b-link class="close" @click="openSidebarThree"><i class="fas fa-times"></i></b-link>
					<h6>Kegiatan Pemadaman</h6>
					<p>Pencarian lokasi peringatan kebakaran</p>
				</div>

				<div class="content-list">
					<b-row>
						<b-col md="6" v-for="blog in blogs" :key="blog.id">
							<b-link to="" class="blog-item">
								<div class="image" :style="{backgroundImage: `url(${ blog.image })`}"></div>
								<h5>{{ blog.title }}</h5>
								<span>{{ blog.date }}</span>
							</b-link>
						</b-col>
					</b-row>
				</div>
			</div>
		</div>
    <div class="map-wrap" style="height: 100vh">
			<div class="legend-wrap">
				<b-link class="legend-head" @click="toggleOpen">
					<img src="/windows.svg" alt="" class="hides">
					<h6>Legenda</h6>
					<img src="/arrow-serong.svg" alt="" class="shown">
				</b-link>
				<div class="legend-body">
					<div class="legend-item-contain">
						<div class="legend-item">
							<img src="/marker-blue.svg" alt="">
							<h6>Aman</h6>
							<p>Proin ex ipsum, facilisis id tincidunt sed, vulputate in lacus.</p>
						</div>
						<div class="legend-item">
							<img src="/marker-green.svg" alt="">
							<h6>Waspada</h6>
							<p>Proin ex ipsum, facilisis id tincidunt sed, vulputate in lacus.</p>
						</div>
						<div class="legend-item">
							<img src="/marker-yellow.svg" alt="">
							<h6>Siaga</h6>
							<p>Proin ex ipsum, facilisis id tincidunt sed, vulputate in lacus.</p>
						</div>
						<div class="legend-item">
							<img src="/marker-red.svg" alt="">
							<h6>Bahaya</h6>
							<p>Proin ex ipsum, facilisis id tincidunt sed, vulputate in lacus.</p>
						</div>
					</div>
					<div class="filter-wrap">
            <div class="select-wrap">
              <label class="mr-sm-2">Dengan periode data</label>
              <b-form-select
                class="mb-2 mr-sm-2 mb-sm-0 big"
                v-model="periodeData"
                :options="['24 Jam Terakhir', '24 Jam Terakhir', '24 Jam Terakhir', '24 Jam Terakhir']"
              ></b-form-select>
            </div>
            <div class="select-wrap">
              <label class="mr-sm-2">Menampikan data dengan tingkat kepercayaan</label>
              <b-form-select
                class="mb-2 mr-sm-2 mb-sm-0"
                v-model="trustData"
                :options="['>= 80%', '>= 70%', '>= 60%', '>= 50%']"
              ></b-form-select>
            </div>
					</div>
				</div>
			</div>
			<no-ssr>
				<l-map ref="mapSipongi" :zoom=5 :center="centerMap">
					<l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
					<v-marker-cluster>
						<l-marker :lat-lng="[-6.893605,107.585335]" :icon="redIcon">
							<l-popup>Hello!</l-popup>
						</l-marker>
						<l-marker :lat-lng="[-6.893999, 107.582707]" :icon="blueIcon">
							<l-popup>Hello!</l-popup>
						</l-marker>
						<l-marker :lat-lng="[-6.893988, 107.588222]" :icon="blueIcon">
							<l-popup>Hello!</l-popup>
						</l-marker>
						<l-marker :lat-lng="[-6.867284, 107.236684]" :icon="greenIcon">
							<l-popup>Hello!</l-popup>
						</l-marker>
						<l-marker :lat-lng="[-6.869107, 107.222648]" :icon="yellowIcon">
							<l-popup>Hello!</l-popup>
						</l-marker>
					</v-marker-cluster>
					<l-polygon
						:lat-lngs="polygon.latlngs"
						:color="polygon.color"
					/>
					<!-- <l-marker :lat-lng="[-6.892732, 107.586429]"></l-marker> -->
				</l-map>
			</no-ssr>
    </div>
	</div>
</template>

<script>
let L = { icon(){} };
if (process.browser) L = require('leaflet');

export default {
  data(){
    return{
			centerMap: [-2.548926, 118.0148634],
			periodeData: "",
			trustData: "",
      redIcon:  L.icon({
        iconUrl: '/marker-red.svg',
        iconSize:     [40, 40],
        // iconAnchor:   [21, 35],
        // popupAnchor:  [-3, -76]
      }),
      blueIcon:  L.icon({
        iconUrl: '/marker-blue.svg',
        iconSize:     [40, 40],
        // iconAnchor:   [21, 35],
        // popupAnchor:  [-3, -76]
      }),
      greenIcon:  L.icon({
        iconUrl: '/marker-green.svg',
        iconSize:     [40, 40],
        // iconAnchor:   [21, 35],
        // popupAnchor:  [-3, -76]
      }),
      yellowIcon:  L.icon({
        iconUrl: '/marker-yellow.svg',
        iconSize:     [40, 40],
        // iconAnchor:   [21, 35],
        // popupAnchor:  [-3, -76]
      }),
      polygon: {
        latlngs: [
          [-6.890985, 107.586215],
          [-6.893999, 107.582707],
          [-6.893988, 107.588222],
        ],
        color: "#ff00ff",
      },
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
	methods: {
		toggleOpen(){
		  var legend = document.querySelector(".legend-wrap")
    
      legend.classList.toggle('open')
		},
		openSidebarOne(){
		  var sidebar = document.querySelector(".sidebar-one")
		  var sidebar2 = document.querySelector(".sidebar-two")
		  var sidebar3 = document.querySelector(".sidebar-three")
			var link = document.querySelector(".link-one")
			var link2 = document.querySelector(".link-two")
			var link3 = document.querySelector(".link-three")
			var map = document.querySelector(".map-wrap")
    
			if(map.classList.contains('openSide') && (sidebar2.classList.contains('opened') || sidebar3.classList.contains('opened'))){
				sidebar2.classList.remove('opened')
				sidebar3.classList.remove('opened')
				link2.classList.remove('active')
				link3.classList.remove('active')
				map.classList.remove('big')
				link.classList.add('active')
				sidebar.classList.add('opened')
			} else {
				sidebar.classList.toggle('opened')
				map.classList.toggle('openSide')
				link.classList.toggle('active')
			}
		},
		openSidebarTwo(){
		  var sidebar = document.querySelector(".sidebar-one")
		  var sidebar2 = document.querySelector(".sidebar-two")
		  var sidebar3 = document.querySelector(".sidebar-three")
			var link = document.querySelector(".link-one")
			var link2 = document.querySelector(".link-two")
			var link3 = document.querySelector(".link-three")
			var map = document.querySelector(".map-wrap")
    
			if(map.classList.contains('openSide') && (sidebar.classList.contains('opened') || sidebar3.classList.contains('opened'))){
				sidebar.classList.remove('opened')
				sidebar3.classList.remove('opened')
				link.classList.remove('active')
				link3.classList.remove('active')
				map.classList.remove('big')
				link2.classList.add('active')
				sidebar2.classList.add('opened')
			} else {
				sidebar2.classList.toggle('opened')
				map.classList.toggle('openSide')
				link2.classList.toggle('active')
			}
		},
		openSidebarThree(){
		  var sidebar = document.querySelector(".sidebar-one")
		  var sidebar2 = document.querySelector(".sidebar-two")
		  var sidebar3 = document.querySelector(".sidebar-three")
			var link = document.querySelector(".link-one")
			var link2 = document.querySelector(".link-two")
			var link3 = document.querySelector(".link-three")
			var map = document.querySelector(".map-wrap")
    
			if(map.classList.contains('openSide') && (sidebar.classList.contains('opened') || sidebar2.classList.contains('opened'))){
				sidebar.classList.remove('opened')
				sidebar2.classList.remove('opened')
				link.classList.remove('active')
				link2.classList.remove('active')
				map.classList.add('big')
				link3.classList.add('active')
				sidebar3.classList.add('opened')
			} else {
				sidebar3.classList.toggle('opened')
				map.classList.toggle('openSide')
				map.classList.toggle('big')
				link3.classList.toggle('active')
			}
		}
	}
}
</script>
