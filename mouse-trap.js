function createCircle() {
    document.addEventListener('mousedown', (event) => {
        const newCirc = document.createElement('div');
        newCirc.className = 'circle';
        newCirc.id = 'Tester';
        const [x, y] = [event.clientX - 25, event.clientY - 25];
        newCirc.style.cssText = `left: ${x}px; top: ${y}px; background: white;`;
        document.body.appendChild(newCirc);
    });
}

function moveCircle() {
    document.addEventListener('mousemove', (event) => {
        const lastCircle = document.querySelector('div:last-child');
        lastCircle.style.cssText = `left: ${event.clientX - 25}px; top: ${event.clientY - 25}px;`;
        document.body.append(lastCircle);
        const midBox = document.querySelector('div.box');
        const dims = midBox.getBoundingClientRect();

        if (lastCircle.className !== 'box' && isInsideBox(lastCircle, dims)) {
            lastCircle.style.background = 'var(--purple)';
        }

        const adjustPosition = (axis, bound) => {
            const pos = event[axis] - 25;
            if (lastCircle.style.background === 'var(--purple)') {
                lastCircle.style[axis] = `${pos < bound ? bound : pos > dims[bound] - 50 ? dims[bound] - 50 : pos}px`;
            }
        };

        adjustPosition('left', dims.x);
        adjustPosition('top', dims.top);
        adjustPosition('top', dims.bottom - 50);
    });
}

function setBox() {
    const centerBox = document.createElement('div');
    centerBox.className = 'box';
    document.body.append(centerBox);
}

function isInsideBox(circle, dims) {
    const [x, y] = [parseInt(circle.style.left), parseInt(circle.style.top)];
    return x > dims.x && x < dims.right - 50 && y > dims.top && y < dims.bottom - 50;
}

export { createCircle, moveCircle, setBox };
