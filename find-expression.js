const add4 = (x) => x + 4;
const mul2 = (x) => x * 2;

function findExpression(num) {
  let ops = [];
  let val = num;
  while (val > 1 && val >= 0) {
    if (val % 2 === 0) {
      val = val / 2;
      ops.push("*2");
    } else {
      val = val - 4;
      ops.push("+4");
    }
  }
  if (val === 1) {
    let expr = ops.reverse().join(" ");
    return "1 " + expr;
  } else {
    return undefined;
  }
}