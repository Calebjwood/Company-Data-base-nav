const db = require('../config/connections').mysql();
const inquirer = require('inquirer')
const {addEmp, updateRoll} = require('../routes/employees')


const addEmployee = () => {
        inquirer
        .prompt([
            {
                type: 'text',
                message: 'what is the new employees first name?',
                name: 'fist_name'
            },
            {
                type: 'text',
                message: 'what is the new employees last name?',
                name: 'last_name'
            },
            {
                type: 'list',
                message: 'what will be the new employees roll?',
                name: 'role_choice',
                choices: roleChoices()
            }
        ])
        .then((res) => {
           return addEmp(res.first_name, res.last_name, getRoleId(res.roleChoices))
        })
}

const updateEmployee = () => {
   
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'choose an employee.',
                name: 'chosenEmployee',
                choices: employeeList()
            },
            {
                type: 'list',
                message: 'What role will the employee be moving to?',
                name: 'newRole',
                choices: roleChoices()
            }
        ])
        .then((res) => {
            return updateRoll(getEmployeeId(res.chosenEmployee), getRoleId(res.newRole))
        })

}

const getEmployeeId = (name) => {
    const fullName = name.split(' ')
    const sql = `SELECT * FROM employee Where first_name = ? AND last_name = ?`
    const params = [fullName[0], fullName[1]] 

    db.query(sql, params, (err, res) =>{
        if(err){
            console.log(err.message);
        }
        return Object.values(res[0])[0]
    })
}
const employeeList = () => {
    const sql = `SELECT first_name, last_name FROM employee`
    db.query(sql, (err, res) => {
        if(err){
            console.log(err.message);
        }
        let nameArray = []
        for(let i = 0; i < res.length; i++){
            let nameData = res[i].first_name + ' ' + res[i].last_name
            nameArray.push(nameData.toString())
        }
        return console.log(nameArray);
    })
}

const roleChoices = () => {
    const sql = `SELECT title FROM roles`
    db.query(sql, (err, res) => {
        if(err){
            console.log(err.message);
        }
            let roleList = []
        for(let i = 0; i < res.length; i++){
            roleList.push(Object.values(res[i])[0])
        }
        return console.log(roleList);
    })
}

const getRoleId = (rollName) => {
    const sql = `Select id FROM roles WHERE title = ?`
    const params = [rollName]

    db.query(sql, params, (err, res) => {
        if(err){
            console.log(err.message);
        }
        return Object.values(res[0])[0]
    })
}

module.exports = {addEmployee, updateEmployee}