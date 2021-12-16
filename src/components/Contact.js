import iconLocation from '../assets/images/icon-location.png'
import iconEmail from '../assets/images/icon-email.png'
import iconPhone from '../assets/images/icon-phone.png'
import contactBg from '../assets/images/contact-bg.png'
function Contact(){
    return (
        <div className="rounded-3xl md:grid md:grid-cols-12 mt-32 pt-12 pl-12 space-y-8 md:space-y-0 text-white bg-yellow-300 shadow-xl shadow-yellow-300">
            <div className=" space-y-4 col-span-5">
                <div className="font-bold ubuntu text-5xl ">Kami Siap Membantu Anda</div>
                <div className="text-md karla">Apabila Anda ingin mengetahui lebih lanjut mengenai Udana. Silahkan menghubungi kami</div>
            </div>
            <div className="flex flex-col  space-y-4  col-span-4">
                <div className="space-x-4 flex flex-start">
                    <div className="pt-2">
                        <img src={iconLocation} alt=""/>
                    </div>
                    <div className="text-lg karla">
                        <b>PT Dana Rintis Indonesia</b>
                        <p>Jl. KH. Hasyim Ashari No.17, Petojo Utara,</p>
                        <p> Kecamatan Gambir, Kota Jakarta Pusat</p>
                        <p> Daerah Khusus Ibukota Jakarta, 10130</p>
                    </div>
                </div>
                <div className="space-x-4 flex ubuntu flex-start">
                    <div className="pt-2">
                        <img src={iconEmail} alt=""/>
                    </div>
                    <div className="text-lg" ><b> support@udana.id</b></div>
                </div>
                <div className="space-x-4 flex ubuntu flex-start">
                    <div className="pt-2">
                        <img src={iconPhone} alt=""/>
                    </div>
                    <div className="text-lg" ><b> 087709999430</b></div>
                </div>
            </div>
                <div className="col-span-3 flex justify-end" style={{}} >
                    <img className="" src={contactBg} alt=""/>
                </div>
        </div>
    )
}

export default Contact