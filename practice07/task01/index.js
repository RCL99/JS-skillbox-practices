const books = [
    'Война и мир',
    'Преступление и наказание',
    'Мастер и Маргарита',
    'Тихий Дон',
    'Отцы и дети'
];

const bookList = document.getElementById('book-list');
const addButton = document.getElementById('add-book');
const searchButton = document.getElementById('search-book');

let foundBooks = [];

function render() {
    bookList.innerHTML = '';

    books.forEach(function (book, index) {
        const item = document.createElement('li');
        item.textContent = book;

        if (foundBooks.includes(index)) {
            item.classList.add('found');
        }

        bookList.appendChild(item);
    });
}

function addBook() {
    const title = prompt('Введите название книги');

    if (title === null || title.trim() === '') {
        alert('Название книги не введено!');
        return;
    }

    books.push(title.trim());
    foundBooks = [];
    render();
}

function searchBook() {
    const query = prompt('Введите название книги для поиска');

    foundBooks = [];

    if (query !== null && query.trim() !== '') {
        const search = query.trim().toLowerCase();

        books.forEach(function (book, index) {
            if (book.toLowerCase().includes(search)) {
                foundBooks.push(index);
            }
        });
    }

    if (foundBooks.length === 0) {
        alert('Книга не найдена!');
    }

    render();
}

addButton.addEventListener('click', addBook);
searchButton.addEventListener('click', searchBook);

render();
