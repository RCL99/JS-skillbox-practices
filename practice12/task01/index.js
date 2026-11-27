const GIFTS = [
    {
        title: 'Скидка 20% на первую покупку в нашем магазине!',
        icon: 'img/discount.svg'
    },
    {
        title: 'Скидка 10% на всё!',
        icon: 'img/discount_2.svg'
    },
    {
        title: 'Подарок при первой покупке в нашем магазине!',
        icon: 'img/gift.svg'
    },
    {
        title: 'Бесплатная доставка для вас!',
        icon: 'img/delivery.svg'
    },
    {
        title: 'Сегодня день больших скидок!',
        icon: 'img/discount_3.svg'
    }
];

function getRandomGift() {
    const index = Math.floor(Math.random() * GIFTS.length);
    return GIFTS[index];
}

function createPopup(gift) {
    const markup = `
        <div class="gift-popup__overlay"></div>
        <div class="gift-popup">
            <div class="gift-popup__left">
                <img class="gift-popup__icon" src="${gift.icon}" alt="">
            </div>
            <div class="gift-popup__right">
                <div class="gift-popup__title">${gift.title}</div>
                <button type="button" class="gift-popup__button">Отлично!</button>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', markup);

    const overlay = document.querySelector('.gift-popup__overlay');
    const popup = document.querySelector('.gift-popup');
    const button = popup.querySelector('.gift-popup__button');

    function closePopup() {
        overlay.remove();
        popup.remove();
    }

    button.addEventListener('click', closePopup);
    overlay.addEventListener('click', closePopup);
}

setTimeout(() => {
    createPopup(getRandomGift());
}, 3000);
