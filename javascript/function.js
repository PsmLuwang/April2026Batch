
// function introMe(name, age) {
//   // const name = "Salam Priyansu Meitei";
//   const output = `My name is ${name}. I'm ${age}years old.`;
//   console.log(output);

//   return "success"
// }


// // introMe("Messi", 30);
// // introMe("Ronaldo", 36);
// // introMe("Neymar", 32);
// const a = introMe("Neymar", 32);
// console.log("Line 15 ", a);


function calc(action, num1, num2) {

  if (action == "add") {
    const result = num1 + num2;
    return result;
    console.log("test")

  } else if (action == "multiply") {
    const result = num1 * num2;
    return result;

  } else {
    return "Invalid"
  }
}

// const output = calc("add", 10, 20);
// const sum = calc("add", 10, 20) + calc("multiply", 10, 20)
// console.log(calc("add", 10, 20));










// function test(a, b) {

//   const sum = a + b;
//   console.log("line 50", sum);

//   return sum;
// }


// const result = test(5, 6);

// console.log("line 57", result);

// const arr = [
//   {
//     name: "test",
//     id: 1
//   },
//   {
//     name: "test",
//     id: 2
//   },
//   {
//     name: "test",
//     id: 3
//   },
// ]


// function refresh() {

//   const container = document.getElementById("container");
  
//   container.innerHTML = ``;
  
//   for (let i = 0; i < arr.length; i++) {
//     container.innerHTML += `
//       <h1>Hello ${arr[i].name} ${arr[i].id}</h1>
//     `;
//   }

// }

// refresh();


