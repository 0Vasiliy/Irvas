// Функция отображения img
const images = () => {
    const imgPopup = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImage = document.querySelector('img');

        imgPopup.classList.add('popup');
        workSection.appendChild(imgPopup);

        imgPopup.style.justifyContent = 'center';
        imgPopup.style.alignItems = 'center';
        imgPopup.style.display = 'none';

        imgPopup.appendChild(bigImage);

        // Обработчик событий
        workSection.addEventListener('click', (e) => {
            e.preventDefault();

            let target = e.target;

            // Делегирование событий
            if(target && target.classList.contains('preview')){
                imgPopup.style.display = 'flex';
                // Показ иммено той картинки куда кликнул пользователь
                const path = target.parentNode.getAttribute('href');
                bigImage.setAttribute('src',path)
            }

            // закрытие модального окна,при клике вне img
            if(target && target.matches('div.popup')){
                imgPopup.style.display = 'none';
            }
        });
};
export default images;