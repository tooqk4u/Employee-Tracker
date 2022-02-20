const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Role = require("./lib/Role");
const Department = require("./lib/Department");
//const figlet = require('figlet');
const connection = require("./db/connection");
const cTable = require("console.table");
const logo = require("asciiart-logo");
const { Server } = require("ws");
//let chalk = require("chalk");

const employeeData = [];

console.log(
  logo({
    name: "EMPLOYEE TRACKER",
    font: "Standard",
    lineChars: 10,
    padding: 3,
    margin: 2,
    borderColor: "bold-blue",
    logoColor: "bold-green",
    textColor: "purple",
  })
    .emptyLine()
    .right("@tooqk4u")
    .emptyLine()
    .render()
);

const promptQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "viewAll",
        message: "Select an option",
        choices: [
          "View ALL Employees",
          "View Departments",
          "View Roles",
          "Add Employee",
          "Add Department",
          "Add Role",
          "Update Role",
          "Exit",
        ],
      },
    ])
    .then((choice) => {
      if (choice.viewAll === "View ALL Employees") {
        viewEmployees();
      } else if (choice.viewAll === "View Departments") {
        viewDepartment();
      } else if (choice.viewAll === "View Roles") {
        viewRoles();
      } else if (choice.viewAll === "Add Department") {
        addDepartment();
      } else if (choice.viewAll === "Add Role") {
        addRole();
      } else if (choice.viewAll === "Add Employee") {
        addEmployee();
      } else if (choice.viewAll === "Update Role") {
        updateRole();
      } else {
          process.exit(0)
      }
    });

  
};

promptQuestions();
