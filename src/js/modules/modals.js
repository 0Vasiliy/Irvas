// modal
const modals = () => {
    //Передача селекторов и получение переменных
    function bindModal(triggerSelector, modalSelector, closeSelector,closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              window = document.querySelectorAll('[data-modal]'),
              scroll = calcScroll();

        // Передача в функцию несколько элементов и вешается обработчик
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                } 
                //закрываются все модальные окна
                window.forEach(item =>{
                    item.style.display = "none";
                })
                
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                document.body.style.marginRight = '${scroll}px';
            });
         });

         // Закрытие modal
        close.addEventListener('click', () => {
            //закрываются все модальные окна
            window.forEach(item =>{
                item.style.display = "none";
            })
            modal.style.display = "none";
            document.body.style.overflow = "";
            document.body.style.marginRight = '0px';
        });

        // Закрытие modal при клике вне модалного окна
        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                //закрываются все модальные окна
                window.forEach(item =>{
                    item.style.display = "none";
                })
                modal.style.display = "none";
                document.body.style.overflow = ""; 
                document.body.style.marginRight = '0px';
            }
        });
    }
    
    // Функция всплытия модального окна через промежуток времени
    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "hidden";
        }, time);
    }
    // Функция подсчитывает расстояние в px при открытиии модального окна и появления скролла
    function calcScroll(){
        let div =document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility ='hidden';

        document.body.appendChild(div);
        // Вычисление размера прокрутки
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }
    // Вызов функций
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close',false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close',false);
    showModalByTime('.popup', 60000);
};

export default modals;