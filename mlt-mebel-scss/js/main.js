/* ---------------- mobile nav -------------------------- */

function mobileNav() {
    // Mobile nav button
    const navBtn = document.querySelector('.mobile-nav-btn');
    const nav = document.querySelector('.mobile-nav');
    const menuIcon = document.querySelector('.nav-icon');

    // Функция для закрытия меню
    function closeNav() {
        nav.classList.remove('mobile-nav--open');
        menuIcon.classList.remove('nav-icon--active');
        document.body.classList.remove('no-scroll');
    }

    navBtn.onclick = function () {
        nav.classList.toggle('mobile-nav--open');
        menuIcon.classList.toggle('nav-icon--active');
        document.body.classList.toggle('no-scroll');
    };

    // Получаем все ссылки внутри меню
    const navLinks = document.querySelectorAll('.mobile-nav a');

    // Добавляем обработчик события для каждой ссылки
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            closeNav(); // Закрываем меню при клике на ссылку
        });
    });
}

mobileNav();


/* ---------------- Swiper -------------------------- */

const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true, // Включаем зацикливание слайдов
    autoplay: {
        delay: 4000, // Увеличьте задержку до 4000 миллисекунд (4 секунды)
        disableOnInteraction: false,
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
    speed: 800, // Добавьте параметр speed для настройки времени анимации в миллисекундах
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});