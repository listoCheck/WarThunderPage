import logo from '../images/wt_logo_800.png';
import '../css/theme.css'
import video1 from "../videos/Su-39.mp4";
import video2 from "../videos/t80bvm.mp4";
import video3 from "../videos/Ka-50.mp4";
import {useEffect, useRef, useState} from "react";

export function Select() {
    const videos = [video1, video2, video3];

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

    return (
        <div className="selecter">
            <header>
                <img src={logo} className="App-logo" alt="logo"/>
            </header>
            <div className="background-video">
                <video ref={videoRef} autoPlay muted playsInline/>
                <div className="content">

                </div>
            </div>
        </div>
    )
}