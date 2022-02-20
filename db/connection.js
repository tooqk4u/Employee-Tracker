const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Employeetracker2021",
    database: "employee_tracker"
})

module.exports = connection;
