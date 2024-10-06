import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from './components/headers'; 
import LandingPage from './components/LandingPage/landingPage'; 

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Perform login logic, then set isAuthenticated to true
    setIsAuthenticated(true);
  };

  const handleSignup = () => {
    // Perform signup logic, then set isAuthenticated to true
    setIsAuthenticated(true);
  };

  return (
    <div className="w-full">
      <Header />
    </div>
  );
}

export default App;
