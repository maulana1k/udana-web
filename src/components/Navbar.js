import udanaLogo from '../assets/images/udana-logo.png'
function Navbar(){
    return(
        <div style={{fontFamily:'Karla'}} className="flex py-6 justify-between">
            <div className="flex space-x-10" >
                <img src={udanaLogo} alt="logo" className="h-10"/>
            <div className="md:flex text-white items-center font-bold space-x-10 hidden">
                <a href="#">Waralaba</a>
                <a href="#">FAQ</a>
                <a href="#">Tentang</a>
            </div>
            </div>
            <div className="md:flex items-center font-bold space-x-6 text-white ">
                <a href="#" className="border-2 py-2 px-4 hover:bg-white hover:text-gray-800 rounded-lg">Masuk</a>
                <button className="bg-yellow-400 border-2 border-yellow-400 font-bold hover:bg-yellow-500 px-4 rounded-lg py-2" >Mulai Daftar</button>
            </div>
                
        </div>
    )

}

export default Navbar;