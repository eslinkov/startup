import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import { NavLink, Routes, Route, useNavigate } from 'react-router-dom';

export function Login() {
  return (
    // We use a React.Fragment <></> because you have multiple
    // top-level elements (header, main, footer).
    // The classes from your <body> tag for layout (d-flex, etc.)
    // will need to be applied to a top-level <div> in your app.jsx
    // or on index.html's <body> tag. For now, let's focus on content.

    <React.Fragment>
      <header className="p-4">
        <div className="d-flex justify-content-between align-items-center position-relative">
          <h1 className="fs-2 position-absolute top-50 start-50 translate-middle">CoCreate</h1>
        </div>
      </header>

      <main className="container flex-grow-1 d-flex align-items-center">
        <div className="row justify-content-center g-4 w-100">
          <div className="col-12 col-md-5">
            <div className="login-box bg-custom-light-pink rounded-3 p-4 text-center">
              <section id="login-form">
                <h2 className="mb-4">Login</h2>
                <form action="home.html" method="get">
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
                <form action="home.html" method="get">
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