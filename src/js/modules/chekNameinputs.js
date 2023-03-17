// Передача селектора,проверка на не число и удаление не верных данных
const chekNameinputs = (selector) =>{
    const numInputs = document.querySelectorAll('selector');
      
    numInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        });
    });
};

export default chekNameinputs;