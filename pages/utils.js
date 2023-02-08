const navBox = document.querySelector('.nav-box');
const navLinks = document.querySelectorAll('.nav__link');


navBox.addEventListener('click', (event) => {
    if (event.target.classList.contains('nav__link')) {
        navLinks.forEach((e) => e.classList.remove('nav__link_active'));
        event.target.classList.add('nav__link_active');
    }
});


// ===== slider ===== //

function getShuffledArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
}

function createCardTemplate(cardData) {
    const petCard = document.createElement('div');
    petCard.setAttribute('data-id', cardData.id)
    petCard.classList.add('card-pet');

    const petImg = document.createElement('img');
    petImg.src = cardData.img;

    const petName = document.createElement('p');
    petName.classList.add('name-pet');
    petName.innerHTML = cardData.name;

    const cardBtnInfo = document.createElement('div');
    cardBtnInfo.classList.add('card__btn-info', 'btn-hover');
    cardBtnInfo.innerHTML = 'Learn more';

    petCard.append(petImg, petName, cardBtnInfo);
    return petCard
}

// ===== slider ===== //



