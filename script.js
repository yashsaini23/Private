let messages = [
    "Please 🥺",
    "Ek baar maaf kar do 😭",
    "I’ll not repeat it 🙏",
    "Please yaar 🥹",
    "Sorry bol raha hoon na 😔"
];

let index = 0;

function handleYes() {
    alert("Thank you 🥹❤️");
}

function moveButton(button) {
    const container = document.querySelector(".greeting-card");

    // Get boundaries
    const maxX = container.offsetWidth - button.offsetWidth - 20;
    const maxY = container.offsetHeight - button.offsetHeight - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    button.style.position = "absolute";
    button.style.left = x + "px";
    button.style.top = y + "px";

    // Update message with fade effect
    const text = document.getElementById("pleaseText");
    text.style.opacity = 0;

    setTimeout(() => {
        text.innerText = messages[index];
        text.style.opacity = 1;
    }, 200);

    index = (index + 1) % messages.length;
}
