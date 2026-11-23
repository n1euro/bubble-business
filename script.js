
document.addEventListener("DOMContentLoaded", () => {

    console.log("Bubble Business успешно запущен!");

    // Находим карточки и нижние блоки сайта
    const elements = document.querySelectorAll(
        ".service-card, .about, footer"
    );

    // Добавляем класс анимации
    elements.forEach(element => {
        element.classList.add("reveal");
    });

    // Проверяем поддержку анимации появления
    if (!("IntersectionObserver" in window)) {
        elements.forEach(element => {
            element.classList.add("is-visible");
        });
        return;
    }

    // Следим за появлением элементов на экране
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    elements.forEach(element => {
        observer.observe(element);
    });

});
