import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Heading from './components/Heading'
import Feature from './components/Feature'
import CardGrid from './components/CardGrid'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div >
      <Hero>
        <div className="md:mx-20 mx-4">
          <Navbar/> 
          <Heading/>  
        </div>
      </Hero>
      <div className="md:mx-14 mx-3">    
        <Feature/>
        <div className="text-center my-24 space-y-6">
          <div className="text-4xl ubuntu font-bold">Siap Memulai Berbisnis?</div>
          <div className="text-gray-400 karla text-xl ">Tentukan bisnis waralaba pilihan Anda sekarang</div>
          <hr/>
          <CardGrid/>
          <div className="text-xl  font-bold text-yellow-400 flex justify-center">
            <p className="border-b-2 karla border-yellow-400" >  Lihat Semua</p>
          </div>
        </div>
        <Contact/>
      </div>
        <Footer/>
    </div>
  );
}

export default App;
