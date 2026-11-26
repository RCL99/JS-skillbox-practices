const prices = [100, 500, 250, 750, 300];

const ascButton = document.querySelector('.sort-asc');
const descButton = document.querySelector('.sort-desc');
const priceList = document.querySelector('.price-list');

const render = () => {
    priceList.innerHTML = '';

    prices.forEach((price) => {
        const item = document.createElement('li');
        item.textContent = price + ' руб.';
        priceList.appendChild(item);
    });
};

const sortAsc = () => {
    prices.sort((a, b) => a - b);
    render();
};

const sortDesc = () => {
    prices.sort((a, b) => b - a);
    render();
};

ascButton.addEventListener('click', sortAsc);
descButton.addEventListener('click', sortDesc);

render();