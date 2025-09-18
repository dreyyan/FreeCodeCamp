import { useState } from "react";
import DrumPad from "./components/DrumPad";

const Home = () => {
	const [displayText, setDisplayText] = useState("");
return (
	<div id="drum-machine">
		<h1 className="nunito-bold font-bold text-3xl text-center text-white">DRUM MACHINE</h1>
		<div className="bg-[var(--text)]">
			<p id="display" className="text-center mt-4 mb-6 nunito-bold text-[var(--background)]">{displayText}</p>
		</div>
		<div id="controls-container">
				<DrumPad id="heater-1" letter="Q" src="heater-1.mp3" setDisplayText={setDisplayText} />
				<DrumPad id="heater-2" letter="W" src="heater-2.mp3" setDisplayText={setDisplayText} />
				<DrumPad id="heater-3" letter="E" src="heater-3.mp3" setDisplayText={setDisplayText} />
				<DrumPad id="heater-4" letter="A" src="heater-4.mp3" setDisplayText={setDisplayText} />
				<DrumPad id="clap" letter="S" src="clap.mp3" setDisplayText={setDisplayText} />
				<DrumPad id="open-hh" letter="D" src="open-hh.mp3" setDisplayText={setDisplayText} />
				<DrumPad id="kick-n-h" letter="Z" src="kick-n-h.mp3" setDisplayText={setDisplayText} />
				<DrumPad id="kick" letter="X" src="kick.mp3" setDisplayText={setDisplayText} />
				<DrumPad id="closed-hh" letter="C" src="closed-hh.mp3" setDisplayText={setDisplayText} />
		</div>
	</div>
	);
};
export default Home;