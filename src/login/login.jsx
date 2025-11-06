import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import { NavLink, Routes, Route, useNavigate } from 'react-router-dom';


export function Login({ onLogin }) {
  const navigate = useNavigate();

  // values from the input fields on the login screen
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const [displayError, setDisplayError] = useState(null);

  // function handleLoginSubmit(event) {
  //   event.preventDefault();
  //   // check username/password
  //   onLogin(loginUsername); // function call from app.jsx
  //   navigate('/home');
  // }

  async function handleLoginSubmit(event) {
    event.preventDefault();

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: loginUsername,
        password: loginPassword,
      }),
    });

    if (response.ok) {
      onLogin(loginUsername);
      navigate('/home');
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }

  // function handleRegisterSubmit(event) {
  //   event.preventDefault();
  //   // create the user
  //   onLogin(registerUsername); // function call from app.jsx
  //   navigate('/home'); 
  // }

  async function handleRegisterSubmit(event) {
    event.preventDefault();

    const response = await fetch('/api/auth/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: registerUsername,
        password: registerPassword,
      }),
    });

    if (response.ok) {
      onLogin(registerUsername);
      navigate('/home');
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }



  return (
   
    <React.Fragment>
      <header className="p-4">
        <div className="d-flex justify-content-between align-items-center position-relative">
          <h1 className="fs-2 position-absolute top-50 start-50 translate-middle">CoCreate</h1>
        </div>
      </header>

      <main className="container flex-grow-1 d-flex align-items-center">
        
        {displayError && (
          <div className="alert alert-danger" role="alert">
            {displayError}
          </div>
        )}

        <div className="row justify-content-center g-4 w-100">
          <div className="col-12 col-md-5">
            <div className="login-box bg-custom-light-pink rounded-3 p-4 text-center">
              <section id="login-form">
                <h2 className="mb-4">Login</h2>
                <form onSubmit={handleLoginSubmit}>
                  <div className="mb-3 text-start">
                    <label htmlFor="login-username" className="form-label">
                      Username:
                    </label>
                    <input
                      type="text"
                      id="login-username"
                      name="username"
                      className="form-control"
                      placeholder="Enter your username"
                      required
                      onChange={(e) => setLoginUsername(e.target.value)}
                    />
                  </div>

                  <div className="mb-3 text-start">
                    <label htmlFor="login-password" className="form-label">
                      Password:
                    </label>
                    <input
                      type="password"
                      id="login-password"
                      name="password"
                      className="form-control"
                      placeholder="Enter your password"
                      required
                      onChange={(e) => setLoginPassword(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn btn-light mt-4">
                    Login
                  </button>
                </form>
              </section>
            </div>
          </div>

          <div className="col-12 col-md-5">
            <div className="login-box bg-custom-light-pink rounded-3 p-4 text-center">
              <section id="register-form">
                <h2 className="mb-4">Create Account</h2>
                <form onSubmit={handleRegisterSubmit}>
                  <div className="mb-3 text-start">
                    <label htmlFor="register-username" className="form-label">
                      Username:
                    </label>
                    <input
                      type="text"
                      id="register-username"
                      name="username"
                      className="form-control"
                      placeholder="Choose a username"
                      required
                      onChange={(e) => setRegisterUsername(e.target.value)}
                    />
                  </div>

                  <div className="mb-3 text-start">
                    <label htmlFor="register-password" className="form-label">
                      Password:
                    </label>
                    <input
                      type="password"
                      id="register-password"
                      name="password"
                      className="form-control"
                      placeholder="Create a password"
                      required
                      onChange={(e) => setRegisterPassword(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn btn-light mt-4">
                    Create Account
                  </button>
                </form>
              </section>
            </div>
          </div>
        </div>
      </main>

      <footer className="text-center py-4 mt-auto">
        <p>By Emma Slinkov</p>

        <a href="https://github.com/eslinkov/startup" className="btn btn-light mt-3">
          My GitHub
        </a>
      </footer>
    </React.Fragment>
  );
}