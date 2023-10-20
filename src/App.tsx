import React, { useState, useRef, useEffect } from 'react';
import './App.css';

const WORDS = [
	'apple',
	'banana',
	'cherry',
	'date',
	'elderberry',
	'fig',
	'grape',
];

function App() {
	const [currentWord, setCurrentWord] = useState(randomWord());
	const [inputValue, setInputValue] = useState('');
	const [score, setScore] = useState(0);
	const inputRef = useRef(null);

	function randomWord() {
		return WORDS[Math.floor(Math.random() * WORDS.length)];
	}

	useEffect(() => {
		inputRef.current.focus();
	}, []);

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
		if (e.target.value === currentWord) {
			setScore(score + 1);
			setCurrentWord(randomWord());
			setInputValue('');
		}
	};

	return (
		<div className="App">
			<h1>Typing Game</h1>
			<p>
				Type the word: <strong>{currentWord}</strong>
			</p>
			<input ref={inputRef} value={inputValue} onChange={handleInputChange} />
			<p>Score: {score}</p>
		</div>
	);
}

export default App;
