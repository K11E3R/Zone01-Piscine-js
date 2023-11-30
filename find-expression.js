function findExpression(num) {
  let ops = [];
  let val = num;
  while (val > 1 && val >= 0) {
    if (val % 2 === 0) {
      val = val / 2;
      ops.push(mul2);
    } else {
      val = val - 4;
      ops.push(add4);
    }
  }
  if (val === 1) {
    let expr = ops.reverse().join(" ");
    return "1 " + expr;
  } else {
    return undefined;
  }
}
