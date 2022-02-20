const mysql = require("mysql2");

require('dotenv').config();

const connectionProperties = {
        host: "localhost",
        user: "root",
        password: "Employeetracker2021",
        database: "employee_tracker"
    }


const connection = mysql.createConnection(connectionProperties);
    
   

module.exports = {
    connection,
    connectionProperties
};