const VideoTitle = ({title, overview}) =>{

    return(
        <div className="w-screen aspect-video px-24 pt-[20%] absolute text-white bg-gradient-to-r from-black ">
            <h1 className="font-bold text-6xl">{title}</h1>
            <p className="text-lg py-6 w-1/4">{overview}</p>
            <div >
                <button className="text-black p-4 px-10 rounded-md bg-white hover:bg-opacity-90">▶️Play</button>
                <button className="bg-gray-500 text-black p-4  px-10 rounded-md m-2">More Info</button>
            </div>
        </div>
    )

}

export default VideoTitle;