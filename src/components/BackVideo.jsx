import {useEffect, useRef, useState} from "react";
import video1 from "../videos/Su-39.mp4";
import video2 from "../videos/t80bvm.mp4";
import video3 from "../videos/Ka-50.mp4";

export function BackVideo(){
    const videoRef = useRef(null);
    let videos;
    videos = [video1, video2, video3];
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
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
        <div className="background-video">
            <video ref={videoRef} autoPlay muted playsInline/>
        </div>
    )
}