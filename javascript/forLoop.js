// for loop
// a = a + 1 // a += 1 // a++

console.log("Loop started");

for (let i=0; i<5; i++) {
  if ((i)%2 == 0) {
    console.log(i, " is even.");
  }
  
}

console.log("Loop ended");


// 1. Print numbers from 10 to 1 in reverse order.
for (let i=10; i>0; i--) {
  console.log(i);
}
console.log();


// 2. ⁠Find the sum of numbers from 1 to 10.
let sum = 0;
for (let i = 0; i < 10; i++) {
  sum += i+1;
}
console.log(sum);
console.log();


// 3. Print all numbers between 1 and 100 that are divisible by both 3 and 5.
for (let i = 0; i < 100; i++) {
  if ((i+1)%3 == 0 && (i+1)%5 == 0) {
    console.log(i+1);
  }
}
console.log();

// 4. ⁠Find the factorial of a number.
const num = 5;
let result = 1;
for (let i = 0; i < num; i++) {
  result = result * (i+1)
}
console.log(result);



