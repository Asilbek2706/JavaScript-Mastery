// 1. Debounce Function
function debounce(func, delay) {
    let timeoutId;
    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

const debouncedInput = document.querySelector('#debounce-input');
const normalInput = document.querySelector('#normal-input');

const debounceCountDisplay = document.querySelector('#debounce-count');
const normalCountDisplay = document.querySelector('#normal-count');

let dCount = 0;
let nCount = 0;

// 3. Simulated API Request
const sendRequest = () => {
    dCount++;
    debounceCountDisplay.textContent = dCount;
    console.log("API request sent (Debounced)");
};

// Create the debounced function (waits for 500ms)
const debouncedProcess = debounce(sendRequest, 500);

// 4. Event Listeners
debouncedInput.addEventListener('input', () => {
    debouncedProcess();
});

normalInput.addEventListener('input', () => {
    nCount++;
    normalCountDisplay.textContent = nCount;
});