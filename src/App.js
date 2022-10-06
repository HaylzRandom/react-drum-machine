import React, { useEffect, useState } from 'react';

import './App.css';

const drumPads = [
	{
		keyCode: 81,
		text: 'Q',
		sound: 'Heater 1',
		src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
	},
	{
		keyCode: 87,
		text: 'W',
		sound: 'Heater 2',
		src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
	},
	{
		keyCode: 69,
		text: 'E',
		sound: 'Heater 3',
		src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
	},
	{
		keyCode: 65,
		text: 'A',
		sound: 'Heater 4',
		src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
	},
	{
		keyCode: 83,
		text: 'S',
		sound: 'Clap',
		src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
	},
	{
		keyCode: 68,
		text: 'D',
		sound: 'Open-HH',
		src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
	},
	{
		keyCode: 90,
		text: 'Z',
		sound: 'Kick-n-Hat',
		src: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
	},
	{
		keyCode: 88,
		text: 'X',
		sound: 'Kick',
		src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
	},
	{
		keyCode: 67,
		text: 'C',
		sound: 'Closed-HH',
		src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
	},
];

const App = () => {
	const [soundDisplay, setSoundDisplay] = useState('');

	const playSound = (soundID) => {
		const audio = document.getElementById(soundID);
		if (audio === null) return;
		audio.play();
	};

	// Find soundDisplay text
	const displaySound = (soundID) => {
		const value = drumPads.find((sound) => sound.text === soundID);
		if (value === undefined) return;
		setSoundDisplay(value.sound);
	};

	useEffect(() => {
		document.addEventListener('keydown', (e) => {
			const keyPressed = e.key.toUpperCase();
			playSound(keyPressed);
			displaySound(keyPressed);
		});
	}, []);

	return (
		<>
			<div className='drum-machine' id='drum-machine'>
				<div className='drum-pads'>
					{drumPads.map((drumPad) => (
						<button
							className='drum-pad'
							id={drumPad.keyCode}
							key={drumPad.keyCode}
							onClick={() => {
								playSound(drumPad.text);
								setSoundDisplay(drumPad.sound);
							}}
						>
							{drumPad.text}
							<audio
								src={drumPad.src}
								className='clip'
								id={drumPad.text}
							></audio>
						</button>
					))}
				</div>
				<h2 className='current-title'>Currently Playing</h2>
				<div className='drum-display' id='display'>
					<div className='sound-display'>{soundDisplay}</div>
				</div>
			</div>
		</>
	);
};

export default App;
