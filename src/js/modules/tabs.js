// tabs
const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
        //Передача селекторов и получение переменных
        const header = document.querySelector(headerSelector),
            tab = document.querySelectorAll(tabSelector),
            content = document.querySelectorAll(contentSelector);
        // Функция скрывающий определённый контент
        function hideTabContent(){
                content.forEach(item =>{
                    item.style.display = 'none';
                });
                tab.forEach(item =>{
                    item.classList.remove(activeClass);
                })
        }
        // Функция открывающий определённый контент
        function showTabContent(i = 0){
            content[i].style.display = 'block';
            tab[i].classList.add(activeClass);
        }
        hideTabContent();
        showTabContent();
        
        // Отслеживание таба,который клинул пользователь
        header.addEventListener('click',(e) => {                               
            const target = e.target;
            // Проверка самого target и что кликнули туда 
            if (target &&                                                                                                                
                (target.classList.contains(tabSelector.replace(/\./, "")) ||         
             target.parentNode.classList.contains(tabSelector.replace(/\./, "")))){
                //Перебор табов
                tab.forEach((item, i) => {
                    if (target == item || target.parentNode == item){      
                        hideTabContent();
                        showTabContent(i);
                    }
                })
            }
        });
};

export default tabs;