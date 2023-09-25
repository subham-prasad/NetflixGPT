const VideoTitle = ({title, overview}) =>{

    return(
        <div className="w-full aspect-video px-6 md:px-24 pt-[20%] absolute text-white bg-gradient-to-r from-black ">
            <h1 className="text-2xl font-bold md:text-6xl ">{title}</h1>
            <p className="hidden md:inline-block text-lg py-6 w-1/4">{overview}</p>
            <div >
                <button className="text-black p-4 px-10 rounded-md bg-white hover:bg-opacity-90">▶️Play</button>
                <button className="hidden md:inline-block bg-gray-500 text-black p-4  px-10 rounded-md m-2">More Info</button>
            </div>
        </div>
    )

}

export default VideoTitle;