function createCircle() {
    document.addEventListener('mousedown', event => {
        const newCirc = document.createElement('div');
        newCirc.className = 'circle';
        newCirc.id = 'Tester';
        const x = event.clientX - 25;
        const y = event.clientY - 25;
        newCirc.style.cssText = `left: ${x}px; top: ${y}px; background: white;`;
        document.body.appendChild(newCirc);
    });
}

function moveCircle() {
    document.addEventListener('mousemove', event => {
        const lastCircle = document.querySelector('div:last-child');
        lastCircle.style.left = `${event.clientX - 25}px`;
        lastCircle.style.top = `${event.clientY - 25}px`;
        document.body.append(lastCircle);
        const midBox = document.querySelector('div.box');
        const dims = midBox.getBoundingClientRect();

        if (lastCircle.className !== 'box') {
            const isInsideX = (x) => x > dims.x && x < dims.right - 50;
            const isInsideY = (y) => y > dims.top && y < dims.bottom - 50;

            if (isInsideX(+lastCircle.style.left.replace('px', '')) && isInsideY(+lastCircle.style.top.replace('px', ''))) {
                lastCircle.style.background = 'var(--purple)';
            }
        }

        const adjustPosition = (axis, bound) => {
            if (event[axis] - 25 < bound) {
                lastCircle.style[axis] = bound.toString() + 'px';
            } else if (event[axis] - 25 > dims[bound] - 50) {
                lastCircle.style[axis] = (dims[bound] - 50).toString() + 'px';
            }
        };

        if (lastCircle.style.background === 'var(--purple)') {
            adjustPosition('left', 'x');
            adjustPosition('top', 'top');
            adjustPosition('top', 'bottom');
        }
    });
}

function setBox() {
    const centerBox = document.createElement('div');
    centerBox.className = 'box';
    document.body.append(centerBox);
}

export {createCircle, moveCircle, setBox};