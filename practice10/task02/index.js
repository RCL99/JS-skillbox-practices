const addButton = document.getElementById('add-item');
const removeButton = document.getElementById('remove-item');
const itemList = document.getElementById('item-list');

function addItem() {
    const item = document.createElement('li');
    item.textContent = 'Новый элемент списка';
    itemList.appendChild(item);
}

function removeItem() {
    const lastItem = itemList.lastElementChild;

    if (lastItem !== null) {
        itemList.removeChild(lastItem);
    }
}

addButton.addEventListener('click', addItem);
removeButton.addEventListener('click', removeItem);
