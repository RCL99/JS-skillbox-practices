const cardText = document.getElementById('card-text');
const cardColor = document.getElementById('card-color');
const card = document.getElementById('card');

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
