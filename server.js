const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Role = require("./lib/Role");
const Department = require("./lib/Department");
const figlet = require("figlet");
//const connection = require("./db/connection");
const cTable = require("console.table");
const logo = require("asciiart-logo");
const { Server } = require("ws");
const chalk = require("chalk");
const promisemysql = require("promise-mysql");
const { connectionProperties, connection } = require("./db/connection");

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
        process.exit(0);
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

        console.log(
          chalk.yellow.bold(
            `====================================================================================`
          )
        );
        console.log(
          `                              ` +
            chalk.green.bold(`Current Employees:`)
        );
        console.log(
          chalk.yellow.bold(
            `====================================================================================`
          )
        );

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

        console.log(
          chalk.yellow.bold(
            `====================================================================================`
          )
        );
        console.log(
          `                              ` +
            chalk.green.bold(`Current Departments`)
        );
        console.log(
          chalk.yellow.bold(
            `====================================================================================`
          )
        );

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

        console.log(
          chalk.yellow.bold(
            `====================================================================================`
          )
        );
        console.log(
          `                              ` +
            chalk.green.bold(`Current Roles`)
        );
        console.log(
          chalk.yellow.bold(
            `====================================================================================`
          )
        );

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
        viewDepartment();

        console.log(
          chalk.yellow.bold(
            `====================================================================================`
          )
        );
        console.log(
          `                              ` +
            chalk.green.bold(`Successfully Added Department`)
        );
        console.log(
          chalk.yellow.bold(
            `====================================================================================`
          )
        );
      });
  }
  function addEmployee() {
    connection
      .promise()
      .query(
        `
    SELECT role.id, role.title FROM role
    `
      )
      .then(([rows]) => {
        var roles = rows.map(({ id, title }) => ({
          name: title,
          value: id,
        }));

        console.log(rows);
        return inquirer
          .prompt([
            {
              type: "input",
              name: "firstname",
              message: "Provide employee FIRST NAME",
              validate: (firstNameInput) => {
                if (firstNameInput) {
                  return true;
                } else {
                  console.log("Please enter FIRST NAME!");
                  return false;
                }
              },
            },
            {
              type: "input",
              name: "lastname",
              message: "Provide employee LAST NAME",
              validate: (lastNameInput) => {
                if (lastNameInput) {
                  return true;
                } else {
                  console.log("Please enter LAST NAME");
                }
              },
            },
            {
              type: "list",
              name: "roleselect",
              message: "Provide select a ROLE",
              choices: roles,
            },
          ])
          .then(({ firstname, lastname, roleselect }) => {
            console.log("updating employee");
            const sql = `INSERT INTO employee (first_name, last_name, role_id) VALUES (?, ?, ?)`;
            const params = [firstname, lastname, roleselect];
            connection.query(sql, params, function (err, res) {
              if (err) {
                console.log(err);
              }
            });
            viewEmployees();

            console.log(
              chalk.yellow.bold(
                `================================================================================`
              )
            );
            console.log(
              `                              ` +
                chalk.green.bold(`Successfully Added Employee`)
            );
            console.log(
              chalk.yellow.bold(
                `================================================================================`
              )
            );
          });
      });
  }

  function addRole() {
    connection
      .promise()
      .query(
        `
  SELECT department.name, department.id FROM department
  `
      )
      .then(([rows]) => {
        var departments = rows.map(({ name, id }) => ({
          name: name,
          value: id,
        }));

        console.log(rows);
        return inquirer
          .prompt([
            {
              type: "input",
              name: "roletitle",
              message: "Provide a new Role TITLE",
              validate: (roleTitleInput) => {
                if (roleTitleInput) {
                  return true;
                } else {
                  console.log("Please enter a Role TITLE!");
                  return false;
                }
              },
            },
            {
              type: "input",
              name: "rolesalary",
              message: "Provide a new Role SALARY",
              validate: (roleSalaryInput) => {
                if (roleSalaryInput) {
                  return true;
                } else {
                  console.log("Please enter a Role SALARY");
                }
              },
            },
            {
              type: "list",
              name: "roledept",
              message: "Provide select a DEPARTMENT",
              choices: departments,
            },
          ])
          .then(({ roletitle, rolesalary, roledept }) => {
            console.log("updating Role");
            const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
            const params = [roletitle, rolesalary, roledept];
            connection.query(sql, params, function (err, res) {
              if (err) {
                console.log(err);
              }
            });
            viewRoles();

            console.log(
              chalk.yellow.bold(
                `================================================================================`
              )
            );
            console.log(
              `                              ` +
                chalk.green.bold(`Successfully Added Role`)
            );
            console.log(
              chalk.yellow.bold(
                `================================================================================`
              )
            );
          });
      });
  }
  function updateRole() {
    connection
      .promise()
      .query(
        `
    SELECT employee.last_name, employee.id, role.id, role.title 
    FROM employee
    LEFT JOIN role ON employee.role_id = role.id
    `
      )
      .then(([rows]) => {
        let employees = rows.map(({ last_name, id }) => ({
          name: last_name,
          value: id,
        }));
        let roles = rows.map(({ id, title }) => ({
          name: title,
          value: id,
        }));

        console.log(rows);
        return inquirer
          .prompt([
            {
              type: "list",
              name: "employeelist",
              message: "Select an Employee",
              choices: employees,
            },
            {
              type: "list",
              name: "rolelist",
              message: "Select a Role",
              choices: roles,
            },
          ])
          .then(({ employeelist, rolelist }) => {
            console.log("updating Role");            
            const sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
            const params = [employeelist, rolelist];
            connection.query(sql, params, function (err, res) {
              if (err) {
                console.log(err);
              }
            });
            viewEmployees()

            console.log(
              chalk.yellow.bold(
                `================================================================================`
              )
            );
            console.log(
              `                              ` +
                chalk.green.bold(`Successfully Updated Role`)
            );
            console.log(
              chalk.yellow.bold(
                `================================================================================`
              )
            );
            
            
          });
      });
  }
};

promptQuestions();
