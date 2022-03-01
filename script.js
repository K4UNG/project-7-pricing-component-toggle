const toggle = document.querySelector('.toggle');
const button = document.querySelector('.switch');
const priceOne = document.querySelector('.left-p');
const priceTwo = document.querySelector('.price');
const priceThree = document.querySelector('.right-p');

toggle.onclick = () => {
    button.classList.toggle('active');
    if (button.classList.contains('active')) {
        priceOne.innerHTML = '&dollar;199.99';
        priceTwo.innerHTML = '&dollar;249.99';
        priceThree.innerHTML = '&dollar;399.99';
    }
    else {
        priceOne.innerHTML = '&dollar;19.99';
        priceTwo.innerHTML = '&dollar;24.99';
        priceThree.innreHTML = '&dollar;39.99';

    }
}