const books = [
    'Война и мир',
    'Преступление и наказание',
    'Мастер и Маргарита',
    'Тихий Дон',
    'Отцы и дети'
];

const bookList = document.querySelector('.book-list');
const addButton = document.querySelector('.add-book');
const searchButton = document.querySelector('.search-book');

let foundBooks = [];

const render = () => {
    bookList.innerHTML = '';

    books.forEach((book, index) => {
        const item = document.createElement('li');
        item.textContent = book;

        if (foundBooks.includes(index)) {
            item.classList.add('found');
        }

        bookList.appendChild(item);
    });
};

const addBook = () => {
    const title = prompt('Введите название книги');

    if (title === null || title.trim() === '') {
        alert('Название книги не введено!');
        return;
    }

    const trimmedTitle = title.trim();
    books.push(trimmedTitle);
    foundBooks = [];

    const item = document.createElement('li');
    item.textContent = trimmedTitle;
    bookList.appendChild(item);
};

const searchBook = () => {
    const query = prompt('Введите название книги для поиска');

    foundBooks = [];

    if (query !== null && query.trim() !== '') {
        const search = query.trim().toLowerCase();

        books.forEach((book, index) => {
            if (book.toLowerCase().includes(search)) {
                foundBooks.push(index);
            }
        });
    }

    if (foundBooks.length === 0) {
        alert('Книга не найдена!');
    }

    render();
};

addButton.addEventListener('click', addBook);
searchButton.addEventListener('click', searchBook);

render();