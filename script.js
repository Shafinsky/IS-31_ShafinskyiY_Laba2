const filterButton = document.querySelector('.filter-button');
const filterModal = document.querySelector('.filter-modal');
const applyFiltersButton = document.querySelector('.apply-filters');

filterButton.addEventListener('click', () => {
    filterModal.classList.toggle('hidden');
});

applyFiltersButton.addEventListener('click', () => {
    filterModal.classList.add('hidden');
});

document.querySelector('.apply-filters').addEventListener('click', () => {
    // Логика применения фильтров, например, сбор значений и отправка на сервер
    alert('Фільтри застосовано');
});
// script.js

// Получаем все кнопки предустановленных значений
const priceButtons = document.querySelectorAll('.price-options button');
const priceToInput = document.getElementById('price-to');
const priceFromInput = document.getElementById('price-from');

// Добавляем обработчик события на каждую кнопку
priceButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Устанавливаем значение в поле "До"
        priceToInput.value = button.getAttribute('data-price');
        
        // Убираем активный класс у всех кнопок
        priceButtons.forEach(btn => btn.classList.remove('active'));
        
        // Добавляем активный класс к нажатой кнопке
        button.classList.add('active');
    });
});

// Пример для обработки поля "Від"
priceFromInput.addEventListener('change', () => {
    // Сохраняет значение в поле "Від" после изменения и не сбрасывает его
    if (priceFromInput.value) {
        priceFromInput.classList.add('selected');
    } else {
        priceFromInput.classList.remove('selected');
    }
});