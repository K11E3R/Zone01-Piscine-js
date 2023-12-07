document.addEventListener("keydown", compose);

function compose(e) {
    if (!e) return;

    const notes = document.getElementsByClassName("note");

    if ([...Array(26).keys()].map(i => i + 97).includes(e.key.charCodeAt(0))) {
        const intensity = (255 / 26) * (e.key.charCodeAt(0) - 97);
        const div = document.createElement("div");
        div.className = "note";
        div.style.backgroundColor = `rgb(${intensity}, ${intensity}, ${intensity})`;
        div.textContent = e.key;
        document.body.appendChild(div);
    } else if (e.key === "Backspace") {
        notes[notes.length - 1]?.remove();
    } else if (e.key === "Escape") {
        while (notes.length > 0) notes[0].remove();
    }
}

export { compose };
