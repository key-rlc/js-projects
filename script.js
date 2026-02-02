const buttonToggle = document.querySelector('.button-toggle');
 

buttonToggle.addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('active');
});