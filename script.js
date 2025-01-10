const gallery = document.querySelector('.gallery');
const overlay = document.querySelector('.overlay');
const imagesData = [
    "i1.jpg",
    "i2.jpg",
    "i3.jpg",
    "i4.jpg",
    "i5.jpg",
    "i6.jpg",
    "i7.jpg",
    "i8.jpg",
    "i9.jpg",
    "i10.jpg",
    "i11.jpg",
    "i12.jpg",
    "i13.jpg",
    "i14.jpg",
    "i15.jpg",
    "i16.jpg",
    "i17.jpg",
    "i19.jpg",
    
];

imagesData.forEach(image => {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
    const imgElement = document.createElement('img');
    imgElement.src = image;
    imgElement.alt = `Photo ${image}`;
    imageContainer.appendChild(imgElement);
    gallery.appendChild(imageContainer);
});

const images = document.querySelectorAll('.image-container img');

images.forEach(image => {
    image.addEventListener('click', () => {
        overlay.style.display = "block";
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        const img = document.createElement('img');
        img.src = image.src;
        lightbox.appendChild(img);
        document.body.appendChild(lightbox);

        lightbox.addEventListener('click', () => {
            lightbox.remove();
            overlay.style.display = "none";
        });
    });
});
