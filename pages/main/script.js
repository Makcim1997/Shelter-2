// ===== Slider ===== //

const prevSliderBtn = document.querySelector('.slider__btn-prev');
const nextSliderBtn = document.querySelector('.slider__btn-next');
const sliderLine = document.querySelector('.slider__line');
const boxItemsLeft = document.querySelector('.pets-item.left');
const boxItemsRight = document.querySelector('.pets-item.right');
const boxItemsActive = document.querySelector('.pets-item.active');
const currentPetsId = [];

function addCardsToSlider(container) {
    const shuffledArray = getShuffledArray(PETS_DATA)
    
    shuffledArray.forEach((pet, index) => {
        if (index < 3) {
            const card = createCardTemplate(pet, index === 1);
            currentPetsId.push(pet.id);
            container.append(card);
        }
    })
}

addCardsToSlider(boxItemsActive);
addCardsToSlider(boxItemsLeft);
addCardsToSlider(boxItemsRight);

const movePrev = () => {
    sliderLine.classList.add('transition-left');
    prevSliderBtn.removeEventListener('click', moveNext);
    nextSliderBtn.removeEventListener('click', movePrev);
}

const moveNext = () => {
    sliderLine.classList.add('transition-right');
    prevSliderBtn.removeEventListener('click', moveNext);
    nextSliderBtn.removeEventListener('click', movePrev);
}

nextSliderBtn.addEventListener('click', moveNext);
prevSliderBtn.addEventListener('click', movePrev);

sliderLine.addEventListener('animationend', (animationEvent) => {
    let changedItem;

    if (animationEvent.animationName === 'move-left') {
        sliderLine.classList.remove('transition-left');
        changedItem = boxItemsLeft;
        document.querySelector('.pets-item.active').innerHTML = boxItemsLeft.innerHTML;
    } else {
        sliderLine.classList.remove('transition-right');
        changedItem = boxItemsRight;
        document.querySelector('.pets-item.active').innerHTML = boxItemsRight.innerHTML;
    }

    changedItem.innerHTML = '';

    addCardsToSlider(changedItem);

    prevSliderBtn.addEventListener('click', movePrev);
    nextSliderBtn.addEventListener('click', moveNext);
})  

// ===== Slider ===== //



