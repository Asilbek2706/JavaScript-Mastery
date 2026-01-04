function createLibrary() {
    const books = [];

    return {
        addBook(name) {
            const newBook = { id: Date.now(), title: name };
            books.push(newBook);
            return newBook;
        },
        removeBook(id) {
            const index = books.findIndex(b => b.id === id);
            if (index !== -1) books.splice(index, 1);
        },
        getBooksCount() {
            return books.length;
        },
        getAllBooks() {
            return [...books];
        }
    };
}

const myLibrary = createLibrary();

const input = document.querySelector('#book-name');
const addBtn = document.querySelector('#add-book');
const list = document.querySelector('#book-list');
const total = document.querySelector('#total-books');

addBtn.onclick = () => {
    if (input.value.trim()) {
        myLibrary.addBook(input.value.trim());
        input.value = '';
        renderUI();
    }
};

function renderUI() {
    const allBooks = myLibrary.getAllBooks();

    list.innerHTML = allBooks.map(book => `
        <li>
            <span>${book.title}</span>
            <button class="delete-btn" onclick="deleteBook(${book.id})">❌</button>
        </li>
    `).join('');

    total.textContent = myLibrary.getBooksCount();
}

window.deleteBook = (id) => {
    myLibrary.removeBook(id);
    renderUI();
};