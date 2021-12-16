
function Card(props){
    return(
        <div className="container rounded-2xl shadow-md border text-center font-medium">
            <div className="flex flex-col">
                <div className="text-lg ubuntu py-2 text-center font-bold">F&B</div>
                <img className="h-60" src={props.src} alt="image"/>
                <h3 className="py-8 karla text-xl font-semibold  text-yellow-400">{props.title}</h3>
                <div className="karla py-2 bg-gray-100">LIHAT DETAIL</div>
            </div>
        </div>
    )
}

export default Card