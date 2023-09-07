const imagesClicked = document.querySelectorAll('.images');
const addItem = document.querySelector('.add-item');
const subItem = document.querySelector('.sub-item');
const quantity = document.querySelector('.label');

let count = 1;
quantity.innerText = `${count}`;

imagesClicked.forEach((image) => {
    image.addEventListener('click', () => {
        document.querySelector('.slide').src = image.src;
    });
});

addItem.addEventListener('click', () => {
    count += 1;
    quantity.innerText = `${count}`; 
});

subItem.addEventListener('click', () => {

    if (count > 1) {
        count -= 1;
        quantity.innerText = `${count}`; 
    }

});