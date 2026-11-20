const products = ['Яблоко', 'Арбуз', 'Банан', 'Молоко', 'Хлеб'];

const productList = document.getElementById('product-list');
const addButton = document.getElementById('add-product');

function sortProducts() {
    products.sort(function (a, b) {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    });
}

function render() {
    sortProducts();
    productList.innerHTML = '';

    products.forEach(function (product) {
        const item = document.createElement('li');
        item.textContent = product;
        productList.appendChild(item);
    });
}

function addProduct() {
    const input = prompt('Введите название товара');

    if (input === null || input.trim() === '') {
        alert('Название товара не введено!');
        return;
    }

    products.push(input.trim());
    render();
}

addButton.addEventListener('click', addProduct);

render();
