




const teachers = [
  {
    name: "John Doe",
    subject: "Mathematics",
    experience: 10
  },
  {
    name: "Jane Smith",
    subject: "English",
    experience: 8
  },
  {
    name: "Emily Johnson",
    subject: "Science",
    experience: 12
  }
]

const students = [
  {
    name: "Alice Brown",
    grade: "A",
    age: 20
  },
  {
    name: "Bob Green",
    grade: "B",
    age: 22
  },
  {
    name: "Charlie White",
    grade: "A",
    age: 19
  }
]



function display(displayFor) {
  const container = document.getElementById("container");
  container.innerHTML = '';

  if (displayFor == "teachers") {
    for (let i = 0; i < teachers.length; i++) {
      container.innerHTML += `
        <h1>Name: ${teachers[i].name}, Subject: ${teachers[i].subject}, Experience: ${teachers[i].experience}</h1>
      `;
    }
  } else {
    for (let i = 0; i < students.length; i++) {
      container.innerHTML += `
        <h1>Name: ${students[i].name}, Grade: ${students[i].grade}, Age: ${students[i].age}</h1>
      `;
    }
  }
}


function displayTeachers() {
  const container = document.getElementById("container");
  container.innerHTML = '';

  for (let i = 0; i < teachers.length; i++) {
    container.innerHTML += `
      <h1>Name: ${teachers[i].name}, Subject: ${teachers[i].subject}, Experience: ${teachers[i].experience}</h1>
    `;
  }
}



function displayStudents() {
  const container = document.getElementById("container");
  container.innerHTML = '';

  for (let i = 0; i < students.length; i++) {
    container.innerHTML += `
      <h1>Name: ${students[i].name}, Grade: ${students[i].grade}, Age: ${students[i].age}</h1>
    `;
  }

}