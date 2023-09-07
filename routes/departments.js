const db = require('../config/connections').mysql();


const viewDepart = () => {
    const sql = `SELECT * FROM department`;

    db.query(sql, (err, res) => {
        if(err){
            console.log(err.message);
        }
        return console.log(res);
    }) 
}

const addDepart = (name) => {
    sql = `INSERT INTO department (department_name)
                VALUES (${name})`
    
    db.query(sql, (err, res) =>{
        if(err){
            console.log(err.message);
        }
        return console.log(res);
    })
}

module.exports = {viewDepart, addDepart}