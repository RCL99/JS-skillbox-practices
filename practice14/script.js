const STORAGE_KEY = 'films';

const form = document.querySelector('.form');
const titleInput = document.querySelector('.title');
const genreInput = document.querySelector('.genre');
const yearInput = document.querySelector('.year');
const watchedInput = document.querySelector('.watched');
const btnAdd = document.querySelector('.btn-add');
const btnCancel = document.querySelector('.btn-cancel');
const tbody = document.querySelector('.tbody');
const sortSelect = document.querySelector('.sort');
const btnSort = document.querySelector('.btn-sort');

let films = loadFilms();
let editingId = null;

function createId() {
    const randomPart = Math.random().toString(36).slice(2);
    return Date.now().toString(36) + randomPart;
}

function loadFilms() {
    try {
        const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));

        if (!Array.isArray(stored)) {
            return [];
        }

        return stored.map((film) => ({
            ...film,
            id: film.id || createId()
        }));
    } catch {
        return []
    }
}

function saveFilms() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(films));
}

function findFilm(id) {
    return films.find((film) => film.id === id);
}

function getRow(id) {
    return tbody.querySelector(`tr[data-id="${id}"]`);
}

function readForm() {
    const title = titleInput.value.trim();
    const genre = genreInput.value.trim();
    const year = Number(yearInput.value);
    const isYearValid = Number.isInteger(year) && year > 0;

    if (!title || !genre || !isYearValid) {
        alert('Поля заполнены неверно');
        return null;
    }

    return { title, genre, year, watched: watchedInput.checked };
}

function createRow(film) {
    const row = document.createElement('tr');
    row.dataset.id = film.id;

    row.insertCell().textContent = film.title;
    row.insertCell().textContent = film.genre;
    row.insertCell().textContent = film.year;
    row.insertCell().textContent = film.watched ? 'Да' : 'Нет';

    const actions = row.insertCell();
    actions.innerHTML = `
        <button type="button" class="del">Удалить</button>
        <button type="button" class="edit">Редактировать</button>
    `;

    return row;
}

function updateRow(row, film) {
    row.cells[0].textContent = film.title;
    row.cells[1].textContent = film.genre;
    row.cells[2].textContent = film.year;
    row.cells[3].textContent = film.watched ? 'Да' : 'Нет';
}

function renderAll() {
    tbody.replaceChildren(...films.map(createRow));
}

function resetForm() {
    form.reset();
    editingId = null;
    btnAdd.textContent = 'Добавить';
    btnCancel.hidden = true;
}

function handleSubmit(event) {
    event.preventDefault();

    const data = readForm();
    if (!data) {
        return;
    }

    if (editingId === null) {
        const newFilm = { id: createId(), ...data };
        films.push(newFilm);
        tbody.append(createRow(newFilm));
    } else {
        const film = findFilm(editingId);
        Object.assign(film, data);
        updateRow(getRow(editingId), film);
    }

    saveFilms();
    resetForm();
}

function startEdit(id) {
    const film = findFilm(id);

    titleInput.value = film.title;
    genreInput.value = film.genre;
    yearInput.value = film.year;
    watchedInput.checked = film.watched;

    editingId = id;
    btnAdd.textContent = 'Обновить';
    btnCancel.hidden = false;
}

function deleteFilm(id) {
    films = films.filter((film) => film.id !== id);
    getRow(id).remove();

    if (editingId === id) {
        resetForm();
    }

    saveFilms();
}

function handleTableClick(event) {
    const button = event.target.closest('button');
    if (!button) {
        return;
    }

    const id = button.closest('tr').dataset.id;

    if (button.classList.contains('del')) {
        deleteFilm(id);
    } else if (button.classList.contains('edit')) {
        startEdit(id);
    }
}

function sortFilms() {
    const key = sortSelect.value;

    films.sort((a, b) =>
        typeof a[key] === 'number' ? a[key] - b[key] : a[key].localeCompare(b[key])
    );

    renderAll();
}

form.addEventListener('submit', handleSubmit);
tbody.addEventListener('click', handleTableClick);
btnCancel.addEventListener('click', resetForm);
btnSort.addEventListener('click', sortFilms);

renderAll();