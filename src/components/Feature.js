import step1 from '../assets/images/step-1.png'
import step2 from '../assets/images/step-2.png'
import step3 from '../assets/images/step-3.png'
import no1 from '../assets/images/no1.png'

function Feature(){
    return (
        <>
        <div className="mt-32 md:grid md:grid-cols-12 ">
            <div className="text-5xl ubuntu font-bold col-span-5">
                Menjadi Investor UMKM itu gampang
            </div>
            <div></div>
            <div className="text-gray-400 text-xl karla col-span-3">
            Berinvestasi pada UMKM bisa dilakukan oleh siapa saja dan dimana saja.
            </div>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="flex justify-center flex-col space-y-4" >
                <img src={step1} alt="" className="w-full"/>
                <div className="p-8">
                    <div className=" ubuntu text-3xl">Pilih UMKM</div>
                    <div className="text-gray-400 karla z-index-10 text-xl ">Temukan usaha yang anda minati pada galeri.</div>
                   
                </div>
            </div>
            <div className="flex justify-center flex-col space-y-4" >
                <img src={step2} alt="" className="w-full"/>
                <div className="p-8">
                    <div className="ubuntu text-3xl">Analisa Bisnis</div>
                    <div className="text-gray-400 karla  text-xl ">Lakukan analisa profil bisnis dan pengusaha.</div>
                </div>
            </div>
            <div className="flex justify-center flex-col space-y-4" >
                <img src={step3} alt="" className="w-full"/>
                <div className="p-8">
                    <div className=" ubuntu text-3xl">Mulai Berinvestasi</div>
                    <div className="text-gray-400  karla text-xl ">Menjadi investor startup dengan modal minimal 100.000 Rupiah.</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Feature