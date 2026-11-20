const form = document.getElementById('product-form');
const productBody = document.getElementById('product-body');
const formError = document.getElementById('form-error');

const nameInput = document.getElementById('name');
const weightInput = document.getElementById('weight');
const distanceInput = document.getElementById('distance');

function addProduct(event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const weight = Number(weightInput.value);
    const distance = Number(distanceInput.value);

    if (name === '') {
        formError.textContent = 'Введите название товара';
        return;
    }

    if (weight <= 0 || distance <= 0) {
        formError.textContent = 'Вес и расстояние должны быть положительными числами';
        return;
    }

    formError.textContent = '';

    const cost = (weight * distance) / 10;
    const row = document.createElement('tr');

    const cells = [name, weight, distance, cost.toFixed(2)];
    cells.forEach((value) => {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.appendChild(cell);
    });

    productBody.appendChild(row);

    form.reset();
}

form.addEventListener('submit', addProduct);
