class CanvasNotifier {
    constructor() {
        this.socket = null;
        this.observers = [];
    }
}

const notifier = new CanvasNotifier();
export default notifier;