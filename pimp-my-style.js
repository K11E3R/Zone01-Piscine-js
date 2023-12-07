import { styles } from "./pimp-my-style.data.js";

let counter = 0;

function pimp() {
    const button = document.querySelector("button.button");
    const isUnpimped = !button.classList.toggle("unpimp");

    if (isUnpimped) {
        button.classList.remove(styles[--counter]);
    } else {
        button.classList.add(styles[counter++]);
    }

    if (counter === styles.length || counter === 0) {
        button.classList.toggle("unpimp");
    }
}

export { pimp };
