// const arr = [
//   "A", // 0
//   "B", // 1
//   "C"  // 2
// ];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// console.log("");


// const obj = {
//   objA: "A",
//   objB: "B",
//   objC: "C"
// }

// console.log(obj.objA);
// console.log(obj.objB);
// console.log(obj.objC);



// Student Data
// Name, Standard, Section, RollNo, Phone, Email

// const studentObj = {
//   name: "John",
//   standard: 5,
//   section: "A",
//   rollNo: 25,
//   phone: 1234567890,
//   email: "john@gmail.com"
// }


const students = [
  {
    name: "John",
    standard: 5,
    section: "A",
    rollNo: 25,
    phone: 1234567890,
    email: "john@gmail.com"
  },
  {
    name: "Max",
    standard: 7,
    section: "A",
    rollNo: 23,
    phone: 5373523842,
    email: "max@gmail.com"
  },
  {
    name: "Jackson",
    standard: 9,
    section: "B",
    rollNo: 52,
    phone: 71364817412,
    email: "jackson@gmail.com"
  },

]

// Student - John (5/A) Roll - 25, Contact - 1234567890 (john@gmail.com)
for (let i = 0; i < students.length; i++) {
  // console.log(students[i]);
 
  const output = `Student - ${students[i].name} (${students[i].standard}/${students[i].section}) Roll - ${students[i].rollNo}, Contact - ${students[i].phone} (${students[i].email})`;

  console.log(output);
  
}

