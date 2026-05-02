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
    // Move button randomly
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    button.style.transform = `translate(${x}px, ${y}px)`;

    // Show looping "please" messages
    const text = document.getElementById("pleaseText");
    text.innerText = messages[index];

    index = (index + 1) % messages.length;
}
