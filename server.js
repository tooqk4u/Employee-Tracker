const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Role = require("./lib/Role");
const Department = require("./lib/Department");
const figlet = require('figlet');
//const connection = require("./db/connection");
const cTable = require("console.table");
const logo = require("asciiart-logo");
const { Server } = require("ws");
const chalk = require("chalk");
const promisemysql = require("promise-mysql");
const { connectionProperties, connection } = require('./db/connection');




console.log(
  logo({
    name: "EMPLOYEE TRACKER",
    font: "Standard",
    lineChars: 18,
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
          "View all Employees",
          "View all Departments",
          "View all Roles",
          "Add a Department",
          "Add an Employee",
          "Add a Role",
          "Update a Role",
          "Exit",
        ],
      },
    ])
    .then((choice) => {
      if (choice.viewAll === "View all Employees") {
        viewEmployees();
      } else if (choice.viewAll === "View all Departments") {
        viewDepartment();
      } else if (choice.viewAll === "View all Roles") {
        viewRoles();
      } else if (choice.viewAll === "Add a Department") {
        addDepartment();
      } else if (choice.viewAll === "Add an Employee") {
        addEmployee();
      } else if (choice.viewAll === "Add a Role") {
        addRole();
      } else if (choice.viewAll === "Update a Role") {
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
  function viewDepartment() {
    console.log("viewing by Department");
    connection.query(
      `SELECT id, name
            FROM department`,
      function (err, res) {
        if (err) throw err;

        console.log(chalk.yellow.bold(`====================================================================================`));
        console.log(`                              ` + chalk.green.bold(`Current Departments`));
        console.log(chalk.yellow.bold(`====================================================================================`));

        console.table(res);
        promptQuestions();
      }
    );
  }
  function viewRoles() {
    console.log("Viewing all ROLES");
    connection.query(
      `SELECT 
            role.id AS ID,
            role.title AS title,
            role.salary AS $ALARY,
            department.name AS department
            FROM role
            LEFT JOIN department ON role.department_id = department.id`,
      function (err, res) {
        if (err) throw err;

        console.log(chalk.yellow.bold(`====================================================================================`));
        console.log(`                              ` + chalk.green.bold(`Current Employee Roles`));
        console.log(chalk.yellow.bold(`====================================================================================`));

        


        console.table(res);
        promptQuestions();
      }
    );
  }

  function addDepartment() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "departmentname",
          message: "Provide a new DEPARTMENT",
          validate: (departmentInput) => {
            if (departmentInput) {
              return true;
            } else {
              console.log("Please enter a Department name!");
              return false;
            }
          },
        },
      ])
      .then((storeDept) => {
        const newDept = storeDept.departmentname;

        console.log("updating Department");
        const sql = `INSERT INTO department (name) VALUES (?)`;
        const params = [newDept];
        connection.query(sql, params, function (err, res) {
          if (err) {
            console.log(err);
          }
          
        });
        viewDepartment()

        console.log(chalk.yellow.bold(`====================================================================================`));
        console.log(`                              ` + chalk.green.bold(`Successfully Added Department`));
        console.log(chalk.yellow.bold(`====================================================================================`));
        
      });
      
  }
  

  
};

promptQuestions();
