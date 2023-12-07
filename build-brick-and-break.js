function build(n) {
    const body = document.body;
    let bricks = 1;
    const interval = setInterval(() => {
        const brick = document.createElement("div");
        brick.id = `brick-${bricks}`;
        bricks % 3 === 2 && (brick.dataset.foundation = true);
        body.appendChild(brick);
        bricks++;
        bricks > n && clearInterval(interval);
    }, 100);
}

function repair(...ids) {
    ids.forEach((id) => {
        const brick = document.getElementById(id);
        brick.dataset.repaired = brick.getAttribute("foundation") ? "in progress" : true;
    });
}

function destroy() {
    const bricks = document.querySelectorAll("div");
    bricks[bricks.length - 1]?.remove();
}

export { build, repair, destroy };
