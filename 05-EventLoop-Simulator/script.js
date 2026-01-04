const stackList = document.querySelector('#stack-list');
const queueList = document.querySelectorAll('#queue-list');
const consoleLog = document.querySelector('#console-log');

const simulator = {
    log(msg) {
        const p = document.createElement('p');
        p.textContent = `> ${msg}`;
        consoleLog.prepend(p)
    },

    async updateStack(funcName) {
        const li = document.createElement('li');
        li.textContent = funcName;
        li.style.color = '#3498db';
        stackList.appendChild(li);

        await new Promise(r => setTimeout(r, 800));
        li.remove();
    },

    async runSync() {
        this.log("Synchronous code started...");
        await this.updateStack("Step 1: Console.log");
        this.log("Result: Hello, World!");
        await this.updateStack("Step 2: Finish");
        this.log("Synchronous code is finished.");
    },

    async runAsync() {
        this.log("Async test started...");

        await this.updateStack("setTimeout(..., 2000)");
        this.log("setTimeout sent to Web API.")

        setTimeout(() => {
            const li = document.createElement('li');
            li.textContent = "Callback: Info Display";
            li.style.color = '#e67e22';
            queueList.appendChild(li);

            this.log("Next: Ready to move to the Callback Stack!");

            setTimeout(async () => {
                li.remove();
                await this.updateStack("Callback Stack exited")
                this.log("Done: Result after 2 seconds!");
            }, 1000);
        }, 2000);

        await this.updateStack("Main script continues...");
        this.log("The main code continues to run (not waiting)!");
    }
};

document.querySelector('#run-sync').addEventListener('click', () => simulator.runSync());
document.querySelector('#run-async').addEventListener('click', () => simulator.runAsync());