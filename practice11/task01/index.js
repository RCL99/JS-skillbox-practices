const form = document.getElementById('survey-form');
const result = document.getElementById('result');

const nameInput = document.getElementById('name');
const nameError = document.getElementById('name-error');

const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');

const ratingInput = document.getElementById('rating');
const ratingValue = document.getElementById('rating-value');

const commentsInput = document.getElementById('comments');

function validateName() {
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Введите имя';
        return false;
    }

    nameError.textContent = '';
    return true;
}

function validateEmail() {
    const email = emailInput.value.trim();
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === '') {
        emailError.textContent = 'Введите email';
        return false;
    }

    if (!pattern.test(email)) {
        emailError.textContent = 'Неверный формат email';
        return false;
    }

    emailError.textContent = '';
    return true;
}

function showResult() {
    const gender = form.querySelector('input[name="gender"]:checked');
    const interests = form.querySelectorAll('input[name="interest"]:checked');

    const interestNames = [];
    interests.forEach((item) => {
        interestNames.push(item.value);
    });

    const data = [
        'Имя: ' + nameInput.value.trim(),
        'Email: ' + emailInput.value.trim(),
        'Пол: ' + (gender ? gender.value : 'не выбран'),
        'Оценка сервиса: ' + ratingInput.value,
        'Интересы: ' + (interestNames.length > 0 ? interestNames.join(', ') : 'не выбраны'),
        'Комментарии: ' + (commentsInput.value.trim() !== '' ? commentsInput.value.trim() : 'нет')
    ];

    result.innerHTML = '';

    const title = document.createElement('h2');
    title.textContent = 'Данные пользователя';
    result.appendChild(title);

    const list = document.createElement('ul');

    data.forEach((text) => {
        const item = document.createElement('li');
        item.textContent = text;
        list.appendChild(item);
    });

    result.appendChild(list);
}

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);

ratingInput.addEventListener('input', () => {
    ratingValue.textContent = ratingInput.value;
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nameOk = validateName();
    const emailOk = validateEmail();

    if (nameOk && emailOk) {
        showResult();
    }
});
