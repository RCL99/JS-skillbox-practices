const PROMO_CODES = [
    {
        promocode: 'PROM10',
        gift: 'Скидка 10%'
    },
    {
        promocode: 'PROM50',
        gift: 'Скидка 50%'
    },
    {
        promocode: 'GIFT',
        gift: 'Подарок в корзине'
    }
];

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const message = document.querySelector('.message');

function getCookie(name) {
    const prefix = name + '=';
    const cookies = document.cookie.split('; ');
    const cookie = cookies.find((item) => item.startsWith(prefix));

    if (!cookie) {
        return null;
    }

    return cookie.slice(prefix.length);
}

function showSuccess(promo) {
    input.value = promo.promocode;
    message.textContent = `Промокод активирован! Вы получаете: ${promo.gift}`;
    message.classList.remove('hidden');
}

function handleSubmit(event) {
    event.preventDefault();

    const enteredCode = input.value.trim().toUpperCase();
    const promo = PROMO_CODES.find((item) => item.promocode === enteredCode);

    if (!promo) {
        input.value = '';
        message.classList.add('hidden');
        return;
    }

    document.cookie = `promo=${promo.promocode}; path=/; SameSite=Lax`;
    showSuccess(promo);
}

function restoreSavedPromo() {
    const savedCode = getCookie('promo');
    const promo = PROMO_CODES.find((item) => item.promocode === savedCode);

    if (promo) {
        showSuccess(promo);
    }
}

form.addEventListener('submit', handleSubmit);
restoreSavedPromo();
