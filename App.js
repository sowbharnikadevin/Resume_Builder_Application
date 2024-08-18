import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

import DetailsFillingPage from './Components/DetailsFillComponents/DetailsFillingPage';
import NavBar from './Components/Navigation/Navbar';
import MyResume from './Components/ResumeDisplay/MyResume';
import AboutUs from './Components/AboutUs/AboutUs';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import Home from './Components/HomePage/Home';
import SpeechToText from './Components/SpeechToText'; // Import SpeechToText component
import CoverLetterGenerator from './Components/CoverLetterGenerator/CoverLetterGenerator';
import FeedbackPage from './Components/FeedbackPage';
import Profile from './Components/Profile';
import './App.css';

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup';
  const isSpeechToTextPage = location.pathname === '/speech-to-text';

  return (
    
      <div>
        {!isAuthPage && !isSpeechToTextPage && <NavBar />}
        <div>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/home" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/detailsfillingpage/*" element={<DetailsFillingPage />} />
            <Route path="/myresume" element={<MyResume />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/speech-to-text" element={<SpeechToText />} />
            <Route path="/feedback" element={<FeedbackPage />} />
            <Route path="/profile" element={<Profile />} />

            <Route path="/cover-letter" element={<CoverLetterGenerator />} />
            <Route path="*" element={<Navigate to="/about" />} />
          </Routes>
        </div>
      </div>
    
  );
}

export default App;
