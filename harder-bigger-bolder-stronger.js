function generateLetters() {
    const body = document.body;
    for (let i = 0; i < 120; i++) {
        const letter = document.createElement("div");
        letter.style.fontSize = `${11 + i}px`;
        letter.textContent = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        letter.style.fontWeight = i < 40 ? "300" : i < 80 ? "400" : "600";
        body.appendChild(letter);
    }
}

export { generateLetters };
