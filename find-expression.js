function findExpression(number) {
  let result = 1;
  let expression = "";

  while (result < number) {
    if ((result + 4) <= number) {
      result += 4;
      expression += "+4 ";
    } else {
      result = 2;
      expression += "2 ";
    }
  }

  if (result === number) {
    return expression.trim();
  } else {
    return undefined;
  }
}