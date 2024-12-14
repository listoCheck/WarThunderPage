import React, { useState, useRef } from 'react';
import '../css/music.css';

import track1 from '../music/Bandit at 6 Oclock.mp3';
import track2 from '../music/War Thunder Soundtrack Main Theme.mp3';
import track3 from '../music/Nigelcore.mp3';


export function MusicPlayer() {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const tracks = [
        { title: 'Bandit at 6 Oclock', src: track1 },
        { title: 'Main Theme', src: track2 },
        { title: 'Nigelcore', src: track3 },

    ];

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const changeTrack = (direction) => {
        let newIndex = currentTrackIndex + direction;
        if (newIndex < 0) {
            newIndex = tracks.length - 1;
        } else if (newIndex >= tracks.length) {
            newIndex = 0;
        }
        setCurrentTrackIndex(newIndex);
        setIsPlaying(true);
    };

    const handleVolumeChange = (e) => {
        const newVolume = e.target.value / 100;
        setVolume(newVolume);
        audioRef.current.volume = newVolume;
    };

    return (
        <div className="music-player">
            <audio
                ref={audioRef}
                src={tracks[currentTrackIndex].src}
                onEnded={() => changeTrack(1)}
                volume={volume}
                autoPlay={isPlaying}
            />

            <div className="track-info">
                <h4>{tracks[currentTrackIndex].title}</h4>
            </div>

            <div className="controls">
                <button onClick={() => changeTrack(-1)}>⏮️</button>
                <button onClick={togglePlay}>
                    {isPlaying ? '⏸️' : '▶️'}
                </button>
                <button onClick={() => changeTrack(1)}>⏭️</button>
            </div>

            <div className="volume-control">
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={volume * 100}
                    onChange={handleVolumeChange}
                />
            </div>
        </div>
    );
}
