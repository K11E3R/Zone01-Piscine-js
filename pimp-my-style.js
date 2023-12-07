import { styles } from "./pimp-my-style.data.js";

let counter = 0;

function pimp() {
    const button = document.querySelector("button.button");
    if (!button.classList.toggle("unpimp")) {
        button.classList.add(styles[counter++]);
    } else {
        button.classList.remove(styles[--counter]);
    }
    if (counter === styles.length) {
        button.classList.toggle("unpimp");
    }
}

export { pimp };
