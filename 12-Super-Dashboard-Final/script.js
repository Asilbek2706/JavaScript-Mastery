// Final Dashboard Engine
class SuperDashboard {
    constructor() {
        this.store = { searchCount: 0, ramUsage: 0 };
        this.init();
    }

    init() {
        this.renderWidgets();
        this.setupDebounce();
        this.startMemoryTracker();
        this.logMessage("System initialized successfully...");
    }

    // 10-Loyiha: Factory Pattern
    createWidget(title, value) {
        const div = document.createElement('div');
        div.className = 'factory-card';
        div.innerHTML = `<h4>${title}</h4><h2>${value}</h2>`;
        return div;
    }

    renderWidgets() {
        const container = document.getElementById('widget-factory');
        container.appendChild(this.createWidget("Active Sessions", "1,248"));
        container.appendChild(this.createWidget("API Requests", "84.2k"));
        container.appendChild(this.createWidget("Success Rate", "99.9%"));
    }

    // 09-Loyiha: Debounce
    setupDebounce() {
        const search = document.getElementById('main-search');
        const debouncedSearch = this.debounce((val) => {
            this.logMessage(`Searching for: "${val}"... (Debounce active)`);
        }, 600);

        search.addEventListener('input', (e) => debouncedSearch(e.target.value));
    }

    debounce(fn, delay) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => fn(...args), delay);
        };
    }

    // 11-Loyiha: Memory Monitoring
    startMemoryTracker() {
        const bar = document.getElementById('mem-bar');
        const text = document.getElementById('mem-percent');

        setInterval(() => {
            const usage = Math.floor(Math.random() * 40) + 20;
            bar.style.width = usage + '%';
            text.textContent = usage + '%';
            if(usage > 50) this.logMessage(`Warning: Memory spikes detected: ${usage}%`, true);
        }, 3000);
    }

    logMessage(msg, isWarning = false) {
        const stream = document.getElementById('log-stream');
        const time = new Date().toLocaleTimeString();
        const p = document.createElement('p');
        p.style.color = isWarning ? '#ff4757' : '#00ffaa';
        p.textContent = `[${time}] ${msg}`;
        stream.prepend(p);
    }
}

// Start the app
const app = new SuperDashboard();