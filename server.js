const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Role = require("./lib/Role");
const Department = require("./lib/Department");
const figlet = require('figlet');
const connection = require("./db/connection");
const cTable = require("console.table");
const logo = require("asciiart-logo");
const { Server } = require("ws");
const chalk = require("chalk");



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

  function viewEmployees() {
    console.log("Viewing all Employees");
    //connection.query(`SELECT * FROM employee`,
    connection.query(
      `
        SELECT 
        employee.id AS ID,
        employee.first_name AS FirstName,
        employee.last_name AS LastName,
        role.title AS Title, 
        role.salary AS $alary,
        department.name AS Department
        FROM employee
        LEFT JOIN role ON employee.role_id = role.id
        LEFT JOIN department ON role.department_id = department.id
        `,
      function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement

        console.log(chalk.yellow.bold(`====================================================================================`));
        console.log(`                              ` + chalk.green.bold(`Current Employees:`));
        console.log(chalk.yellow.bold(`====================================================================================`));

        console.table(res);
        promptQuestions();
      }
    );
  }
  
};

promptQuestions();
