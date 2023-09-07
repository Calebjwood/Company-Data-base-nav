const db = require('../config/connections').mysql();


const viewRoles = () => {
    const sql = `SELECT * FROM roles`;

    db.query(sql, (err, res) => {
        if(err){
            console.log(err.message);
        }
        return console.log(res);
    }) 
}

const addRole = (department_id, title, salary) => {
    const sql = `INSERT INTO roles (department_id, title, salary)
                    VALUES (${department_id}, ${title}, ${salary})`
    
    db.query(sql, (err, res) => {
        if(err){
            console.log(err.message);
        }
        return console.log(res);
    })
}

module.exports = {viewRoles, addRole}