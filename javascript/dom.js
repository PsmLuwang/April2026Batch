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


// DOM
// const studentContainer = document.getElementById("studentContainer");

// studentContainer.innerHTML += `
//   <h3>Student - ${students[0].name} (${students[0].standard}/${students[0].section}) Roll - ${students[0].rollNo}, Contact - ${students[0].phone} (${students[0].email})</h3>
// `;
// studentContainer.innerHTML += `
//   <h3>Student - ${students[1].name} (${students[1].standard}/${students[1].section}) Roll - ${students[1].rollNo}, Contact - ${students[1].phone} (${students[1].email})</h3>
// `;
// studentContainer.innerHTML += `
//   <h3>Student - ${students[2].name} (${students[2].standard}/${students[2].section}) Roll - ${students[2].rollNo}, Contact - ${students[2].phone} (${students[2].email})</h3>
// `;


const studentContainer = document.getElementById("studentContainer");
for (let i = 0; i < students.length; i++) {
  // studentContainer.innerHTML += `
  //   <h3>Student - ${students[i].name} (${students[i].standard}/${students[i].section}) Roll - ${students[i].rollNo}, Contact - ${students[i].phone} (${students[i].email})</h3>
  // `;


  studentContainer.innerHTML += `
    <div class="border border-gray-300 p-5 rounded-lg w-80 shadow-md space-y-3 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

      <div class="flex gap-3">
        <div class="bg-gray-600 w-10 h-10 grid place-content-center rounded-full text-white font-bold text-xl">
          ${students[i].name[0].toUpperCase()}
        </div>
        <div class="-space-y-1">
          <h1 class="font-semibold">${students[i].name}</h1>
          <p class="text-xs font-semibold text-gray-600">(${students[i].standard}/${students[i].section}) Roll no. ${students[i].rollNo}</p>
        </div>
      </div>

      <div class="text-sm text-gray-800">
        <h1><span class="font-semibold">Phone: </span> +91 - ${students[i].phone}</h1>
        <h1><span class="font-semibold">Email: </span> ${students[i].email}</h1>
      </div>

    </div>
  `;
}



