import "../css/T80.css";
import { useEffect, useState } from "react";
import engine from "../music/engine_sound.mp3";

export function T80({ onReturn }) {
    const [scoped, setScoped] = useState(false);
    const [audioStarted, setAudioStarted] = useState(true);
    const audio = new Audio(engine);

    useEffect(() => {
        if (audioStarted) {
            audio.loop = true;
            audio.volume = 1;
            audio.play().catch((error) => {
                console.error("Ошибка воспроизведения аудио:", error);
            });
        }
        return () => {
            if (audioStarted) {
                audio.pause();
                audio.currentTime = 0;
            }
        };
    }, [audioStarted]);


    function makeSope() {
        setScoped(true);
        const container = document.querySelector('.t80-container');
        container.classList.add('new-background');
    }

    function exitScope() {
        setScoped(false);
        const container = document.querySelector('.t80-container');
        container.classList.remove('new-background');
    }

    function handleReturnToMain() {
        audio.pause();
        audio.currentTime = 0;
        onReturn();
    }

    return (
        <div className="t80-container">


            <button onClick={handleReturnToMain} id="exit-button">Выйти</button>
            {scoped ? (
                <button id="scoped" onClick={exitScope}>Выйти из приближения</button>
            ) : (
                <button id="scope" onClick={makeSope}></button>
            )}
        </div>
    );
}
