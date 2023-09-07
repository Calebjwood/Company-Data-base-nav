const db = require('../config/connections').mysql();

const viewAll = () => {
    const sql = `SELECT * FROM employee`;

    db.query(sql, (err, res) => {
        if(err){
            console.log(err.message);
        }
        return console.log(res);
    }) 
}

const addEmp = (first_name, last_name, role_id) => {
    const sql = `INSERT INTO employee (first_name, last_name, role_id)
                        VALUES (${first_name}, ${last_name}, ${role_id})`
    
    db.query(sql, (err, res) => {
        if(err){
            console.log(err.message);
        }
        return console.log('employee added to db', res);
    })
}

const updateRoll = (id, role_id) => {
    sql = `UPDATE employee SET role_id = ? WHERE id = ?`
    const params = [role_id, id]

    db.query(sql, params, (err, res) => {
        if(err){
            console.log(err.message);
        }
        return console.log('employee role has been updated', res);
    })
}


module.exports = {viewAll, addEmp, updateRoll}