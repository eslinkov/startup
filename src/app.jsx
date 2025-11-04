// This is the top level App component

import React from 'react';

// import Boostrtap so the styling shows up
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// import the top level CSS from our main CSS file we named app.css
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Canvas } from './canvas/canvas';
import { Home } from './home/home';
import { Dashboard } from './dashboard/dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/home' element={<Home />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/canvas' element={<Canvas />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
   
  );
}



function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}