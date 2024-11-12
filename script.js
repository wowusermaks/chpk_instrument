
document.addEventListener("DOMContentLoaded", () => {
    // Забезпечуємо перехід до сторінки кошика на всіх сторінках
    document.querySelectorAll(".cart-btn").forEach(button => {
        button.addEventListener("click", () => {
            window.location.href = "cart.html";
        });
    });
});
