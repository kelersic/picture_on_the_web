document.addEventListener('DOMContentLoaded', function() {
    const dynamicGallery = document.querySelector('#dynamic-gallery');
    const images = [];
    const imageFolder = dynamicGallery.dataset.imageFolder; // get the image folder from data attribute
    const imagePrefix = dynamicGallery.dataset.imagePrefix; // get the image prefix from data attribute
    const numIterations = parseInt(dynamicGallery.dataset.numIterations); // get the number of iterations from data attribute and convert to integer

    for (let i = 1; i <= numIterations; i++) {
    images.push(`${imageFolder}/${imagePrefix}-${i}.jpg`);
    }

    let currentPage = 1;

    function loadImages() {
    const start = (currentPage - 1) * 16;
    const end = currentPage * 16;
    const imagesToLoad = images.slice(start, end);
    imagesToLoad.forEach(image => {
    const img = document.createElement('img');
    img.src = image;
    img.alt = image;
    dynamicGallery.appendChild(img);
    });
    currentPage++;
    }

    window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
    loadImages();
    }
    });

    loadImages();


});