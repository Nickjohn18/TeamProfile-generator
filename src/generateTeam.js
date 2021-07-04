const generateHtml = require("./template");
const fs = require("fs");

let teamBuilding = [];

const generateTeam = function (data) {
  for (let i = 0; i < data.length; i++) {
    const team = data[i];
    const teamRole = team.getRole();
    //Manager role
    if (teamRole === "Manager") {
      const managerRole = `
        <div class="card mt-3 shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem;">
        <div class="card-body">
            <h3 class="card-title" id="name">${team.name}</h5>
            <h4 class="card-title" id="title">${team.title}</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" id="id">ID: ${team.id}</li>
            <li class="list-group-item" id="officeNumber">OfficeNumber: ${team.officeNumber}</li>
        </ul>
        <div class="card-body">
           <p> Email: <a href="mailto: ${team.email}" class="card-link" id="email">${team.email}</a> </p>
        </div>
        </div>`;
      teamBuilding.push(managerRole);
    }
    if (teamRole === "Engineer") {
      const engineerRole = `
        <div class="card mt-3 shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem;">
        <div class="card-body">
            <h3 class="card-title" id="name">${team.name}</h5>
            <h4 class="card-title" id="title">${team.title}</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" id="id">ID: ${team.id}</li>
        </ul>
        <div class="card-body">
            <p> Github: <a href="https://github.com/${team.github}" class="card-link" id="email">${team.github}</a> </p>
           <p> Email: <a href="mailto: ${team.email}" class="card-link" id="email">${team.email}</a> </p>
        </div>
        </div>
        `;
      teamBuilding.push(engineerRole);
    }
    if (teamRole === "Intern") {
      const internRole = `
        <div class="card mt-3 shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem;">
        <div class="card-body">
            <h3 class="card-title" id="name">${team.name}</h5>
            <h4 class="card-title" id="title">${team.title}</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item" id="id">ID: ${team.id}</li>
            <li class="list-group-item" id="school">School: ${team.school}</li>
        </ul>
        <div class="card-body">
           <p> Email: <a href="mailto: ${team.email}" class="card-link" id="email">${team.email}</a> </p>
        </div>
        </div>
        `;
      teamBuilding.push(internRole);
    }
  }
  process();
};

function writeFile(data) {
  fs.writeFile("./dist/index.html", data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Your team profile has been generated!");
  });
}

function process() {
  const team = teamBuilding.join("");
  const generate = generateHtml(team);
  writeFile(generate);
}
module.exports = generateTeam;
