const display = document.getElementById('display');

const car = { brand: "Tesla", model: "Model S" };
const phone = { brand: "iPhone", model: "17 Pro" };

function introduce(color, price) {
    return `This ${this.brand} ${this.model}. Color: ${color}, Price: ${price}`;
}

const app = {
    useCall() {
        const res = introduce.call(car, "White", "$80,000");
        display.textContent = res;
    },

    useApply() {
        const res = introduce.apply(phone, ["Black", "$1,200"]);
        display.textContent = res;
    },

    useBind() {
        const bindedFunc = introduce.bind(car, "Red", "$95,000");
        display.textContent = "Function is linked! It works after 2 second...";

        setTimeout(() => {
            display.textContent = bindedFunc();
        }, 2000);
    }
}