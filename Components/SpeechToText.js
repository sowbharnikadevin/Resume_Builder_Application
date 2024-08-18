import React, { useState } from 'react';
import './SpeechToText.css';

const SpeechToText = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [text, setText] = useState('');

  const handleStart = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      setText(speechResult);
    };

    recognition.onspeechend = () => {
      recognition.stop();
      setIsRecording(false);
    };

    recognition.onerror = (event) => {
      console.error(event.error);
      setIsRecording(false);
    };

    recognition.start();
    setIsRecording(true);
  };

  const handleStop = () => {
    window.webkitSpeechRecognition.stop();
    setIsRecording(false);
  };

  return (
    <div className="containerstt">
      <video className="video-backgroundstt" autoPlay loop muted>
        <source src="https://media.istockphoto.com/id/1454096869/video/voice-waveform-in-neon-colors-horizontal-isolated-on-black-background-audio-wave-multicolor.mp4?s=mp4-640x640-is&k=20&c=mRahrlqNA9tCZijfl0s61iHYITos1VA0KlX_HYejfJY=" type="video/mp4" />
      </video>
      <h1 className='h1stt'>Speech to Text</h1>
      <button className="buttonstt" onClick={isRecording ? handleStop : handleStart}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      <textarea color="white" className="textareastt" value={text} readOnly placeholder="Speech to text result..." />
    </div>
  );
};

export default SpeechToText;
