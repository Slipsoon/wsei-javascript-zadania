    // Zadanie02

const select = document.querySelector('select');
const btn = document.querySelector('button');
const imgs = document.querySelectorAll('img');

btn.addEventListener('click', showImg);

function showImg(e) {
    e.preventDefault();
    hideImgs();

    let selectedOption = select.value;
    if (selectedOption == 'Os X')
        selectedOption = 'Apple';

    let getImg = document.querySelector(`img[alt='${selectedOption}']`);
    
    getImg.classList.toggle('hidden');
}

function hideImgs() {
    imgs.forEach(img => {
        img.classList.add('hidden');
    })
}

hideImgs();
