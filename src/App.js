import React from 'react';
import Navbar from './Navbar';
import LandingPage from './LandingPage'; // Importing the LandingPage component

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage /> {/* Added LandingPage component */}
    </div>
  );
}

export default App;
