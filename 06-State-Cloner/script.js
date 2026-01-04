const originalView = document.getElementById('original-view');
const clonedView = document.getElementById('cloned-view');
const msg = document.getElementById('msg');

const initialState = {
    name: "User1",
    skills: ["JS", "React"],
    details: {
        city: "Tashkent"
    }
};

let user = {};

const app = {
    updateViews(original, cloned) {
        originalView.textContent = JSON.stringify(original, null, 2);
        clonedView.textContent = JSON.stringify(cloned, null, 2);
    },

    reset() {
        user = JSON.parse(JSON.stringify(initialState));
        this.updateViews(user, {});
        msg.textContent = "The data has been restored.";
    },

    shallowCopy() {
        let copy = { ...user };
        copy.name = "Changed";
        copy.details.city = "London";

        this.updateViews(user, copy);
        msg.textContent = "Shallow Copy: Internal objects are linked!";
    },

    deepCopy() {
        let copy = structuredClone(user);
        copy.name = "Deep King";
        copy.details.city = "New York";

        this.updateViews(user, copy);
        msg.textContent = "Deep Copy: Both objects are completely independent!";
    }
};

app.reset()