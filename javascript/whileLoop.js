// // While Loop

// let i = 0;

// while (i<10) {
//   if ((i+1)%2 == 0) {
//     console.log(i+1);
//   }

//   i++;
// }

// console.log("");


// let inputNum = 5;
// while (inputNum != 5) {
//   inputNum = prompt("Enter 5 to exit.")
// }

// console.log("");


// // do while 
// let j = 0;
// do {
//   console.log(j);
  

//   j++
// } while (j<5);




// let a = 1;

// while (a<=100) {
//   if (a%3 == 0 && a%5 == 0) {
//     console.log(a);
//   }
//   a++;
// }

// console.log("");

// let b = 0;
// do {
//   console.log("do while ", b);
//   b++;
// } while (b<5);

/*
  Assignment:
  1. Print numbers from 10 to 1 in reverse order.
  2. ⁠Find the sum of numbers from 1 to 10.
  3. ⁠Print all numbers between 1 and 100 that are divisible by both 3 and 5.
  4. ⁠Find the factorial of a number.
    Example:
    5! = 5 × 4 × 3 × 2 × 1
*/

// for (let i = 0; i < 7; i++) {
//   let row = "";

//   for (let j = 0; j < 7; j++) {
//     if (i == 0 || i == 6 || j == 0 || j == 6) {
//       row += "* ";
//     } else {
//       row += "  ";
//     }
//   }

//   console.log(row);
// }

// console.log(" ");


// for (let i = 0; i < 7; i++) {
//   let row = "";

//   for (let j = 0; j < 7; j++) {
//     if (i == 0 || i == 3 || j == 0 || (j == 6 && i <= 3)) {
//       row += "* ";
//     } else {
//       row += "  ";
//     }
//   }

//   console.log(row);
// }


for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
  
}