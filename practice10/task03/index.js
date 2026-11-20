const prices = [100, 500, 250, 750, 300];

const ascButton = document.getElementById('sort-asc');
const descButton = document.getElementById('sort-desc');
const priceList = document.getElementById('price-list');

function render() {
    priceList.innerHTML = '';

    prices.forEach(function (price) {
        const item = document.createElement('li');
        item.textContent = price + ' руб.';
        priceList.appendChild(item);
    });
}

function sortAsc() {
    prices.sort(function (a, b) {
        return a - b;
    });
    render();
}

function sortDesc() {
    prices.sort(function (a, b) {
        return b - a;
    });
    render();
}

ascButton.addEventListener('click', sortAsc);
descButton.addEventListener('click', sortDesc);

render();
