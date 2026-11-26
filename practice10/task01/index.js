const thumbnailsContainer = document.querySelector('.thumbnails');
const fullImage = document.querySelector('.full-image');

const showImage = (thumbnail) => {
    const url = thumbnail.getAttribute('src');

    fullImage.innerHTML = '';

    const image = document.createElement('img');
    image.setAttribute('src', url);
    image.setAttribute('alt', thumbnail.getAttribute('alt'));
    fullImage.appendChild(image);

    document.querySelectorAll('.thumbnail').forEach((item) => {
        item.classList.remove('active');
    });
    thumbnail.classList.add('active');
};

thumbnailsContainer.addEventListener('click', (event) => {
    const thumbnail = event.target.closest('.thumbnail');
    if (thumbnail) {
        showImage(thumbnail);
    }
});