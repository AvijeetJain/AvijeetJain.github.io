import React, { useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import {Preloader, About, Contact, Experience, Hero, Hog, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulating content loading delay 
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <BrowserRouter>
      <div>
        {loading ? (
          <Preloader />
          ) : (
          <>
            <div className="relative z-0 bg-primary">
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                {/* <Hero /> */}
              </div>
              <Hog />
              <About />
              <Experience />
              <Tech />
              <Works />

              {/* for 3d Stars */}
              <div className="relative z-0">
                <Contact />
                <StarsCanvas />
              </div>
            </div>
          </>
        )}
      </div>
    </BrowserRouter>
  )
}

export default App
