import React from 'react';
// import { NavLink } from 'react-router-dom';
import './home.css';
import { BrowserRouter, NavLink, useNavigate, Route, Routes } from 'react-router-dom';


export function Home({ currentUser, onLogout }) {
  const navigate = useNavigate();
  
  // function handleLogoutClick() {
  //   onLogout(); 
  //   navigate('/'); // sends user to login page
  // }

  function handleLogoutClick() {
  fetch('/api/auth/logout', {
    method: 'DELETE',
  })
  .catch(() => {

  })
  .finally(() => {
    onLogout();
    navigate('/');
  });
}



  return (

    <React.Fragment>
      <div className="d-flex vh-100 flex-column justify-content-center align-items-center">
        <header className="text-center mb-4">
          <p className="position-absolute top-0 start-0 ps-3 pt-2">
            Welcome, <strong>{currentUser}</strong>
          </p>
          <h1 className="display-5">CoCreate</h1>
          <p className="lead">Home</p>
        </header>

        <main className="custom-square bg-custom-light-pink rounded-3 p-4 d-flex flex-column justify-content-center align-items-center">
          <nav>
            {/* Menu is a semantic alternative to <ul> that represents an interaction */}
            <menu>
              <NavLink to="/dashboard" className="btn btn-light w-75 mb-3">
                My Canvases
              </NavLink>
              <br />
              <br />
              <button to="/" className="btn btn-light w-75 mb-3" onClick={handleLogoutClick}>
                Log Out
              </button>
            </menu>
          </nav>
        </main>
      </div>

      <div className="fixed-bottom">
        <footer className="text-center py-4">
          <span>By Emma Slinkov</span>
          <br />
          <a href="https://github.com/eslinkov/startup" className="btn btn-light mt-3">
            My GitHub
          </a>
        </footer>
      </div>
    </React.Fragment>
  );
}