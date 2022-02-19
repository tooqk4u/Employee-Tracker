const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const Role = require('./lib/Role');
const Department = require('./lib/Department');
//const figlet = require('figlet');
//const connection = require('./db/database');
const cTable = require('console.table');
const logo = require('asciiart-logo');
//var chalk = require("chalk");

console.log(
  logo({
      name: 'EMPLOYEE TRACKER',
      font: 'Standard',
      lineChars: 10,
      padding: 3,
      margin: 2,
      borderColor: 'purple',
      logoColor: 'bold-red',
      textColor: 'green',
  })
      .emptyLine()
      .right('@tooqk4u')
      .emptyLine()
      .render()
);