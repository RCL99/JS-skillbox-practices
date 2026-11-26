const products = ['Яблоко', 'Арбуз', 'Банан', 'Молоко', 'Хлеб'];

const productList = document.querySelector('.product-list');
const addButton = document.querySelector('.add-product');

const sortProducts = () => {
    products.sort((a, b) => a.localeCompare(b, 'ru'));
};

const render = () => {
    sortProducts();
    productList.innerHTML = '';

    products.forEach((product) => {
        const item = document.createElement('li');
        item.textContent = product;
        productList.appendChild(item);
    });
};

const addProduct = () => {
    const input = prompt('Введите название товара');

    if (input === null || input.trim() === '') {
        alert('Название товара не введено!');
        return;
    }

    const trimmed = input.trim();
    products.push(trimmed);

    const insertIndex = products.findIndex(p => p.localeCompare(trimmed, 'ru') > 0);
    const item = document.createElement('li');
    item.textContent = trimmed;

    if (insertIndex === -1) {
        productList.appendChild(item);
    } else {
        productList.insertBefore(item, productList.children[insertIndex]);
    }
};

addButton.addEventListener('click', addProduct);

render();