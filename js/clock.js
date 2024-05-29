// бургер меню
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");

  if (burger && nav) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("show");
      burger.classList.toggle("toggle");
    });
  } else {
    console.error("Burger menu or navigation links not found in the DOM.");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.getElementById("product-select");
  const quantityInput = document.getElementById("quantity");
  const totalPriceInput = document.getElementById("total-price");

  // Функция для вычисления итоговой стоимости
  function calculateTotalPrice() {
    const productPrice = parseFloat(productSelect.value);
    const quantity = parseFloat(quantityInput.value);

    // Проверяем, чтобы количество было больше 0
    if (quantity > 0) {
      const totalPrice = productPrice * quantity;
      totalPriceInput.value = isNaN(totalPrice) ? "" : totalPrice.toFixed(2);
    } else {
      totalPriceInput.value = ""; // Обнуляем значение итоговой стоимости, если количество меньше или равно 0
    }
  }

  // Событие изменения выбранного товара
  productSelect.addEventListener("change", calculateTotalPrice);

  // Событие ввода количества
  quantityInput.addEventListener("input", calculateTotalPrice);

  // Вызываем функцию расчета итоговой стоимости при загрузке страницы
  calculateTotalPrice();
});

//текущее время
document.addEventListener("DOMContentLoaded", (event) => {
  function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.querySelector(".clock").textContent = timeString;
  }

  setInterval(updateClock, 1000);
  updateClock();
});

//карта
function initMap() {
  const location = { lat: 58.0105, lng: 56.2294 }; // Example coordinates for Perm, Russia
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: location,
  });
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}

// Скрипт даты
function updateDate() {
  const now = new Date();
  const days = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const day = days[now.getDay()];
  const date = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  const dateString = `${day}, ${date} ${month} ${year}`;
  document.querySelector(".date").textContent = dateString;
}

updateDate();

//проверка имени и фамилии
const form = document.querySelector(".forms");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");

form.addEventListener("submit", function (event) {
  const namePattern = /^[а-яА-ЯёЁ]+$/;

  if (!namePattern.test(firstNameInput.value)) {
    alert("Пожалуйста, введите корректное имя (только русские буквы)");
    event.preventDefault();
  }

  if (!namePattern.test(lastNameInput.value)) {
    alert("Пожалуйста, введите корректную фамилию (только русские буквы)");
    event.preventDefault();
  }
});

document.querySelector(".burger-menu").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
});
