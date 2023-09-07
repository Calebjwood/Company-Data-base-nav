const inquirer = require('inquirer')
const {addRole} = require('../routes/roles')

const newRole = () => {
    inquirer
        .prompt([
            {
               type: 'list',
               message: 'what department will the new roll be in?',
               name: 'department',
               choices: departmentList()
            },
            {
                type: 'text',
                message: 'What will be the name of the new roll?',
                name: 'newRole'
            },
            {
                type: 'text',
                message: 'What will be the new roles salary',
                name: 'salary'
            }
        ])
        .then((res) => {
            return addRole(getDepartId(res.department), res.newRole, res.salary)
        })
}

const departmentList = () => {
    const sql = `SELECT department_name FROM department`
    db.query(sql, (err, res) => {
        if(err){
            console.log(err.message);
        }
            let departList = []
        for(let i = 0; i < res.length; i++){
            departList.push(Object.values(res[i])[0])
        }
        return console.log(departList);
    })
}

const getDepartId = (department) => {
    const sql = `SELECT id WHERE department_name = ?`
    const params = [department]
    
    db.query(sql, params, (err, res) =>{
        if(err){
            console.log(err.message);
        }
        return Object.values(res[0])[0]
    })
}

module.exports = {newRole}