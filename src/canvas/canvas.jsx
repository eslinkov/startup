import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './canvas.css';

export function Canvas({ currentUser }) {
  const [isEditingName, setIsEditingName] = useState(false);
  const [canvasName, setCanvasName] = useState('Canvas Name');
  const [activeTool, setActiveTool] = useState('brush');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [brushColor, setBrushColor] = useState('#000000'); //color variable
  const [brushSize, setBrushSize] = useState(10); // brush size variable

  const handleEditNameClick = () => {
    setIsEditingName(true);
  };

  const handleNameInputBlur = (event) => {
    setCanvasName(event.target.value);
    setIsEditingName(false);
  };

  const handleNameInputKeyDown = (event) => {
    if (event.key === 'Enter') {
      setCanvasName(event.target.value);
      setIsEditingName(false);
    }
  };

  const handleSidebarToggle = (event) => {
    event.preventDefault();
    setIsSidebarOpen(!isSidebarOpen);
  };

  const selectTool = (event, toolName) => {
    event.preventDefault();
    setActiveTool(toolName);
  };

  return (
    <div className="d-flex flex-column app-window">
      <header className="p-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <NavLink to="/dashboard" className="btn bg-custom-light-pink mx-2">
              Exit
            </NavLink>

            {isEditingName ? (
              <input
                type="text"
                id="canvas-name-input"
                className="form-control"
                defaultValue={canvasName}
                onBlur={handleNameInputBlur}
                onKeyDown={handleNameInputKeyDown}
                autoFocus
              />
            ) : (
              <p
                id="canvas-name-display"
                className="fs-4 fw-bold mb-0 ms-2"
              >
                {canvasName}
              </p>
            )}

            <i
              id="edit-name-button"
              className="bi bi-pencil-fill ms-2 edit-icon"
              onClick={handleEditNameClick}
            ></i>
          </div>

          <div>
            <a
              href="#"
              id="sidebar-toggle-button"
              className="tool-icon"
              title="Collaboration Menu"
              onClick={handleSidebarToggle}
            >
              <i className="bi bi-people-fill fs-3"></i>
            </a>
          </div>
        </div>

        <hr className="hr-pink" />

        <nav className="d-flex align-items-center flex-nowrap">
          <div className="me-4">
            <a
              href="#"
              id="brush-tool"
              className={`tool-icon ${
                activeTool === 'brush' ? 'active-tool' : ''
              }`}
              title="Brush"
              onClick={(e) => selectTool(e, 'brush')}
            >
              <i className="bi bi-brush-fill fs-3"></i>
            </a>
          </div>

          <div className="me-4 d-flex align-items-center">
            <label htmlFor="color-picker" className="form-label me-2 mb-0">
              Color:
            </label>

            <input
              type="color"
              className="form-control form-control-color"
              id="color-picker"
              value={brushColor}
              onChange={(e) => setBrushColor(e.target.value)}
              
            />

          </div>

          <div className="me-4 d-flex align-items-center">
            <label htmlFor="brush-size" className="form-label me-2 mb-0">
              Brush Size:
            </label>

            <input
              type="range"
              className="form-range"
              min="1"
              max="100"
              id="brush-size"
              value={brushSize}
              onChange={(e) => setBrushSize(e.target.value)}
            />

          </div>

          <div className="me-4">
            <a
              href="#"
              id="eraser-tool"
              className={`tool-icon ${
                activeTool === 'eraser' ? 'active-tool' : ''
              }`}
              title="Eraser"
              onClick={(e) => selectTool(e, 'eraser')}
            >
              <i className="bi bi-eraser-fill fs-3"></i>
            </a>
          </div>
        </nav>
      </header>

      <main className="position-relative canvas-container">
        <canvas id="drawing-board" className="drawing-canvas">
          Your browser does not support the HTML canvas element.
        </canvas>

        <aside
          id="collaboration-sidebar"
          className={`collaboration-sidebar ${
            isSidebarOpen ? 'is-open' : ''
          }`}
        >
          <h4 className="mb-3">Users in Session</h4>

          <ul id="user-list" className="list-unstyled">
            <li className="d-flex align-items-center mb-2">
              <i className="bi bi-person-check-fill me-2 text-success"></i>
              {currentUser} (You)
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
            <label htmlFor="invite-link">Invite Link:</label>
            <div className="input-group">
              <input
                type="text"
                id="invite-link"
                className="form-control"
                defaultValue="https://cocreate.example/..."
                readOnly
              />
              <button className="btn btn-outline-secondary">Copy</button>
            </div>
          </div>
        </aside>
      </main>

      <div>
        <footer className="text-center">
          <p className="mt-1">By Emma Slinkov</p>
          <a
            href="https://github.com/eslinkov/startup"
            className="btn btn-light pt-0 mt-0"
          >
            My GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}