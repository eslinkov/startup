const { WebSocketServer } = require('ws');

function peerProxy(httpServer) {
  // Create WebSocket server attached to the HTTP server
  const wss = new WebSocketServer({ noServer: true });

  // Handle upgrade requests from HTTP to WebSocket
  httpServer.on('upgrade', (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit('connection', ws, request);
    });
  });

  // Track connections by canvas ID
 
  const canvasConnections = new Map();

  wss.on('connection', (ws) => {
    ws.isAlive = true;
    ws.canvasId = null;
    ws.userName = null;

    // Handle pong responses
    ws.on('pong', () => {
      ws.isAlive = true;
    });

    ws.on('message', (data) => {
      try {
        const msg = JSON.parse(data);

        // Handle different message types
        switch (msg.type) {
          case 'join':
            handleJoin(ws, msg);
            break;
          case 'leave':
            handleLeave(ws);
            break;
          case 'stroke':
            handleStroke(ws, msg);
            break;
          case 'cursor':
            handleCursor(ws, msg);
            break;
          default:
            console.log('Unknown message type:', msg.type);
        }
      } catch (err) {
        console.error('Error parsing WebSocket message:', err);
      }
    });

    ws.on('close', () => {
      handleLeave(ws);
    });
  });

  function handleJoin(ws, msg) {
    const { canvasId, userName } = msg;
    ws.canvasId = canvasId;
    ws.userName = userName;

    // Add to canvas connections
    if (!canvasConnections.has(canvasId)) {
      canvasConnections.set(canvasId, new Set());
    }
    canvasConnections.get(canvasId).add(ws);

    // Get list of users already on this canvas
    const users = getUsersOnCanvas(canvasId);

    // Send current user list to the joining user
    ws.send(JSON.stringify({
      type: 'userList',
      users: users
    }));

    // Notify others that this user joined
    broadcastToCanvas(canvasId, {
      type: 'userJoined',
      userName: userName
    }, ws);
  }

  function handleLeave(ws) {
    if (ws.canvasId && canvasConnections.has(ws.canvasId)) {
      const connections = canvasConnections.get(ws.canvasId);
      connections.delete(ws);

      // Notify others that user left
      broadcastToCanvas(ws.canvasId, {
        type: 'userLeft',
        userName: ws.userName
      }, ws);

      // Clean up empty canvas rooms
      if (connections.size === 0) {
        canvasConnections.delete(ws.canvasId);
      }
    }
  }

  function handleStroke(ws, msg) {
    // Broadcast stroke to all other users on the same canvas
    broadcastToCanvas(ws.canvasId, {
      type: 'stroke',
      stroke: msg.stroke,
      userName: ws.userName
    }, ws);
  }

  function handleCursor(ws, msg) {
    // Broadcast cursor position to others (optional feature)
    broadcastToCanvas(ws.canvasId, {
      type: 'cursor',
      position: msg.position,
      userName: ws.userName
    }, ws);
  }

  function getUsersOnCanvas(canvasId) {
    const users = [];
    if (canvasConnections.has(canvasId)) {
      canvasConnections.get(canvasId).forEach((client) => {
        if (client.userName) {
          users.push(client.userName);
        }
      });
    }
    return users;
  }

  function broadcastToCanvas(canvasId, message, excludeWs) {
    if (!canvasConnections.has(canvasId)) return;

    const messageStr = JSON.stringify(message);
    canvasConnections.get(canvasId).forEach((client) => {
      if (client !== excludeWs && client.readyState === 1) {
        client.send(messageStr);
      }
    });
  }

  // Keepalive ping/pong to detect dead connections
  const interval = setInterval(() => {
    wss.clients.forEach((ws) => {
      if (!ws.isAlive) {
        handleLeave(ws);
        return ws.terminate();
      }
      ws.isAlive = false;
      ws.ping();
    });
  }, 10000);

  wss.on('close', () => {
    clearInterval(interval);
  });
}

module.exports = { peerProxy };
