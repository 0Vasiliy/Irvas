import chekNameinputs from "./chekNameinputs";
// Передается объект state,получаем элементы
const changeModalState = (state) =>{
    const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox');
        
        // Валидация на не число и удаление не верных данных
        chekNameinputs('#width');
        chekNameinputs('#height');

        // Функция которая отслеживает событие,элемент и записывает свойство в state
        function bindActionToElems (event, elem, prop) {   
             // Функция перебора элемента при событиии
            elem.forEach((item, i) => {
                item.addEventListener(event, () => {
                    switch(item.nodeName) {
                        case 'SPAN' :
                            state[prop] = i;
                            break;
                        case 'INPUT' :
                            if (item.getAttribute('type') === 'checkbox') {
                                i === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";
                                 //Выбор только одного checkbox
                                elem.forEach((box, j) => {
                                    box.checked = false;
                                    if (i == j) {
                                        box.checked = true;
                                    }
                                });
                            } else {
                                state[prop] = item.value;
                            }
                            break;
                        case 'SELECT' :
                            state[prop] = item.value;
                            break;
                    }
    
                    console.log(state);
                });
            });
        }

        // Привязка действий к элементам и событиям
        bindActionToElems('click', windowForm, 'form');
        bindActionToElems('input', windowHeight, 'height');
        bindActionToElems('input', windowWidth, 'width');
        bindActionToElems('change', windowType, 'type');
        bindActionToElems('change', windowProfile, 'profile');
      
};

export default changeModalState; 