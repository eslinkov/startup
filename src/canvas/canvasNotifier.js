class CanvasNotifier {
    constructor() {
        this.socket = null;
        this.observers = [];
    }

    connect () {
        const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
        this.socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

        this.socket.onopen = () => {
            console.log('WebSocket connected');
        };

        this.socket.onmessage = (event) => {
            const msg = JSON.parse(event.data);
            this.notifyObservers(msg);
            // console.log('Received:', msg);
        };

        this.socket.onclose = () => {
            console.log('WebSocket disconnected');
        };
    }

    sendMessage(msg) {
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify(msg));
        }
    }

    addObserver(callback) {
        this.observers.push(callback);
    }

    removeObserver(callback) {
        this.observers = this.observers.filter(obs => obs !== callback);
    }

    notifyObservers(msg) {
        this.observers.forEach(callback => callback(msg));
    }
}

const notifier = new CanvasNotifier();
export default notifier;

