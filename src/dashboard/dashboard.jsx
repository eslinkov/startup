import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './dashboard.css';

export function Dashboard({ currentUser, onLogout }) {

  const navigate = useNavigate();
  const [canvases, setCanvases] = useState([]); // empty array to hold list of canvases

  useEffect(() => { 
    // const placeholderCanvases = [
    //   { id: 1, name: 'My Drawing 1'},
    //   { id: 2, name: 'My Drawing 2'},
    //   { id: 3, name: 'My Drawing 3'},
    //   { id: 4, name: 'My Drawing 4'},
    // ];

    fetch('/api/canvases')
      .then((response) => response.json())
      .then((canvasesFromServer) => {
        setCanvases(canvasesFromServer);

        
      })
      .catch(() => {
        console.log('Error fetching canvases');
      });

    // setCanvases(placeholderCanvases);

  }, []);

  function handleCreateCanvas() {
    fetch('/api/canvas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((newCanvas) => {
      setCanvases(currentCanvases => [...currentCanvases, newCanvas]);
      navigate(`/canvas/${newCanvas.id}`);
    })
    .catch(() => {
      console.error('Error creating canvas');
    });
  }

  async function handleDeleteCanvas(event, canvasId) {
    // 1. Stop the event from "bubbling"
    event.preventDefault();
    event.stopPropagation();

    // 2. Confirm with the user
    if (!window.confirm('Are you sure you want to delete this canvas?')) {
      return;
    }

    // 3. Call the API
    const response = await fetch(`/api/canvas/${canvasId}`, {
      method: 'DELETE',
    });

    // 4. Update the state if the delete was successful
    if (response.ok) {
      setCanvases(currentCanvases =>
        currentCanvases.filter(c => c.id !== canvasId)
      );
    } else {
      console.error('Failed to delete canvas');
    }
  }



  return (
    <div className="d-flex flex-column min-vh-100">
      <header className="p-4">
        <div className="d-flex justify-content-between align-items-center position-relative">
          <h1 className="fs-2 position-absolute top-50 start-50 translate-middle">
            My Canvases
          </h1>

          <NavLink to="/home" className="btn bg-custom-light-pink">
            Home Page
          </NavLink>

          <a href="#" className="btn btn-light invisible">
            Home Page
          </a>
        </div>
      </header>

      <main className="d-flex flex-grow-1 flex-column justify-content-center">
        <div className="text-center mb-3">
          <button className="btn bg-custom-light-pink" onClick={handleCreateCanvas}>
            Create New Canvas
          </button>
        </div>

        <hr className="hr-pink mx-auto w-50" />
        <div className="d-flex justify-content-center">
          <div className="scroll-container w-50">

            <div className="icon-grid">

              {canvases.map((canvas) => (
                <div key={canvas.id} className="project-icon-container">


                  <NavLink to={`/canvas/${canvas.id}`} className="project-link">
                    <div className="project-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pencil-square"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path
                          fillRule="evenodd"
                          d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        />
                      </svg>
                      <p>{canvas.name}</p>
                    </div>
                  </NavLink>

                  <button className="btn btn-danger btn-sm delete-button" onClick={(e) => handleDeleteCanvas(e, canvas.id)}>&times;</button>
                </div>
              ))}
              
            </div>
          </div>
        </div>
        <hr className="hr-pink mx-auto w-50" />
      </main>

      <div className="position-relative bottom mt-auto">
        <footer className="text-center py-5">
          <p>By Emma Slinkov</p>

          <a href="https://github.com/eslinkov/startup" className="btn btn-light mt-3">
            My GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}