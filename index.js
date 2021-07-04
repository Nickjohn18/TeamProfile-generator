const inquirer = require("inquirer");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const generateTeam = require("./src/generateTeam");
//const generateTeam = require("./src/generateTeam");
let team = [];

function startBuild() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter your team manager's name",
      },
      {
        type: "input",
        name: "id",
        message: "Enter your team manager's id",
      },
      {
        type: "input",
        name: "email",
        message: "Enter your team manager's email",
      },
      {
        type: "input",
        name: "office",
        message: "Enter your team manager's office number",
      },
    ])
    .then((data) => {
      const nameManager = data.name;
      const emailManager = data.email;
      const officeManager = data.office;
      const id = data.id;
      const teamManager = new Manager(
        nameManager,
        id,
        emailManager,
        officeManager
      );
      team.push(teamManager);
      //console.log(teamManager);
      addNewMember();
    });
}

function addNewMember() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Add additional team member or finalize your team?",
        name: "add",
        choices: [
          "Add a new member, engineer",
          "Add a new member, intern",
          "Complete my team",
        ],
      },
    ])
    .then((data) => {
      if (data.add === "Add a new member, engineer") {
        console.log("Adding a new engineer!");
        newEngineer();
      } else if (data.add === "Add a new member, intern") {
        console.log("Adding a new intern!");
        newIntern();
      } else if (data.add === "Complete my team") {
        console.log("Finalizing your team!");
        completeTeam();
      }
    });
}
function newEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter your engineers' name",
      },
      {
        type: "input",
        name: "id",
        message: "Enter your engineers' id",
      },
      {
        type: "input",
        name: "email",
        message: "Enter your engineers' email",
      },
      {
        type: "input",
        name: "github",
        message: "Enter your engineers' github",
      },
    ])
    .then((data) => {
      const nameEngineer = data.name;
      const emailEngineer = data.email;
      const gitHub = data.github;
      const id = data.id;
      const teamEngineer = new Engineer(
        nameEngineer,
        id,
        emailEngineer,
        gitHub
      );
      team.push(teamEngineer);
      addNewMember();
    });
}

function newIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter your intern's name",
      },
      {
        type: "input",
        name: "id",
        message: "Enter your intern's id",
      },
      {
        type: "input",
        name: "email",
        message: "Enter your intern's email",
      },
      {
        type: "input",
        name: "school",
        message: "Enter your intern's school",
      },
    ])
    .then((data) => {
      const nameIntern = data.name;
      const emailIntern = data.email;
      const school = data.school;
      const id = data.id;
      const teamIntern = new Intern(nameIntern, id, emailIntern, school);
      team.push(teamIntern);
      addNewMember();
    });
}

function completeTeam() {
  return generateTeam(team);
}
startBuild();
