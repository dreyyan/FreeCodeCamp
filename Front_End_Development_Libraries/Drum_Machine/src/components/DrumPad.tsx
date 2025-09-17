interface DrumPadProps {
    id: string;
    letter: string;
    src: string;
}

const DrumPad: React.FC<DrumPadProps> = ({id, letter, src}) => {
	const playSound = () => {
        const audio = document.getElementById(letter) as HTMLAudioElement | null;
        if (audio) {
            audio.currentTime = 0; // Rewind to start
            audio.play();
        }
	};

    return (
        <button onClick={playSound}  className="drum-pad" id={id}>{letter}
            <audio src={src} className="clip" id={letter}></audio>
        </button>
    );
};

export default DrumPad;