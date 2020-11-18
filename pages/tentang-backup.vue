<template>
  <div class="inner-page">
    <div class="page-desc">
      <b-container>
        <b-row>
          <b-col md="7">
            <h3>Tentang Sipongi+</h3>
            <h6>
              SiPongi bertujuan untuk mengantisipasi dan melakukan upaya
              pencegahan kebakaran hutan dengan lebih cepat sehingga bencana
              tersebut dapat dikurangi.
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
              <b-tab title="Direktorat PKHL" active>
                <b-row>
                  <b-col md="4" order-md="2">
                    <img
                      src="/kementerian-big.svg"
                      alt=""
                      class="img-fluid img-logo"
                    />
                  </b-col>
                  <b-col md="8" order-md="1">
                    <h6 class="title">
                      Direktorat Pengendalian Kebakaran Hutan dan Lahan
                    </h6>
                    <p>
                      Direktorat Pengendalian Kebakaran Hutan dan Lahan
                      merupakan salah satu direktorat yang berada di bawah
                      Direktorat Jenderal Pengendalian Perubahan Iklim (Ditjen
                      PPI). Berdasarkan Peraturan Menteri Lingkungan Hidup dan
                      Kehutanan Nomor : P.18/MenLHK-II/2015 tentang Organisasi
                      Dan Tata Kerja Kementerian Lingkungan Hidup Dan Kehutanan,
                      Direktorat Pengendalian Kebakaran Hutan dan Lahan
                      mempunyai tugas melaksanakan penyiapan perumusan,
                      pelaksanaan, koordinasi dan sinkronisasi kebijakan,
                      bimbingan teknis dan evaluasi bimbingan teknis, dan
                      supervisi pelaksanaan urusan di daerah bidang pengendalian
                      kebakaran hutan dan lahan.
                    </p>
                    <p>
                      Dalam melaksanakan tugas sebagaimana dimaksud dalam Pasal
                      980, Direktorat Pengendalian Kebakaran Hutan dan Lahan
                      menyelenggarakan fungsi:
                    </p>
                    <ul>
                      <li>
                        Penyiapan perumusan kebijakan pencegahan,
                        penanggulangan, sistem kemitraan dan masyarakat peduli
                        api, tenaga dan sarana prasarana pengendalian kebakaran
                        hutan dan lahan;
                      </li>
                      <li>
                        Penyiapan pelaksanaan kebijakan pencegahan,
                        penanggulangan, sistem kemitraan dan masyarakat peduli
                        api, tenaga dan sarana prasarana pengendalian kebakaran
                        hutan dan lahan;
                      </li>
                      <li>
                        Penyiapan koordinasi dan sinkronisasi kebijakan
                        pencegahan, penanggulangan, sistem kemitraan dan
                        masyarakat peduli api, tenaga dan sarana prasarana
                        pengendalian kebakaran hutan dan lahan;
                      </li>
                      <li>
                        Penyusunan norma, standar, prosedur dan kriteria
                        pencegahan, penanggulangan, sistem kemitraan dan
                        masyarakat peduli api, tenaga dan sarana prasarana
                        pengendalian kebakaran hutan dan lahan;
                      </li>
                      <li>
                        Pemberian bimbingan teknis dan evaluasi pemberian
                        bimbingan teknis pencegahan, penanggulangan, sistem
                        kemitraan dan masyarakat peduli api, tenaga dan sarana
                        prasarana pengendalian kebakaran hutan dan lahan;
                      </li>
                      <li>
                        Supervisi atas pelaksanaan urusan pencegahan,
                        penanggulangan, sistem kemitraan dan masyarakat peduli
                        api, tenaga dan sarana prasarana pengendalian kebakaran
                        hutan dan lahan di daerah;dan
                      </li>
                      <li>
                        Pelaksanaan administrasi Direktorat.
                      </li>
                    </ul>
                    <p>
                      Direktorat Pengendalian Kebakaran Hutan terdiri dari:
                    </p>
                    <ul>
                      <li>
                        Subdirektorat Perencanaan Pengendalian Kebakaran Hutan
                        dan Lahan;
                      </li>
                      <li>
                        Subdirektorat Pencegahan Kebakaran Hutan dan Lahan;
                      </li>
                      <li>
                        Subdirektorat Penanggulangan Kebakaran Hutan Dan Lahan;
                      </li>
                      <li>
                        Subdirektorat Sistem Kemitraan dan Masyarakat Peduli
                        Api;
                      </li>
                      <li>Subdirektorat Tenaga dan Sarana Prasarana;dan</li>
                      <li>Subbagian Tata Usaha.</li>
                    </ul>
                  </b-col>
                </b-row>
              </b-tab>
              <b-tab title="Manggala Agni">
                <b-row>
                  <b-col md="8">
                    <div class="nav-agni">
                      <b-link @click="showProfile" :class="{ 'active': profile }">Profil</b-link>
                      <b-link @click="showDaerahOp" :class="{ 'active': daerahOp }">Daerah Operasional</b-link>
                      <b-link @click="showSarana" :class="{ 'active': sarana }">Sarana & Prasarana</b-link>
                    </div>
                  </b-col>
                  <b-col lg="12">
                    <b-row v-if="profile">
                      <b-col lg="4" order-lg="2">
                        <div :class="[{ 'toBot' : scrolledToBottom }, { 'scrolling': isScroll  }, 'nav-content']">
                          <h3>Profil</h3>
                          <b-link v-scroll-to="'#pkhi'" to="#">Pengendalian Kebakaran Hutan Indonesia</b-link>
                          <b-link v-scroll-to="'#skhi'" to="#">Sejarah Kebakaran Hutan Indonesia</b-link>
                          <b-link v-scroll-to="'#ma'" to="#">Manggala Agni</b-link>
                          <b-link v-scroll-to="'#vnm'" to="#">Visi dan Misi</b-link>
                          <b-link v-scroll-to="'#kns'" to="#">Kebijakan dan Strategi</b-link>
                          <b-link v-scroll-to="'#kma'" to="#">Kegiatan Manggala Agni</b-link>
                          <b-link v-scroll-to="'#smart'" to="#">Satuan Manggala Agni Reaksi Taktis</b-link>
                          <b-link v-scroll-to="'#pnma'" to="#">Pengertian Nama Manggala Agni</b-link>
                          <b-link v-scroll-to="'#logo'" to="#">Logo BRIGDALKAR</b-link>
                        </div>
                      </b-col>
                      <b-col lg="8" order-lg="1">
                        <h5 class="title">
                          Profil
                        </h5>
                        <h6 class="subtitle" id="pkhi">Pengendalian Kebakaran Hutan Indonesia</h6>
                        <p>
                          Indonesia merupakan salah satu Negara besar di Benua Asia dan terbesar di kawasan Asia Tenggara. Letak geografisnya sangat stratgis karena berada di antara dua benua yaitu Asia dan Australia serta di antara dua samudra yaitu Indonesia dan Pasifik. Tersusun dari lebih 17.000 pulau yang membentang dari ujung barat Sumatera ke ujung paling timur Irian Jaya (Papua) dan ujung utara Kalimantan sampai ke ujung selatan Nusa Tenggara.
                        </p>
                        <p>
                          Sebagai Negara yang dilewati garis Khatulistiwa, Indonesia memiliki kawasan hutan tropis yang luas dan hutan tropika basah terluas ketiga di dunia. Kekayaan alamnya telah dikenal luas di dunia, terutama keanekaragaman hayatinya. Bappenas pada tahun 1993 mencatat bahwa Indonesia memiliki sekitar 10% dari jumlah jenis tumbuhan berbunga di dunia (25.000 jenis), 12% jenis mamalia dunia (515 jenis, 36% di antaranya adalah jenis endemik), 16% jenis reptile, 17% jenis burung (1531 jenis, 20% di antaranya endemik) dan sekitar 20% jenis ikan dunia.
                        </p>
                        <p>
                          Saat ini tercatat luas kawasan hutan 120 juta hektar dan 45 juta di antaranya akan dipertahankan sebagai hutan perawan. Banyak tantangan dalam melindungi hutan Indonesia, satu di antaranya adalah kebakaran.
                        </p>

                        <h6 class="subtitle" id="skhi">Sejarah Kebakaran Hutan Indonesia</h6>
                        <p>
                          Kebakaran hutan di Indonesia telah dikelola sejak sebelum negara ini merdeka. Pemerintah Hindia Belanda telah mengeluarkan beberapa peraturan tentang Kehutanan dan kebakaran hutan diantaranya:
                        </p>
                        <p>
                          Ordonansi Hutan Untuk Jawa dan Madura 1927 (Pasal 20, Ayat 1 dan 2)<br/>
                          Provinciale Bosverordening Midden Java (Pasal 14)<br/>
                          Rijkblad – Soerakarta Ongko 11 (1939)<br/>
                          Lombok Raad (1947)<br/>
                          Dewan Raja-Raja di Bali No. 9 (1948)<br/>
                          Sesudah proklamasi kemerdekaan, masalah kebakaran hutan ditangani oleh Jawatan Kehutanan dan selanjutnya oleh Direktorat Jenderal Kehutanan, Dep. Pertanian.
                        </p>
                        <p>
                          Pada tahun 1988, Direktorat Jenderal Kehutanan berubah menjadi Departemen Kehutanan. Kebakaran hutan ditangani oleh seksi Kebakaran Hutan (Eselon IV) pada Direktorat Perlindungan Hutan, Direktorat Jenderal Perlindungan Hutan dan Pelestarian Alam (PHPA). Pada masa itu sistem pengendalian kebakaran hutan mulai berkembang, meliputi pengembangan SDM melalui berbagai pelatihan bagi personil Kehutanan dan masyarakat serta pengadaan peralatan pengendalian kebaran hutan. Sistem pemadaman kebakaran dan udara dikembangkan dengan pesawat helikopter dan bamby bucket serta 2 unit FFK yang dioperasikan dengan pesawat Transall C-60.
                        </p>
                        <p>
                          Untuk menanggapi permasalahan kebakaran hutan (dan lahan) yang terus meningkat, maka pada tahun 1994 penanganan kebakaran hutab pada Direktorat Perlindungan Hutan ditingkatkan menjadi Eselon III yaitu Sub Direktorat Pengendalian Kebakaran Hutan dengan dua seksi yaitu Seksi Pencegahan Kebakaran dan Seksi Penanggulangan Kebakaran.
                        </p>
                        <p>
                          Pada periode itu Menteri Kehutanan juga membentuk Pusat Pengendalian Kebakaran Hutan Nasional (PUSDALKARHUTNAS) di tingkat Pusat dan diikuti oleh para Gubernur yang membentuk Pusat Pengendalian Kebakaran Hutan dan Lahan (PUSDALKARHUTLA) ddi tingkat provinsi serta Satuan Pelaksana Pengendalian Kebakaran Hutan dan Lahan (SATLAK DALKARHUTLA)di tingkat kabupaten di mana masing-masing memiliki Brigade Pemadaman Kebakaran Hutan.
                        </p>
                        <p>
                          Dipicu olehkebakaran hutan dan polusi asap tahun 1997-1998 di mana kebakaran diidentifikasi tidak hanya terjadi di hutan tetapi tetapi juga di lahan, khususnya kebun, maka Direktorat Jenderal Perkebunan yang sebelumnya berada di bawah Departemen Pertanian bergabung dan menjadi Departemen Kehutanan dan Perkebunan. Pada bulan Juli 1999 di bentuk Direktorat Penanggulangan Kebakaran Hutan dan Kebun. Selanjutnya, pada tahun 2004 berganti menjadi Direktorat Pengendalian Kebakaran Hutan.
                        </p>
                        <p>
                          Berdasarkan evaluasi bahwa Brigade Pemadaman Kebakaran Hutan yang ada masih tersebar dan tidak berada dalam satu garis komando yang jelas dari tingkat Pusat sampai lapangan, tidak adanya satu lembaga tunggal yang menangani kebakaran hutan dan lahan serta masih kurangnya sumber daya pengendalian kebakaran hutan dan lahan, maka Departemen Kehutanan kemudian membentuk Brigade Pengendalian kebakaran Hutan yang diberi nama MANGGALA AGNI.
                        </p>

                        <h6 class="subtitle" id="ma">Manggala Agni</h6>
                        <p>
                          Sesuai dengan pasal 47 Tahun 1999 tentang Kehutanan, perlindungan hutan dan kawasan dan kawasan hutan merupakan usaha untuk:
                        </p>
                        <p>
                          Mencegah dan membatasi kerusakan hutan, kawasan hutan dan hasil hutan yang disebabkan oleh perbuatan manusia, ternak, KEBAKARAN, daya-daya alam, hama serta penyakit; dan Mempertahankan dan menjaga hak-hak Negara, masyarakat dan perorangan atas hutan, kawasan hutan, hasil hutan, investasi serta perangkat yang berhubungan dengan pengelolaan hutan.
                        </p>
                        <p>
                          Berdasarkan undang-undang di atas, di mana perlindungan hutan salah satunya adalah membatasi dan mencegah kerusakan hutan akibat kebakaran serta kejadian kebakaran hutan setiap tahunnya merupakan ancaman yang harus segera diselesaikan, maka Departemen Kehutanan membentuk manggala Agni.
                        </p>
                        <p>
                          Manggala Agni adalah Brigade Pengendalian Kebakaran Hutan Indonesia yang dibentuk oleh Departemen Kehutanan pada tahun 2003.
                        </p>
                        <p>
                          Brigade ini dibentuk dalam rangka melaksanakan tugas pengendalian kebakaran hutan yang kegiatannya meliputi pencegahan, pemadaman dan penanganan pasca-kebakaran hutan.
                        </p>

                        <h6 class="subtitle" id="vnm">Visi dan Misi</h6>
                        <p>
                          Visi Manggala Agni<br/>
                          “Terwujudnya sistem pengendalian kebakaran hutan secara optimal dan terwujudnya kondisi masyarakat yang terlindung dari berbagai ancaman jiwa, raga dan harta benda serta terbebas dari pencemaran asap”
                        </p>
                        <p class="mb-0">
                          Misi Manggala Agni
                        </p>
                        <ul>
                          <li>
                            Melakukan pencegahan kebakaran hutan secara optimal dengan menitikberatkan pada peningkatan kesadaran semua pihak akan bahaya kebakaran baik terhadap sumber daya hutan maupun kehidupan masyarakat, bangsa dan negara serta pengelolaan hutan yang dapat menekan resiko kebakaran;
                          </li>
                          <li>
                            Memadamkan kebakaran hutan sedini mungkin dan progresif melalui pendayagunaan sumberdaya manusia yang profesional dan peralatan yang tepat guna dan berhasil guna;
                          </li>
                          <li>
                            Menangani pasca-kebakaran hutan dengan titik berat rehabilitasi kawasan bekas kebakaran dan penegakan hukum dengan dukungan sumber daya manusia yang profesional, perangkat peraturan perundang-undanganan dan pedoman-pedoman teknis.
                          </li>
                        </ul>

                        <h6 class="subtitle" id="kns">Kebijakan dan Strategi</h6>
                        <p class="mb-0">
                          Kebijakan Manggala Agni
                        </p>
                        <ul>
                          <li>
                            Pembangunan kelembagaan melalui pembentukan Brigade Pengendalian Kebakaran Hutan yang didukung dengan personil, sarana dan prasarana yang memadai.
                          </li>
                          <li>
                            Pemantapan operasional pengendalian kebakaran hutan yang meliputi pencegahan, pemadaman dan penanganan pasca-kebakaran.
                          </li>
                          <li>
                            Peningkatan peran serta dan pemberdayaan masyarakat.
                          </li>
                        </ul>
                        <p class="mb-0">
                          Strategi Manggala Agni
                        </p>
                        <ul>
                          <li>
                            Pengenalan kekuatan melalui kerjasama dengan semua pihak, pemberdayaan masyarakat serta kampanye
                          </li>
                          <li>
                            Pemantapan pelaksanaan oprasi penanggulangan kebakaran hutan melalui efektivitas pelaksanaan pencegahan, pemadaman maupun penanganan paska kebakaran atau rehabilitasi.
                          </li>
                          <li>
                            Pemantapan system meliputi penyempuranaan perundang-undangan, pembentukan lembaga pengendalian kebakaran hutan serta keja sama dengan pemerintahan daerah dan pemegang hak/izin.
                          </li>
                        </ul>
                        <p>
                          Berdasarkan peraturan pemerintahan nomor 45 tahun 2004 tentang perlindungan hutan, pengendalian kebaran hutan di Indonesia merupakan kewajiban dan tanggung jawab setiap orang. Pengelolaannya dilaksanakan secara berjenjangan sesuai dengan tanggung jawab pengelolaan wilayah kerja. Dari tingkat paling bawah pengendalian kebakaran hutan dilaksanakan dan menjadi tanggung jawab kesatuan pengelolaan hutan dan berjenjang ketingkat lebih tinggi yaitu kabupaten/kota oleh bupati/walikota, ditingkat provinsi oleh gubernur dan tingkat nasional oleh menteri kehutanan.
                        </p>
                        <p>
                          Peraturan pemerintahan nomor 4 tahun 2001 tentang pengendalian kerusakan dan/atau pencemaran lingkungan hidup yang berkaitan dengan kebakaran hutan dan atau lahan mengamanatkan hal yang sama untuk pengendalian kebakaran lahan dan hutan. Dalam hal ini, tanggung jawab menteri kehutanan adalah jika kebakaran lahan dan hutan telah melintasi batas provinsi dan batas Negara.
                        </p>
                        <p>
                          Direktorat pengendalian kebakaran hutan dibentuk dengan peraturan menteri kehutanan nomor P.13/Menhut-11/2005, tentang organisasi dan tata kerja departemen kehutanan, berada di bawah direktorat jendral perlindungan hutan dan konservasi alam (Ditjen PHKA). Dalam struktur organisasinya direktorat pengendalian kebakaran hutan mempunyai 4 Sub direktorat, 1 Sub Bagian tata usaha dan kelompok jabatan fungsional sebagai berikut :
                        </p>
                        <ul>
                          <li>
                            Sub direktorat program dan evaluasi
                            <span class="gray">Seksi program, Seksi evaluasi</span>
                          </li>
                          <li>
                            Sub di rektorat pencegahan dan penanggulangan dampak
                            <span class="gray">Seksi pencegahan, Seksi dampak</span>
                          </li>
                          <li>
                            Sub direktorat pemadam
                            <span class="gray">Seksi pemadaman wilayah I, Seksi pemadaman wilayah II</span>
                          </li>
                          <li>
                            Sub direktorat tenaga dan sarana prasaran
                            <span class="gray">Seksi tenaga, Seksi sarana dan prasarana</span>
                          </li>
                        </ul>

                        <h6 class="subtitle" id="kma">Kegiatan Manggala Agni</h6>
                        <p>
                          Dalam rangka pengendalian kebakaran hutan, pada dasarnya pola fikirnya adalah suatu rangkaian kegiatan yang di mulai dari pencegahan, yaitu upaya untuk mencegah terjadinya kebakaran hutan, pemadaman yaitu kegiatan untuk mematikan kebakaran hutan dan penanganan paska kebakaran yaitu upaya untuk identifikasi, mengevaluasi, rehabilitasi dan memantau lokasi kebakaran lahan dan hutan.
                        </p>
                        <p>
                          Untuk melaksanakan kegiatan tersebut diperlukaan kelembagaan yang jelas, baik mencakup perangkat lunak maupun perangak kerasnya. Pada dasarnya kegiatan pencegahan lebih diutamakan terjadinya kebakaran lebih baik dari pada kebakaran walau sekecil apapun
                        </p>
                        <ul>
                          <li>
                            Kelembagaan, Lembaga pengendalian kebakaran hutan yang dibentuk berupa wadah structural, oprasional dan fungsional kordinatif.kegiatan kelambagaan meliputi hal-hal yang menjadikan lembaga daerah oprasi Manggala Agnidalam keadaan siap untuk melaksanakan pengendalian kebakaran hutan. Kegiatan tersebut meliputi antara lain : Administrasi, Pembinaan personil, pemeliharaan peralatan serta pengembangan kegiatan pengendalian kebakaran hutan.
                          </li>
                          <li>
                            Pencegahan, Kegiatan pencegahan adalah upaya yang meliputi segala hal untuk mencegah terjadinya kebakaran hutan secara langsung maupun tidak langsung, kegiatannya antara lain kordinasi dengan para pihak, penyuluhan, kampanye, system informasi peringatan dini,Dll.
                          </li>
                          <li>
                            Pemadaman, Kegiatan pemadaman kebakaran hutan meliputi upaya oprasional dilapangan baik dalam rangka persiapan pemadaman maupun kegiatan langsung pada setiap kebakaran hutan. Kegiatannya antara lain : Patroli, pemadaman dini, pemadaman mandiri, pemadaman gabungan.
                          </li>
                          <li>
                            Penanganan pasca kebakaran, Kegiatan penanganan pasca kebakaran hutan meliputi kegiatan yang berkaitan dengan membantu penegakan hukum serta dalam rangka rehabilitasi hutan dan lahan bekas kebakaran. Kegiatannya meliputi antara lain pengumpulan bahan keterangan, identifikasi dan evaluasi serta pemantauan kebakaran hutan dan lahan
                          </li>
                        </ul>

                        <h6 class="subtitle" id="smart">Satuan Manggala Agni Reaksi Taktis</h6>
                        <p>
                          Dalam perkembangannya, Manggala Agni tidak hanya mengendalikan kebakaran di dalam kawasan hutan, khususnya kawasan konservasi, melainkan juga di lahan. Disamping itu, Manggala Agni juga melaksanakan tugas-tugas kemanusiaan seperti bantuan pertolongan pertama pada kecelakaan (P3K) dan penyelamatan (SAR).
                        </p>
                        <p>
                          Sebagai contoh, setelah terjadinya bencana alam gempa bumi dan tsunami di Nangroe Aceh Darussalam dan di Sumatra Utara pada tanggal 26 desember 2004, Manggala Agni serta melakukan langkah-langkah oprasi kemanusiaan untuk daera-daerah tersebut mulai tanggal 28 desember 2004 dan secara oprasional di lapangan selama 42 hari mulai tanggal 31 desember 2004 sampai dengan 11 februari 2005. berapa kegiatan dilaksanakan Manggala Agni antara lain evakuasi korban luka-luka maupun meninggal dunia, pemulihan fasilitas perkantora, membantu evakuasi amunisi POLRI, memberikan pengobatan dan memberikan bantuan makanan dan pakaian.
                        </p>
                        <p>
                          Berdasarkan hal tersebut dan perlunya pengendalian kebakaran hutan dan lahan secara cepat,efektif dan efisien maka pada 4 april 2006 di bentuk Satuan Manggala Agni Reaksi taktis (SMART). Satuan ini terdiri atas anggota Manggala Agni yang memiliki keterampilan gerak cepat sehingga sewaktu-waktu dapat dibentuk menjadi tim untuk mengatasi keadaan darurat kebakaran lahan dan hutan atau keadaan lain yang memerlukan penanganan khusus. Angota SMART tersebar disetiap daerah oprasi Manggala Agni sedikitnya 10 orang dan akan berkembang sesuai dengan kebutuhan dimasa mendatang.
                        </p>

                        <h6 class="subtitle" id="pnma">Pengertian Nama Manggala Agni</h6>
                        <p>
                          Manggala Agni (manggala = panglima, agni = api) mengandung pengertian bahwa sebagai panglima api, Manggala Agni mampu mengendalikan api. Kata kunci “mengendalikan” mengandung arti bahwa Manggala Agni melakukan langkah-langkah manajemen yang mencakup perencanaan, pengorganisasian, pelaksanaan dan pengawasan, tidak hanya pemadaman, tetapi juga pencegahan dan penanganan pasca-kebakaran hutan
                        </p>
                        <p>
                          Berdasarkan Peraturan Pemerintah Nomor: 45 Tahun 2004 tentang Perlindungan Hutan, kegiatan pengendalian kebakaran hutan terdiri dari:<br/>
                          Pencegahan<br/>
                          Pemadaman<br/>
                          Penanganan Pasca Kebakaran Hutan<br/>
                        </p>
                        <p>
                          Dalam perkembangannya, Manggala Agni juga melakukan kegiatan pencarian dan penyelamatan (SAR) seperti yang telah dilakukan pada Operasi Penanganan Bencana Gempa Bumi dan Tsunami di Nangroe Aceh Darussalam pada awal 2005. Dalam operasi, Manggala Agni berasal dari Sumut, Riau dan jambi selama 40 hari (1 Januari s/d 10 Februari 2005) melakukan antara lain:<br/>
                          Evakuasi lebih dari 2000 jenazah korban tsunami;<br/>
                          Pembersihan fasilitas perkantoran dan rumah sakit;<br/>
                          Membantu evakuasi amunisi POLRI;<br/>
                          Menyampaikan sumbangan dari Dep. Kehutanan;<br/>
                          Membantu Pengobatan korban baik dari jajaran kehutanan maupun masyarakat umum;<br/>
                        </p>

                        <h6 class="subtitle" id="logo">Logo Brigaldar</h6>
                        <img src="/big-logo.svg" alt="" class="img-fluid mb-3">
                        <p>
                          Logo BRIGDALKAR adalah segi empat bujur sangkar dengan gambar didalamnya mascot Si Pongi dan nyala api serta tulisan MANGGALA AGNI di bawahnya.
                        </p>
                        <p>
                          Segi empat bujur sangkar melambangkan dua hal pokok yaitu: Empat factor terjadinya api yaitu bahan bakar, oksigen, panas dan manusia. Kedudukan keempat factor tersebut tidak digambarkan secara jelas dan berurutan di dalam segi empat tersebut untuk menunjukkan bahwa keempat factor mempunyai pengaruh sama besar untuk terjadinya api. Bidang segi empat melambangkan perisai sebagai ungkapan harapan bahwa BRIGDALKAR menjadi perisai inti atau kekuatan terdepan terhadap ancaman kebakaran hutan.
                        </p>
                        <p>
                          Si Pongi adalah mascot nasional pengendalian kebakaran hutan yang telah ditetapkan dengan Keputusan Menteri Kehutanan No 365/Kpts=ll/1996. Yang mengambil gambar Orang Utan yang memakai topi lapangan “Jagawana” . “PONGI” diambil dari nama internasional Orang Utan yaitu Pongo pygmaeus yang termasuk famili Pongoideaeu. Adapun dasar pemilihan mascot diantaranya adalah:
                        </p>
                        <ul>
                          <li>
                            Orang Utan adalah jenis satwa liar yang dilindungi dan termasuk kategori appendix I, penyebarannya terbatas di Sumatera dan Kalimantan, dan sudah cukup popular bagi masyarakat Indonesia maupun masyarakat dunia.<br/>
                            Satwa ini hidupnya sangat bergantung pada hutan hujan tropis dan makanan utamanya adalah buah-buahan dan dedaunan serta membuat sarang di atas pohon.<br/>
                            Jenis hewan ini dikenal cukup cerdik dibandingkan dengan primate lainnya. Habitatnya di Kalimantan Timur pernah rusak berat akibat kebakaran hutan pada tahun 1982/1983, yaitu kurang lebih 3,6 juta Hektar selama 6 bulan.<br/>
                            Telah menjadi isyu internasional bahwa keberadaan Orang Utan harus diselamatkan dari gangguan yang salah satunya adalah akibat kebakaran.
                          </li>
                          <li>
                            Api di dalam bingkai menggambarkan bahwa selama api masih dalam kendali ia aman dan bermanfaat bagi umat manusia dan makhluk hidup lainnya. Oleh sebab itu BRIGDALKAR sebagai kekuatan terdepan bersama seluruh komponen masyarakat harus berupaya agar api selalu dalam pengendalian.
                          </li>
                          <li>
                            Tulisan MANGGALA AGNI di luar bawah segi empat dengan panjang tulisan sama dengan lebar sisi segi empat mengisyaratkan bahwa:<br/>
                            BRIGDALKAR menyangga beban dan tanggung jawab pengelolaan kebakaran hutan<br/>
                            BRIGDALKAR berada di luar empat faktor penyebab kebakaran, tetapi begitu dekat untuk menjadi pengarah dan pengawas agar keempat factor tersebut selalu dalam kendali<br/>
                            BRIGDALKAR selalu bekerja sesuai batas-batas di dalam aturan dan harus memahami persis keempat factor tersebut diatas, tetapi tetap terbuka bagi masukan-masukan dari luar.
                          </li>
                          <li>
                            Warna hijau melambangkan air sebagai pemadam, hijaunya hutan yang tetap di jaga dan dipertahankan, keteduhan jiwa dan suasana yang selalu diciptakan oleh BRIGDALKAR
                          </li>
                        </ul>
                      </b-col>
                    </b-row>
                    <b-row v-if="daerahOp">
                      <b-col md="8">
                        <h6 class="title">
                          Daerah Operasional
                        </h6>
                        <div class="daerah-item">
                          <h5>Sumatra Utara-01</h5>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Pematang Siantar (PST-01)</p>
                              <span class="alamat">Jl. Siantar-Parapat Km 166 Simpang Desa Sibaginding, Simalungan</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu</span>
                              <span class="count">4</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Anggota </span>
                              <span class="count">60</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Labuhan Batu (LBT-01)</p>
                              <span class="alamat">Jl. Kota Pinang-Padang Sidempuan Desa Padang Rie, Kec. Kotapinang Labuhan Batu</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu</span>
                              <span class="count">4</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Anggota </span>
                              <span class="count">60</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Sibolangit (SBL-01)</p>
                              <span class="alamat">Jl. Medan Brastagi Km 38 Sibolangit, Deli Serdang</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu</span>
                              <span class="count">4</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Anggota </span>
                              <span class="count">60</span>
                            </b-col>
                          </b-row>
                        </div>
                        <div class="daerah-item">
                          <h5>Riau-02</h5>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Pekanbaru (PKU-02)</p>
                              <span class="alamat">Jl. Sultan Syarif Qasim, Minas, Siak</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu</span>
                              <span class="count">2</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Anggota </span>
                              <span class="count">30</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Siak (SSI-02)</p>
                              <span class="alamat">Jl. Baru Sungai Pinang, Siak Sri Indrapura</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu</span>
                              <span class="count">4</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Anggota </span>
                              <span class="count">60</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Dumai (DMI-02)</p>
                              <span class="alamat">Jl. Pinang Kampai (Bukit Jin) Kota Dumai telp. (0765) 34527</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu</span>
                              <span class="count">4</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Anggota </span>
                              <span class="count">60</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Rengat (RGT-02)</p>
                              <span class="alamat">Jl. Seminai No. 40 Pematang Reba, 29351 Telp. (0769) 34174</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu</span>
                              <span class="count">4</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Anggota </span>
                              <span class="count">60</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Batam (BTM-02)</p>
                              <span class="alamat">Jl. Ir Sutami-Sekupang (Depan Dispenda) Batam, Telp (0778) 323091</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu</span>
                              <span class="count">2</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Anggota </span>
                              <span class="count">30</span>
                            </b-col>
                          </b-row>
                        </div>
                        <div class="daerah-item">
                          <h5>Jambi-03</h5>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Kota Jambi (KJB-03)</p>
                              <span class="alamat">	Jl. Lingkar Barat Pal 10 Kec. Kota Baru Kotamadya Jambi</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu</span>
                              <span class="count">2</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Anggota </span>
                              <span class="count">30</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Muara Bulian (MBL-03)</p>
                              <span class="alamat">Jl. Lintas Muara Tembesi, Kec Tembesi, Kab. Batanghari</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu</span>
                              <span class="count">4</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Anggota </span>
                              <span class="count">60</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Sarolangon (SRL-03)</p>
                              <span class="alamat">Kompleks Perkantoran Pemda Sarolangun, Gunung Kembang Sarolangun</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu</span>
                              <span class="count">4</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Anggota </span>
                              <span class="count">60</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Muara Tebo (MTB-03)</p>
                              <span class="alamat">	Kompleks Perkantoran Pemda Tebo, Jl. Lintas Tebo, Muara Bungo Km 13 Tebo</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu</span>
                              <span class="count">2</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Anggota </span>
                              <span class="count">30</span>
                            </b-col>
                          </b-row>
                        </div>
                        <div class="daerah-item">
                          <h5>Kalimantan Barat-04</h5>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Pontianak (PTK-04)</p>
                              <span class="alamat">	Jl. Rasau Jaya Umum Km 26, Kec Rasau jaya, Pontianak.</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu</span>
                              <span class="count">2</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Anggota </span>
                              <span class="count">30</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Sintang (STG-04)</p>
                              <span class="alamat">Jl. Sintang Putussibau Akcaya I, Km 1, Sintang</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu</span>
                              <span class="count">4</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Anggota </span>
                              <span class="count">60</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Singkawang (SKW-04)</p>
                              <span class="alamat">Jl. Bengkayang Kel Bagak Sahwa, Singkawang Timur.</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu</span>
                              <span class="count">4</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Anggota </span>
                              <span class="count">60</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Ketapang (KTP-04)</p>
                              <span class="alamat">Jl. Wolter Monginsidi (ujung THR) Kel. Kauman</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu</span>
                              <span class="count">2</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Anggota </span>
                              <span class="count">30</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Semitau (SMT-04)</p>
                              <span class="alamat">Jl. Dogom Siregar No. 45 Semitau, Kapuas Hulu</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu</span>
                              <span class="count">4</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Anggota </span>
                              <span class="count">60</span>
                            </b-col>
                          </b-row>
                        </div>
                        <div class="daerah-item">
                          <h5>Kalimantan Tengah-05</h5>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Palangkaraya (PLK-05)</p>
                              <span class="alamat">Jl. Mahir Mahar Km 7.8, Kalampangan, Palangkaraya</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu</span>
                              <span class="count">2</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Anggota </span>
                              <span class="count">30</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Kapuas (KPS-05)</p>
                              <span class="alamat">	Jl. Panti Rumpi No. 44 Kuala Kapuas</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu</span>
                              <span class="count">4</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Anggota </span>
                              <span class="count">60</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Muara Teweh (MTW-05)</p>
                              <span class="alamat">Jl. Raya Kandui, Muara Teweh Km 6.5</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu</span>
                              <span class="count">4</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Anggota </span>
                              <span class="count">60</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Pangkalanbun (PKB-05)</p>
                              <span class="alamat">Jl. Pasir Panjang No. 1 Pangkalan Bun</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu</span>
                              <span class="count">4</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Anggota </span>
                              <span class="count">60</span>
                            </b-col>
                          </b-row>
                        </div>
                        <div class="daerah-item">
                          <h5>Sulawesi Selatan dan Sulawesi Barat-06</h5>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Gowa (GWA-06)</p>
                              <span class="alamat">Desa Lana Kec. Parang Looe Kab Gowa</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu</span>
                              <span class="count">4</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Anggota </span>
                              <span class="count">60</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Maili (MLI-06)</p>
                              <span class="alamat">Jl. Poros Malino Bili-Bili Parangloe, Gowa</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu</span>
                              <span class="count">4</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Anggota </span>
                              <span class="count">60</span>
                            </b-col>
                          </b-row>
                        </div>
                        <div class="daerah-item">
                          <h5>Kalimantan Selatan-07</h5>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Tanah Laut (TNL-07)</p>
                              <span class="alamat">Jl. A. Yani desa Ambungan Kec. Pleihari Kab. Tanah Laut</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu</span>
                              <span class="count">4</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Anggota </span>
                              <span class="count">60</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Tanah Bumbu (TNB-07)</p>
                              <span class="alamat">Jl. Transmigrasi Km 12 Desa Sari Gadung Kec. Batulicin, Kab. Tanah Bumbu</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu</span>
                              <span class="count">4</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Anggota </span>
                              <span class="count">60</span>
                            </b-col>
                          </b-row>
                        </div>
                        <div class="daerah-item">
                          <h5>Sumatera Selatan-08</h5>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Banyuasin (BNS-08)</p>
                              <span class="alamat">	Jl. Komplek Perkantoran Desa Mulia Agung Pangkalan Balai, Banyuasin</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu</span>
                              <span class="count">4</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Anggota </span>
                              <span class="count">60</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Musi Banyuasin (MBS-08)</p>
                              <span class="alamat">Jl. Raya Jambi Km 205 Kel. Bayung Lincir, Kab. Muba</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu</span>
                              <span class="count">4</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Anggota </span>
                              <span class="count">60</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Ogan Kormiring Ilir (OKI-08)</p>
                              <span class="alamat">Desa Kolaban/Kolaraya, Kayu Manis, OKI</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu</span>
                              <span class="count">4</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Anggota </span>
                              <span class="count">60</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Lahat (LHT-08)</p>
                              <span class="alamat">Jl. Lintas Barat Desa Muara Maung, Merapi, Lahat</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu</span>
                              <span class="count">4</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Anggota </span>
                              <span class="count">60</span>
                            </b-col>
                          </b-row>
                        </div>
                        <div class="daerah-item">
                          <h5>Balai KSDA/TN</h5>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Balai Besar KSDA Jawa Barat</p>
                              <span class="alamat">Jawa Barat</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Kekuatan Regu</span>
                              <span class="count">2</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu Gajah</span>
                              <span class="count">0</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">	Balai Besar KSDA Jawa Timur</p>
                              <span class="alamat">Jawa Timur</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Kekuatan Regu</span>
                              <span class="count">0</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu Gajah</span>
                              <span class="count">0</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Balai KSDA Sumatera Barat</p>
                              <span class="alamat">Sumatera Barat</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Kekuatan Regu</span>
                              <span class="count">2</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu Gajah</span>
                              <span class="count">0</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Balai KSDA Bengkulu</p>
                              <span class="alamat">	Bengkulu</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Kekuatan Regu</span>
                              <span class="count">2</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu Gajah</span>
                              <span class="count">2</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Balai KSDA Sulawesi Utara</p>
                              <span class="alamat">	Sulawesi Utara</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Kekuatan Regu</span>
                              <span class="count">2</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu Gajah</span>
                              <span class="count">0</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Balai KSDA Jawa Tengah</p>
                              <span class="alamat">	Jawa Tengah</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Kekuatan Regu</span>
                              <span class="count">2</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu Gajah</span>
                              <span class="count">0</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Balai KSDA Jogjakarta</p>
                              <span class="alamat">	DI Jogjakarta</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Kekuatan Regu</span>
                              <span class="count">0</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu Gajah</span>
                              <span class="count">0</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Balai KSDA Lampung</p>
                              <span class="alamat">	Lampung</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Kekuatan Regu</span>
                              <span class="count">0</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu Gajah</span>
                              <span class="count">0</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">	Balai Besar Taman Nasional Gunung Gede Pangrango</p>
                              <span class="alamat">	Jawa Barat</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Kekuatan Regu</span>
                              <span class="count">0</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu Gajah</span>
                              <span class="count">0</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">		Balai Besar Taman Nasional Bromo Tengger Semeru</p>
                              <span class="alamat">Jawa Timur</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Kekuatan Regu</span>
                              <span class="count">0</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu Gajah</span>
                              <span class="count">0</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Balai Taman Nasional Alas Purwo</p>
                              <span class="alamat">Jawa Timur</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Kekuatan Regu</span>
                              <span class="count">2</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu Gajah</span>
                              <span class="count">0</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Balai Taman Nasional Baluran</p>
                              <span class="alamat">Jawa Timur</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Kekuatan Regu</span>
                              <span class="count">2</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu Gajah</span>
                              <span class="count">0</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Balai Taman Nasional Bali Barat</p>
                              <span class="alamat">Bali</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Kekuatan Regu</span>
                              <span class="count">2</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu Gajah</span>
                              <span class="count">0</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">	Balai Taman Nasional Rinjani</p>
                              <span class="alamat">Sumatera Barat</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Kekuatan Regu</span>
                              <span class="count">2</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu Gajah</span>
                              <span class="count">0</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">	Balai Taman Nasional Gunung Halimun Salak</p>
                              <span class="alamat">	Jawa Barat</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Kekuatan Regu</span>
                              <span class="count">2</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu Gajah</span>
                              <span class="count">0</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">	Balai Taman Nasional Bukit Tiga Puluh</p>
                              <span class="alamat">	Riau</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Kekuatan Regu</span>
                              <span class="count">2</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu Gajah</span>
                              <span class="count">0</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Balai Taman Nasional Gunung Palung</p>
                              <span class="alamat">Kalimantan Barat</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Kekuatan Regu</span>
                              <span class="count">2</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu Gajah</span>
                              <span class="count">0</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">	Balai Taman Nasional Way-Kambas</p>
                              <span class="alamat">Lampung</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Kekuatan Regu</span>
                              <span class="count">2</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu Gajah</span>
                              <span class="count">2</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Balai Taman Nasional Gunung Ciremai</p>
                              <span class="alamat">Jawa Barat</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Kekuatan Regu</span>
                              <span class="count">0</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu Gajah</span>
                              <span class="count">0</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Balai Taman Nasional Gunung Merbabu</p>
                              <span class="alamat">Jawa Tengah</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Kekuatan Regu</span>
                              <span class="count">0</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu Gajah</span>
                              <span class="count">0</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">	Balai Taman Nasional Gunung Merapi</p>
                              <span class="alamat">DI jogjakarta</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Kekuatan Regu</span>
                              <span class="count">0</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu Gajah</span>
                              <span class="count">0</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Balai Taman Nasional Rawa Aopa</p>
                              <span class="alamat">Sulawesi Tenggara</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Kekuatan Regu</span>
                              <span class="count">0</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu Gajah</span>
                              <span class="count">0</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Balai Taman Nasional Kutai</p>
                              <span class="alamat">Kalimantan Timur</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Kekuatan Regu</span>
                              <span class="count">0</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu Gajah</span>
                              <span class="count">0</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Balai Taman Nasional Sebangau</p>
                              <span class="alamat">Kalimantan Tengah</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Kekuatan Regu</span>
                              <span class="count">0</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu Gajah</span>
                              <span class="count">0</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Balai Taman Nasional Manupeu Tanah Daru</p>
                              <span class="alamat">	NTT</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Kekuatan Regu</span>
                              <span class="count">0</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu Gajah</span>
                              <span class="count">0</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">	Balai Taman Nasional Tesso Nillo</p>
                              <span class="alamat">	Riau</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Kekuatan Regu</span>
                              <span class="count">0</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu Gajah</span>
                              <span class="count">0</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">		Balai Taman Nasional Tanjung Puting</p>
                              <span class="alamat">	Kalimantan Tengah</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Kekuatan Regu</span>
                              <span class="count">0</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu Gajah</span>
                              <span class="count">0</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Balai Taman Nasional Laiwangi Wanggameti</p>
                              <span class="alamat">NTT</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Kekuatan Regu</span>
                              <span class="count">0</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu Gajah</span>
                              <span class="count">0</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">	Balai Taman Nasional Berbak</p>
                              <span class="alamat">Jambi</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Kekuatan Regu</span>
                              <span class="count">2</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu Gajah</span>
                              <span class="count">0</span>
                            </b-col>
                          </b-row>
                          <b-row>
                            <b-col md="6">
                              <p class="heading">Balai Taman Nasional Sembilang</p>
                              <span class="alamat">Sumatera Selatan</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Kekuatan Regu</span>
                              <span class="count">0</span>
                            </b-col>
                            <b-col md="3" cols="6">
                              <span class="jumlah">Jumlah Regu Gajah</span>
                              <span class="count">0</span>
                            </b-col>
                          </b-row>
                        </div>
                      </b-col>
                    </b-row>
                    <b-row v-if="sarana">
                      <b-col md="12">
                        Sarana
                      </b-col>
                    </b-row>
                  </b-col>
                </b-row>
              </b-tab>
              <b-tab title="Struktur Organisasi">
                <b-row>
                  <b-col md="8"> 
                    <img src="/so.svg" alt="" class="img-fluid">
                  </b-col>
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
      isScroll: null,
      scrolledToBottom: false,
      profile: true,
      daerahOp: false,
      sarana: false,
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
    showProfile(){
      this.profile = true
      this.daerahOp = false
      this.sarana = false
    },
    showDaerahOp(){
      this.profile = false
      this.daerahOp = true
      this.sarana = false
    },
    showSarana(){
      this.profile = false
      this.daerahOp = false
      this.sarana = true
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
  head() {
    return {
      title: 'Tentang',
    }
  },
}
</script>
