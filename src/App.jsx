import React from 'react';
import Navebar from './components/Navebar';
import Footer from './components/Footer';
import Home from './pages/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact.jsx';
import Frame from './components/Spliter.jsx';
import Ai from './components/Ai.jsx';
import Rent from './components/Rentalbike.jsx';
import ChatBot from './pages/ChatBot.jsx';

const App = () => {
  return (
    <BrowserRouter>
      {/* Main container to stretch full screen */}
      <div className="flex flex-col min-h-screen">
        <Navebar />

        {/* Content Wrapper: Makes sure content takes up available space */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Home />} />
            <Route path="/Features" element={<Home />} />
            <Route path="/About" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Splite" element={<Frame />} />
            <Route path="/Ai" element={<Ai />} />
            <Route path="/rent" element={<Rent />} />
          </Routes>
        </div>

        <ChatBot/>
        

        
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
