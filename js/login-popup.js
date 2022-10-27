let loginButton = document.querySelector('.login-button');
let loginPopup = document.querySelector('.login-popup');
let closePopup1 = document.querySelector('.close-popup');
let popupBack = document.querySelector('.popup-back');

loginButton.addEventListener('click', showPopup);
closePopup1.addEventListener('click', closePopup);

function showPopup(evt) {
    console.log(evt);
    evt.preventDefault();
    loginPopup.classList.toggle('show-popup');
    popupBack.classList.toggle('show-popup');
}

function closePopup(evt) {
    loginPopup.classList.remove('show-popup');
    popupBack.classList.remove('show-popup');
}