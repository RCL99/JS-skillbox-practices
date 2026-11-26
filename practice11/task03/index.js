const cardText = document.querySelector('.card-text');
const cardColor = document.querySelector('.card-color');
const card = document.querySelector('.card');

cardText.addEventListener('input', () => {
    card.textContent = cardText.value;
});

cardText.addEventListener('focus', () => {
    cardText.style.borderColor = 'blue';
    cardText.style.backgroundColor = '#eef';
});

cardText.addEventListener('blur', () => {
    cardText.style.borderColor = '';
    cardText.style.backgroundColor = '';
});

cardColor.addEventListener('change', () => {
    card.style.backgroundColor = cardColor.value;
});