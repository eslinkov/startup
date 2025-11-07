import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './canvas.css';

export function Canvas({ currentUser }) {
  const { id } = useParams();

  const [isEditingName, setIsEditingName] = useState(false);
  const [canvasName, setCanvasName] = useState('Canvas Name');
  const [activeTool, setActiveTool] = useState('brush');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [brushColor, setBrushColor] = useState('#000000'); //color variable
  const [brushSize, setBrushSize] = useState(10); // brush size variable
  const [colorPalette, setColorPalette] = useState([]);

  const [isDrawing, setIsDrawing] = useState(false);

  const [sessionUsers, setSessionUsers] = useState(['User 2']);

  const [canvasId, setCanvasId] = useState(id);
  const [strokes, setStrokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const canvasRef = useRef(null); // box for the canvas html

  const contextRef = useRef(null);
  const currentStroke = useRef(null); // holds the stroke being drawn right now

  useEffect(() => {
    const canvas = canvasRef.current;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const context = canvas.getContext('2d'); // for returning the drawing API
    context.lineCap = 'round';
    context.lineJoin = 'round';
    contextRef.current = context;

    (async () => {
      try {
        const response = await fetch(`/api/canvases`);
        const allCanvases = await response.json();
        const canvasData = allCanvases.find(c => c.id === parseInt(id));

        if (canvasData) {
          setCanvasName(canvasData.name);
          setStrokes(canvasData.drawingData || []);
        }
      } catch (error) {
        console.error('Error loading canvas:', error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [id]);

  useEffect(() => {

    const intervalId = setInterval(() => {
      // users joining and leaving placeholder
      setSessionUsers(currentUsers => {
        if (currentUsers.includes('User 3')) {
          
          return ['User 2'];
        } else {
          
          return ['User 2', 'User 3'];
        }
      });
    }, 4000);

    
    return () => clearInterval(intervalId);

  }, []);

  useEffect(() => {
    if (!strokes.length || !contextRef.current) return;
    const context = contextRef.current;
    context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    strokes.forEach(stroke => {
      context.beginPath();
      context.lineCap = 'round';
      context.lineJoin = 'round';
      context.lineWidth = stroke.size;
      if (stroke.tool === 'eraser') {
        context.globalCompositeOperation = 'destination-out';
      } else {
        context.globalCompositeOperation = 'source-over';
        context.strokeStyle = stroke.color;
      }
      if (stroke.points.length > 0) {
        context.moveTo(stroke.points[0].x, stroke.points[0].y);
        stroke.points.forEach(point => {
          context.lineTo(point.x, point.y);
        });
        context.stroke();
      }
    });
  }, [strokes]);

  function startDrawing(e) {
    e.preventDefault();
    const context = contextRef.current;
    context.beginPath();
    context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);



    currentStroke.current = {
      points: [{ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY }],
      color: brushColor,
      size: brushSize,
      tool: activeTool,
    };
  }

  function stopDrawing() {
    if (!isDrawing) return;
    contextRef.current.closePath();
    setIsDrawing(false);
    if (currentStroke.current) {
      const newStrokes = [...strokes, currentStroke.current];
      setStrokes(newStrokes);
      fetch(`/api/canvas/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: canvasName, drawingData: newStrokes })
      }).catch(err => console.error('Save failed:', err));
      currentStroke.current = null;
    }
  }

  function draw(e) {
    if (!isDrawing) {
      return;
    }

    const context = contextRef.current;

    if (activeTool === 'eraser') {
      context.globalCompositeOperation = 'destination-out'; // This "erases"
    } else {
    context.globalCompositeOperation = 'source-over'; // This "draws"
    context.strokeStyle = brushColor;
    }

    context.lineWidth = brushSize;
    context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    context.stroke();
    if (currentStroke.current) {
      currentStroke.current.points.push({
        x: e.nativeEvent.offsetX,
        y: e.nativeEvent.offsetY
      });
    }
  }



  const handleEditNameClick = () => {
    setIsEditingName(true);
  };

  const handleNameInputBlur = (event) => {
    const newName = event.target.value;
    setCanvasName(newName);
    setIsEditingName(false);
    fetch(`/api/canvas/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newName, drawingData: strokes })
    }).catch(err => console.error('Name save failed:', err));
  };

  const handleNameInputKeyDown = (event) => {
    if (event.key === 'Enter') {
      const newName = event.target.value;
      setCanvasName(newName);
      setIsEditingName(false);
      fetch(`/api/canvas/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newName, drawingData: strokes })
      }).catch(err => console.error('Name save failed:', err));
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

  async function getNewPalette() {
    try {
      const response = await fetch('http://colormind.io/api/', {
        method: 'POST',
        body: JSON.stringify({ model: 'default' })
      });
      const data = await response.json();
      const hexColors = data.result.map(rgb =>
        '#' + rgb.map(x => x.toString(16).padStart(2, '0')).join('')
      );
      setColorPalette(hexColors);
    } catch (error) {
      console.error('Error fetching palette:', error);
    }
  }

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
          <div className="me-4">
            <button className="btn btn-sm btn-outline-secondary" onClick={getNewPalette}>
              New Palette
            </button>
          </div>
          {colorPalette.length > 0 && (
            <div className="d-flex gap-2">
              {colorPalette.map((color, index) => (
                <div
                  key={index}
                  style={{
                    width: '30px',
                    height: '30px',
                    backgroundColor: color,
                    border: '2px solid #333',
                    cursor: 'pointer',
                    borderRadius: '4px'
                  }}
                  onClick={() => setBrushColor(color)}
                  title={`Use ${color}`}
                />
              ))}
            </div>
          )}
        </nav>
      </header>

      <main className="position-relative canvas-container">

        <canvas 
          ref={canvasRef} // tells canvas to put itself in the ref box
          onMouseDown={startDrawing}
          onMouseUp={stopDrawing}
          onMouseMove={draw}
          onMouseLeave={stopDrawing}
          id="drawing-board" 
          className="drawing-canvas"
        >
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

            {/* dynamically rendering other users */}
            {sessionUsers.map((user) => (
              <li className="d-flex align-items-center mb-2">
                 <i className="bi bi-person-fill me-2"></i>
                 {user}
              </li>
            ))}
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