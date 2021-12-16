import udanaFooter from '../assets/images/udana-footer.png'
import instagram from '../assets/images/instagram.png'
import linkedin from '../assets/images/linkedin.png'
import kominfo from '../assets/images/kominfo.png'
import pse from '../assets/images/pse.png'
import aludi from '../assets/images/aludi.png'
import iso from '../assets/images/iso.png'

function Footer(){
	return(<div style={{boxShadow:'0 -3px 20px 1px rgb(0 0 0 / 5%), 0 0px 0px 0px rgb(0 0 0 / 4%)'}}>
		<div  className="mt-24 pt-12  px-24" >
			<div className="md:grid space-y-6 md:space-y-0 gap-6 karla md:grid-cols-6">
				<div className="flex flex-nowrap space-y-4 flex-col">
					<div className="flex justify-center" >
						<img className="w-32" src={udanaFooter} alt=""/>
					</div>
					<div className="font-semibold shrink  text-xs text-center">PT. Dana Rintis Indonesia</div>
				</div>
				<div className="text-sm " karla >
					<p> Jl. KH. Hasyim Ashari No.17, Petojo Utara, Kecamatan Gambir, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta, 10130 </p> <p> E: <b>support@udana.id</b> </p> <p> W: <b>087709999430</b> </p>
				</div>	
				<div className="flex flex-col text-sm space-y-2">
					<b>Perusahaan</b>
					<p>Tentang</p>
					<p>Hubungi Kami</p>
					<p>Syarat & Ketentuan</p>
					<p>Kebijakan Privasi</p>
				</div>
				<div className="flex flex-col text-sm space-y-2">
					<b>Investor</b>
					<p>FAQ</p>
					<p>Resiko Investasi</p>
				</div>
				<div className="flex flex-col text-sm space-y-4">
					<b>Social Media</b>
					<div className="flex">
						<img className="w-8" src={instagram} alt=""/>
						<img className="w-8" src={linkedin} alt=""/>
					</div>	
				</div>
				<div className="flex flex-col text-sm space-y-4">
					<b>Didukung Oleh</b>
					<div className="flex flex-wrap">
						<img className="w-14" src={kominfo} alt=""/>
						<img className="w-14" src={pse} alt=""/>
						<img className="w-14" src={aludi} alt=""/>
						<img className="w-32" src={iso} alt=""/>
						
					</div>	
				</div>
			</div>
		</div>
		<div style={{fontSize:'14px'}} className="bg-gray-100 karla text-base text-gray-500  py-12 mt-12 py-8 px-24">
			<p>PT DANA RINTIS INDONESIA merupakan perusahaan berbadan hukum yang didirikan berdasarkan Hukum Republik Indonesia. Berdiri sebagai perusahaan yang masih dalam proses pendaftaran oleh Otoritas Jasa Keuangan (OJK) di Indonesia. Perusahaan menyediakan layanan antar muka (interface) sebagai penghubung pihak yang memberikan pendanaan dan pihak yang membutuhkan pendanaan meliputi pendanaan dari individu, organisasi, maupun badan hukum kepada individu atau badan hukum tertentu. Perusahaan tidak menyediakan segala bentuk saran atau rekomendasi pendanaan terkait pilihan-pilihan dalam situs ini. Isi dan materi yang tersedia pada situs Udana.id dimaksudkan untuk memberikan informasi dan tidak dianggap sebagai sebuah penawaran, permohonan, undangan, saran, maupun rekomendasi untuk pendanaan sekuritas, produk pasar modal, atau jasa keuangan lainya. Perusahaan dalam memberikan jasanya hanya terbatas pada fungsi administratif. Perusahaan tidak memberikan saran, memberi kewajiban atau kewajiban lainya untuk jasanya.</p> <br/>
			<p>Udana adalah platform urun dana bisnis yang hadir untuk membuka akses pendanaan dan investasi bagi semua kalangan berbasis teknologi informasi (equity crowdfunding) dimana pebisnis menawarkan saham bisnis kepada calon investor baik itu individu maupun organisasi:</p> <br/>
			<p>Penggunaan Udana diatur sesuai dengan Peraturan Otoritas Jasa Keuangan No. 37 Tahun 2018 Pasal 23 tentang Layanan Urun Dana melalui Penawaran Saham Berbasis Teknologi Informasi atau Equity Crowdfunding (“POJK 37/2018”).</p> <br/>
			
				<p>Dengan digunakannya layanan ini, kami menyatakan bahwa :</p>
				<ol type="1">
					<li>“OTORITAS JASA KEUANGAN TIDAK MEMBERIKAN PERNYATAAN MENYETUJUI ATAU TIDAK MENYETUJUI EFEK INI, TIDAK JUGA MENYATAKAN KEBENARAN ATAU KECUKUPAN INFORMASI DALAM LAYANAN URUN DANA INI. SETIAP PERNYATAAN YANG BERTENTANGAN DENGAN HAL TERSEBUT ADALAH PERBUATAN MELANGGAR HUKUM.”</li> <br/>
					<li>“INFORMASI DALAM LAYANAN URUN DANA INI PENTING DAN PERLU MENDAPAT PERHATIAN SEGERA. APABILA TERDAPAT KERAGUAN PADA TINDAKAN YANG AKAN DIAMBIL, SEBAIKNYA BERKONSULTASI DENGAN PENYELENGGARA.”; dan</li><br/>
					<li>“PENERBIT DAN PENYELENGGARA, BAIK SENDIRI-SENDIRI MAUPUN BERSAMA-SAMA, BERTANGGUNG JAWAB SEPENUHNYA ATAS KEBENARAN SEMUA INFORMASI YANG TERCANTUM DALAM LAYANAN URUN DANA INI.”.</li>
				</ol>
				<br/>
			<p className="text-center" >Copyright Udana.id © 2020 by All Rights Reserved.</p>
		</div>
	</div>
		)
}

export default Footer
