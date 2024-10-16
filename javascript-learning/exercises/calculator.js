/*
1)4x function - 2x parametry
2) Implementace vypoctu
3) Vypsani do konzole
4) provolani
*/

function add(a, b) {
  const result = a + b;
  console.log(`Add operation with numbers: ${a} + ${b} = ${result}`);
}

function subtract(a, b) {
  const result = a - b;
  console.log(`Subtract operation with numbers: ${a} - ${b} = ${result}`);
}

function multiply(a, b) {
  const result = a * b;
  console.log(`Multiply operation with numbers: ${a} * ${b} = ${result}`);
}

function divide(a, b) {
  const result = a / b;
  console.log(`Divide operation with numbers: ${a} / ${b} = ${result}`);
}

add(15, 48);
subtract(98, 41);
multiply(54, 30);
divide(88, 6);
