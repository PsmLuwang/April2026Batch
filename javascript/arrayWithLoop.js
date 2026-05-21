// const students = ["Max", "Jackson", "John", "Ronaldo", "Messi", "Neymar"];

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

// console.log(students.indexOf("Ronaldo"));


// const nums = [7, 8, 5, 6, 2, 3, 4, 9, 1, 10];

// for (let i = 0; i < nums.length; i++) {

//   for (let j = 0; j < nums.length - 1 - i; j++) {

//     if (nums[j] > nums[j + 1]) {

//       let temp = nums[j];
//       nums[j] = nums[j + 1];
//       nums[j + 1] = temp;

//     }

//   }

// }

// console.log(nums);


// print even numbers
// print 10-1 
// find the sum of the elements
// find the sum of the even numbers only
// arrange in ascending order



// nested array 2D array
const arr = [[1,2], [3,4,11], [5,6], [7,8,12,13], [9,10]]
console.log(arr[4][0]);

// arr[0][0]
// arr[0][1]
// arr[1][0]
// arr[1][1]
// arr[2][0]
// arr[2][1]
// arr[3][0]
// arr[3][1]
// arr[4][0]
// arr[4][1]

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j], `i=${i}, j=${j}`);
  }
  
}
