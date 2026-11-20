const heights = [165, 172, 158, 180, 169, 175];

const heightList = document.getElementById('height-list');
const addButton = document.getElementById('add-height');
const filterButton = document.getElementById('filter-heights');

let minHeight = null;

function render() {
    heightList.innerHTML = '';

    heights.forEach(function (height) {
        if (minHeight !== null && height < minHeight) {
            return;
        }

        const item = document.createElement('li');
        item.textContent = height + ' см';
        heightList.appendChild(item);
    });
}

function addHeight() {
    const input = prompt('Введите рост ученика (см)');

    if (input === null || input.trim() === '') {
        alert('Рост не введен!');
        return;
    }

    const height = Number(input);

    if (isNaN(height)) {
        alert('Рост не введен!');
        return;
    }

    heights.push(height);
    render();
}

function filterHeights() {
    const input = prompt('Введите минимальный рост (см)');

    if (input === null || input.trim() === '') {
        minHeight = null;
    } else {
        const value = Number(input);
        minHeight = isNaN(value) ? null : value;
    }

    render();
}

addButton.addEventListener('click', addHeight);
filterButton.addEventListener('click', filterHeights);

render();
