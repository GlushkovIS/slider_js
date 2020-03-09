let images = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg'
];

let count = 0;

function next() {
    let slider = document.getElementById('slider');
    count++;
    if (count >= images.length) {
        count = 0;
    }
    slider.src = images[count];
}

function prev() {
    let slider = document.getElementById('slider');
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    slider.src = images[count];
}