const UIFactory = {
    createButton(type, text) {
        const btn = document.createElement('button');
        btn.textContent = text;
        btn.className = `btn btn-${type}`;
        return btn;
    },

    createCard(title, content) {
        const card = document.createElement('div');
        card.className = 'ui-card';
        card.innerHTML = `
            <h3>${title}</h3>
            <p>${content}</p>
        `;
        return card;
    }
};

const app = {
    floor: document.querySelector('#factory-floor'),

    create(type) {
        let element;

        if (type === 'success') {
            element = UIFactory.createButton('success', 'Success!');
        } else if (type === 'danger') {
            element = UIFactory.createButton('danger', 'Error!');
        } else if (type === 'card') {
            element = UIFactory.createCard('New Card', 'Manufactured in the UI Factory.');
        }

        if (element) {
            this.floor.appendChild(element);
        }
    }
};