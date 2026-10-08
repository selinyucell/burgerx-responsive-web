const hamburger = document.querySelector('.cizgiler');
const acilanMenu = document.querySelector('.acilanMenu');

hamburger.addEventListener('click', () => {
    acilanMenu.classList.toggle('menuAc');
});