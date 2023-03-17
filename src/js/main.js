import "./slider";
import modals from './modules/modals';
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import changeModalState from "./modules/changeModalState";

window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    // Переменная состояния модального окна, где пользователь что о выбирает
    let modalState = {}; 

    // Вызов функций
    changeModalState(modalState); // Передача объекта modalState
    modals();
    tabs('.glazing_slider','.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider','.no_click', '.decoration_content >div >div', 'after_click');
    tabs('.balcon_icons','.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms(modalState);    // Передача объекта modalState
});

