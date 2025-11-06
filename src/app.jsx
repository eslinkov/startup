// This is the top level App component

import React, { useState, useEffect } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

// import Boostrtap so the styling shows up
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// import the top level CSS from our main CSS file we named app.css
import './app.css';

// page components
import { Login } from './login/login';
import { Canvas } from './canvas/canvas';
import { Home } from './home/home';
import { Dashboard } from './dashboard/dashboard';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('CoCreateUser');
    if (storedUser) {
      setCurrentUser(storedUser);
    }
  }, [])

  function handleLogin(username) {
    localStorage.setItem('CoCreateUser', username);
    setCurrentUser(username);
  }

  function handleLogout() {
    localStorage.removeItem('CoCreateUser');
    setCurrentUser(null);
  }


  return (
    <BrowserRouter>
      <div className="body">
        <Routes>
            <Route 
              path='/' 
              element={<Login onLogin={handleLogin} />}
              exact
            />
            <Route 
              path='/home' 
              element={<Home currentUser={currentUser} onLogout={handleLogout} />}            
            />
            <Route 
              path='/dashboard' 
              element={<Dashboard currentUser={currentUser} onLogout={handleLogout} />}              
            />
            <Route 
              path='/canvas/:id' 
              element={<Canvas currentUser={currentUser} onLogout={handleLogout} />} 
            />
            <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
   
  );
}



function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}