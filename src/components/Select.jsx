import logo from '../images/wt_logo_800.png';
import '../css/theme.css'

import video1 from "../videos/Su-39.mp4";
import video2 from "../videos/t80bvm.mp4";
import video3 from "../videos/Ka-50.mp4";
import {useEffect, useRef, useState} from "react";
import {Vechicle} from "./Vechicle";

export function Select() {
    let videos;
    videos = [video1, video2, video3];

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const videoRef = useRef(null);

    useEffect(() => {
        const handleVideoEnd = () => {
            setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        };

        const videoElement = videoRef.current;
        videoElement.addEventListener("ended", handleVideoEnd);

        return () => {
            videoElement.removeEventListener("ended", handleVideoEnd);
        };
    }, [videos.length]);

    useEffect(() => {
        const videoElement = videoRef.current;
        videoElement.src = videos[currentVideoIndex];

    }, [currentVideoIndex, videos]);
    function buttonClicked(label){
        console.log(label)

    }
    return (
        <div className="selecter">
            <header>
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            <div className="background-video">
                <video ref={videoRef} autoPlay muted playsInline/>
                <div className="content">
                    <div>
                        <button type="radio" id="ka50" onClick={() => buttonClicked("Ka-50")}></button>
                        <button type="radio" id="t80" onClick={() => buttonClicked("T80")}></button>
                        <button type="radio" id="su39" onClick={() => buttonClicked("Su-39")}></button>
                    </div>
                </div>
            </div>
        </div>
    )
}