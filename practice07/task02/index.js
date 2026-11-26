const heights = [165, 172, 158, 180, 169, 175];

const heightList = document.querySelector('.height-list');
const addButton = document.querySelector('.add-height');
const filterButton = document.querySelector('.filter-heights');

let minHeight = null;

const render = () => {
    heightList.innerHTML = '';

    heights.forEach((height) => {
        if (minHeight !== null && height < minHeight) {
            return;
        }

        const item = document.createElement('li');
        item.textContent = height + ' см';
        heightList.appendChild(item);
    });
};

const addHeight = () => {
    const input = prompt('Введите рост ученика (см)');

    if (input === null || input.trim() === '') {
        alert('Рост не введен!');
        return;
    }

    const height = +input;

    if (isNaN(height) || height <= 0) {
        alert('Рост должен быть положительным числом!');
        return;
    }

    heights.push(height);
    render();
};

const filterHeights = () => {
    const input = prompt('Введите минимальный рост (см)');

    if (input === null || input.trim() === '') {
        minHeight = null;
    } else {
        const value = +input;
        minHeight = isNaN(value) ? null : value;
    }

    render();
};

addButton.addEventListener('click', addHeight);
filterButton.addEventListener('click', filterHeights);

render();