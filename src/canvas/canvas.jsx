import React from 'react';
import './canvas.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

export function Canvas() {
  return (
    <div className="body">
        <div className="d-flex flex-column vh-100 app-window">

            <header className="p-3">

                <div className="d-flex align-items-center justify-content-between">

                    <div className="d-flex align-items-center">
                        
                        <NavLink className="nav-link btn bg-custom-light-pink mx-2" to="/dashboard">Exit</NavLink>

                        <p id="canvas-name-display" className="fs-4 fw-bold mb-0 ms-2">Canvas Name</p>

                        <i id="edit-name-button" className="bi bi-pencil-fill ms-2 edit-icon"></i>

                        <input type="text" id="canvas-name-input" className="form-control d-none" value="Canvas Name" />
                    </div>

                    <div>
                        <a href="#" id="sidebar-toggle-button" className="tool-icon" title="Collaboration Menu">
                            <i className="bi bi-people-fill fs-3"></i>
                        </a>
                    </div>

                </div>
        
                <hr className="hr-pink" />

                <nav className="d-flex align-items-center flex-nowrap">

                    <div className="me-4">
                        <a href="#" id="brush-tool" className="tool-icon" title="Brush">
                            <i className="bi bi-brush-fill fs-3"></i>
                        </a>
                    </div>

                    <div className="me-4 d-flex align-items-center">
                        <label for="color-picker" className="form-label me-2 mb-0">Color:</label>
                        <input type="color" className="form-control form-control-color" id="color-picker" value="#000000" />
                    </div>

                    <div className="me-4 d-flex align-items-center">
                        <label for="brush-size" className="form-label me-2 mb-0">Brush Size:</label>
                        <input type="range" className="form-range" min="1" max="100" id="brush-size" />
                    </div>

                    <div className="me-4">
                        <a href="#" id="eraser-tool" className="tool-icon" title="Eraser">
                            <i className="bi bi-eraser-fill fs-3"></i>
                        </a>
                    </div>
          
                </nav>

            </header>


            <main className="flex-grow-1 position-relative">
      
                <canvas id="drawing-board" className="drawing-canvas">Your browser does not support the HTML canvas element.
                </canvas>
        
                <aside id="collaboration-sidebar" className="collaboration-sidebar">

                    <h4 className="mb-3">Users in Session</h4>

                    <ul id="user-list" className="list-unstyled">
            
                        <li className="d-flex align-items-center mb-2">
                            <i className="bi bi-person-check-fill me-2 text-success"></i>User 1 (You)
                        </li>

                        <li className="d-flex align-items-center mb-2">
                            <i className="bi bi-person-fill me-2"></i>User 2
                        </li>

                        <li className="d-flex align-items-center mb-2">
                            <i className="bi bi-person-fill me-2"></i>User 3
                        </li>
                    </ul>

                    <hr className="my-4" />

                    <div className="mb-3">
                        <label for="invite-link">Invite Link:</label>
                        <div className="input-group">
                            <input type="text" id="invite-link" className="form-control" value="https://cocreate.example/..." readOnly />
                            <button className="btn btn-outline-secondary">Copy</button>
                        </div>  
                    </div>  
            
                </aside>

            </main>

        </div>

        <div>
            <footer className="text-center">
        
                <p className="mt-1">By Emma Slinkov</p>
                <a href="https://github.com/eslinkov/startup" className="btn btn-light pt-0 mt-0">My GitHub</a>
            </footer>
        </div>

    </div>
  );
}