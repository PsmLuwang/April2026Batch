




function calc(a, b, action) {
  const result = action(a, b);

  console.log(result);
}

function add(a, b) {
  return a + b
}

function sub(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

calc(20, 10, multiply);