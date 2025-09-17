import DrumPad from "./components/DrumPad";

const Home = () => {
return (
	<div id="drum-machine">
		<h1 className="vt323-bold font-bold text-4xl text-center">DRUM MACHINE</h1>
		<div id="controls-container">
			<DrumPad id="heater-1" letter="Q" src={"heater-1.mp3"}/>
			<DrumPad id="heater-2" letter="W" src={"heater-2.mp3"}/>
			<DrumPad id="heater-3" letter="E" src={"heater-3.mp3"}/>
			<DrumPad id="heater-4" letter="A" src={"heater-4.mp3"}/>
			<DrumPad id="clap" letter="S" src={"clap.mp3"}/>
			<DrumPad id="open-hh" letter="D" src={"open-hh.mp3"}/>
			<DrumPad id="kick-n-h" letter="Z" src={"kick-n-h.mp3"}/>
			<DrumPad id="kick" letter="X" src={"kick.mp3"}/>
			<DrumPad id="closed-hh" letter="C" src={"closed-hh.mp3"}/>
			<p id="display"></p>
		</div>
	</div>
	);
};
export default Home;