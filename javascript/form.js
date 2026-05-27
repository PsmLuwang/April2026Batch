
// members data
const members = [];

// add new member
function addNewMember(e) {
  e.preventDefault(); // stop refresh
  
  // e/target/name/value
  const data = e.target;

  const newMember = {
    name: data.name.value,
    email: data.email.value
  }

  members.push(newMember);
  

  renderMembers();

  e.target.reset();
}


// display members
function renderMembers() {
  const container = document.getElementById("container");
  container.innerHTML = ``;
  
  for (let i = 0; i < members.length; i++) {
    container.innerHTML += `
      <div class="border border-gray-300 rounded-lg w-md max-w-[calc(100%-40px)] mx-auto p-5 shadow-md hover:shadow-lg hover:translate-x-1 transition-all flex gap-4 items-center">
        <div class="bg-gray-500 w-10 h-10 grid place-content-center text-white text-lg font-semibold rounded-full">
        ${members[i].name[0].toUpperCase()}
        </div>
        <div class="-space-y-1">
          <h1 class="font-semibold">${members[i].name}</h1>
          <p class="text-gray-600 text-sm">${members[i].email}</p>
        </div>
      </div>
    `;
  }
  
}


// display members
renderMembers();





