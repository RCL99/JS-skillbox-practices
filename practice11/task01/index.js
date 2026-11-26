const form = document.querySelector('.survey-form');
const result = document.querySelector('.result');

const nameInput = document.getElementById('name');
const nameError = document.querySelector('.name-error');
const emailInput = document.getElementById('email');
const emailError = document.querySelector('.email-error');
const ratingInput = document.getElementById('rating');
const ratingValue = document.querySelector('.rating-value');

const validateField = (value, errorText, errorElement) => {
    if (value === '') {
        errorElement.textContent = errorText;
        return false;
    }
    errorElement.textContent = '';
    return true;
};

const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(email)) {
        emailError.textContent = 'Неверный формат email';
        return false;
    }
    emailError.textContent = '';
    return true;
};

const showResult = () => {
    const formData = new FormData(form);

    const name = formData.get('name');
    const email = formData.get('email');
    const gender = formData.get('gender');
    const rating = formData.get('rating');
    const interests = formData.getAll('interest');
    const comments = formData.get('comments');

    const data = [
        `Имя: ${name}`,
        `Email: ${email}`,
        `Пол: ${gender || 'не выбран'}`,
        `Оценка сервиса: ${rating}`,
        `Интересы: ${interests.length > 0 ? interests.join(', ') : 'не выбраны'}`,
        `Комментарии: ${comments || 'нет'}`
    ];

    result.innerHTML = '';

    const list = document.createElement('ul');
    data.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });

    result.appendChild(list);
};

ratingInput.addEventListener('input', () => {
    ratingValue.textContent = ratingInput.value;
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const name = formData.get('name');
    const email = formData.get('email');

    const nameOk = validateField(name, 'Введите имя', nameError);
    const emailOk = validateField(email, 'Введите email', emailError) && validateEmail(email);

    if (nameOk && emailOk) {
        showResult();
    }
});