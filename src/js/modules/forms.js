//Отправка формы на сайт
const forms = () => {
    // Получаем элементы
    const form = document.querySelectorAll('form'),  
        inputs = document.querySelectorAll('input'),
        phoneInputs = document.querySelectorAll('input[name="user_phone"]');

        // Проверка на не число и удаление не верных данных
        phoneInputs.forEach(item => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/\D/, '');
            });
        });

        // Создаём объект с сообщениями
    const message = {
        loading: 'Загрузка...',                      
        success: 'Спасибо! Скоро с вами свяжутся.',
        failure: 'Что то пошло не так...'
    };

     // Функция отвечает за отправку запроса
    const postData = async (url, data) =>{                             
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url,{
            method: 'POST',
            body: data
        });
        return await res.text();
    }
  // Функция по очищению всех input
    const clearInputs = () =>{                                  
            inputs.forEach(item =>{
            item.value = '';
        });
    };

    //Перебор форм,обработчик событий sumbit
    form.forEach(item =>{
        item.addEventListener('submit',(e) =>{
            e.preventDefault();
                // Блок что показывает пользователю  сообщения
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            // Собираем все данные из введёной формы
            const formData = new FormData(item);

            // Отправляем запрос на сервер
            postData('assets/server.php', formData)
                .then(res =>{
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure )
                .finally(() =>{
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
        });
    });
};

export default forms;