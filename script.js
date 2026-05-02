
function showMessage() {
    alert("I'm sorry for my actions");
}
document.addEventListener("DOMContentLoaded", function () {
    const greetingCard = document.querySelector(".greeting-card");
    greetingCard.style.transform = "scale(0.95)";
    setTimeout(() => {
        greetingCard.style.transition = "transform 0.5s ease";
        greetingCard.style.transform = "scale(1)";
    }, 100);
});
