const addButton = document.querySelector('.add-item');
const removeButton = document.querySelector('.remove-item');
const itemList = document.querySelector('.item-list');

const addItem = () => {
    const item = document.createElement('li');
    item.textContent = 'Новый элемент списка';
    itemList.appendChild(item);
};

const removeItem = () => {
    const lastItem = itemList.lastElementChild;

    if (lastItem !== null) {
        itemList.removeChild(lastItem);
    }
};

addButton.addEventListener('click', addItem);
removeButton.addEventListener('click', removeItem);