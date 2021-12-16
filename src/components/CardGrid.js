import Card from './Card'
import canduImage from '../assets/images/candu.png'
import big from '../assets/images/big.png'
import nasi from '../assets/images/nasi.png'
import nyoklat from '../assets/images/nyoklat.png'
import haba from '../assets/images/haba.png'
import hello from '../assets/images/hello.png'

function CardGrid(){
    return (
        <div className="md:p-6 px-16 space-y-12 md:space-y-0 md:grid md:grid-cols-3 gap-8" >
            {<Card title="Rindu Candu Milk Bar" src={canduImage}/>}
            <Card title="Mr. Big" src={big}/>
            <Card title="Nasi Balap" src={nasi}/>
            <Card title="Nyoklat Teen" src={nyoklat}/>
            <Card title="Haba Haus" src={haba}/>
            <Card title="Hello Sugar" src={hello}/>
        </div>
    )
}

export default CardGrid