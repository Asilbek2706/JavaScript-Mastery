let leakyArray = [];
let intervalId = null;

const statusText = document.querySelector('#memory-status');
const visualBar = document.querySelector('#visual-memory');
const logList = document.querySelector('#log-list');

const app = {
    // 1. Xotira oqishini boshlash (Leak)
    startLeak() {
        statusText.textContent = "Xavfli! Xotira to'lmoqda...";
        statusText.style.color = "red";

        // Ataylab massivni to'ldiramiz va to'xtatmaymiz
        intervalId = setInterval(() => {
            const bigData = new Array(100000).fill("Asilbek - Memory Leak Test");
            leakyArray.push(bigData);

            // Vizual ko'rsatkichni oshiramiz
            const currentWidth = visualBar.offsetWidth;
            visualBar.style.width = (currentWidth + 10) + "px";

            this.addLog(`Xotiraga 100k element qo'shildi. Jami: ${leakyArray.length}`);
        }, 500);
    },

    // 2. Tozalash (Fix)
    fixLeak() {
        // MUHIM: Taymerni to'xtatamiz
        clearInterval(intervalId);

        // MUHIM: Massivni bo'shatamiz (Reference-ni o'chiramiz)
        leakyArray = [];

        statusText.textContent = "Tozalandi. Barqaror.";
        statusText.style.color = "green";
        visualBar.style.width = "0px";
        this.addLog("Xotira butunlay tozalandi!");
    },

    addLog(msg) {
        const li = document.createElement('li');
        li.textContent = msg;
        logList.prepend(li);
    }
};

document.querySelector('#leak-btn').onclick = () => app.startLeak();
document.querySelector('#clean-btn').onclick = () => app.fixLeak();