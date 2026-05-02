function handleYes() {
    alert("Thank you 🥹❤️");
}

function moveButton(button) {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    button.style.transform = `translate(${x}px, ${y}px)`;
}
document.addEventListener("DOMContentLoaded", function () {
    const greetingCard = document.querySelector(".greeting-card");
    greetingCard.style.transform = "scale(0.95)";
    setTimeout(() => {
        greetingCard.style.transition = "transform 0.5s ease";
        greetingCard.style.transform = "scale(1)";
    }, 100);
});
