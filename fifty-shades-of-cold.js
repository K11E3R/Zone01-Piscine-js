import { colors } from "./fifty-shades-of-cold.data.js";

function generateClasses() {
    const style = document.createElement("style");
    style.innerHTML = colors.map(color => `.${color} {\n  background: ${color};\n }\n\n`).join('');
    document.head.appendChild(style);
}

function generateColdShades() {
    const body = document.body;
    colors.forEach(color => {
        if (/(aqua|blue|turquoise|green|cyan|navy|purple)/.test(color)) {
            const div = document.createElement("div");
            div.classList.add(color);
            div.textContent = color;
            body.appendChild(div);
        }
    });
}

function choseShade(shade) {
    document.querySelectorAll("div").forEach(div => div.className = shade);
}

export { generateClasses, generateColdShades, choseShade };
