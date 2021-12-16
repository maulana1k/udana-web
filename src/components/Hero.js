import heroImage from '../assets/images/hero.jpg'
function Hero({children}){
    return (
        <>
        <div style={{borderRadius:'0 0 0 13vw'}} className="bg-yellow-400 pb-3" >
            <div 
            style={{borderRadius:'0 0 0 13vw',backgroundImage:`url(${heroImage})`}}
            className="w-full pb-24">
                {children}
            </div>
        </div>
        </>
    )
}

export default Hero