const thumbnails = document.querySelectorAll('.thumbnail');
const fullImage = document.getElementById('full-image');

function showImage(thumbnail) {
    const url = thumbnail.getAttribute('src');

    fullImage.innerHTML = '';

    const image = document.createElement('img');
    image.setAttribute('src', url);
    image.setAttribute('alt', thumbnail.getAttribute('alt'));
    fullImage.appendChild(image);

    thumbnails.forEach(function (item) {
        item.classList.remove('active');
    });
    thumbnail.classList.add('active');
}

thumbnails.forEach(function (thumbnail) {
    thumbnail.addEventListener('click', function () {
        showImage(thumbnail);
    });
});
