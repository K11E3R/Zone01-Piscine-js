class Circle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.diameter = 50;
        this.isTrapped = false;
        this.createHTML();
        this.move(x, y);
        circles.push(this);
    }

    createHTML() {
        this.HTML = document.createElement("div");
        this.HTML.className = "circle";
        this.HTML.style.cssText = `position: absolute; top: ${this.y}px; left: ${this.x}px; background: white;`;
        document.body.appendChild(this.HTML);
        this.trapped();
    }

    move(x, y) {
        this.trapped();
        if (!this.isTrapped) {
            this.x = x;
            this.y = y;
            this.HTML.style.top = `${this.y}px`;
            this.HTML.style.left = `${this.x}px`;
        } else {
            if (this.inRectangle(x, y) || this.inRectangle(x, this.y)) {
                this.x = x;
                this.HTML.style.left = `${this.x}px`;
            }
            if (this.inRectangle(x, y) || this.inRectangle(this.x, y)) {
                this.y = y;
                this.HTML.style.top = `${this.y}px`;
            }
        }
    }

    trapped() {
        this.isTrapped =
            this.x > box.x &&
            this.x + this.diameter < box.x + box.width &&
            this.y > box.y &&
            this.y + this.diameter < box.y + box.height;

        this.HTML.style.background = this.isTrapped ? "var(--purple)" : "white";
    }

    inRectangle(x, y) {
        return (
            x > box.x &&
            x + this.diameter < box.x + box.width &&
            y > box.y &&
            y + this.diameter < box.y + box.height
        );
    }
}

class Box {
    constructor() {
        this.createHTML();
        this.calculateDimensions();
    }

    createHTML() {
        this.HTML = document.createElement("div");
        this.HTML.className = "box";
        this.HTML.style.cssText = "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);";
        document.body.appendChild(this.HTML);
    }

    calculateDimensions() {
        this.x = this.HTML.offsetLeft - this.HTML.offsetWidth / 2 - 1;
        this.y = this.HTML.offsetTop - this.HTML.offsetHeight / 2 - 1;
        this.width = this.HTML.offsetWidth + 1;
        this.height = this.HTML.offsetHeight + 1;
    }
}

const circles = [];
let box;

document.body.addEventListener("click", (e) => createCircle(e));
document.body.addEventListener("mousemove", (e) => moveCircle(e));

function createCircle(e) {
    if (e) new Circle(e.clientX - 25, e.clientY - 25);
}

function moveCircle(e) {
    if (e && circles.length) circles[circles.length - 1].move(e.clientX - 25, e.clientY - 25);
}

function setBox() {
    box = new Box();
}

export { createCircle, moveCircle, setBox };
