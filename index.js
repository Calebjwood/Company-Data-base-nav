const inquirer = require('inquirer')
const {viewAll} = require('./routes/employees')
const {viewRoles} = require('./routes/roles')
const {viewDepart} = require('./routes/departments')
const {addEmployee, updateEmployee} = require('./modifier/modEmployee')
const {addDepartment} = require('./modifier/modDepartment')
const {newRole} = require('./modifier/modRole')


const startQuestion = () => {
inquirer
    .prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'View All Employees',
                'Add Employee',
                'Update Employee Role',
                'View All Roles',
                'Add Role',
                'View All Departments',
                'Add Departments',
                'quit'
            ]
        }
    ])
    .then((res) => {
        let action = res.action
        if(action === 'View All Employees'){
            return viewAll()
       }
        else if(action === 'Add Employee'){
            return addEmployee()
        }
        else if(action === 'Update Employee Role'){
            return updateEmployee()
        }
        else if(action === 'View All Roles'){
            return viewRoles()
        }
        else if(action === 'Add Role'){
            return newRole()
        }
        else if(action === 'View All Departments'){
            return viewDepart()
        }
        else if(action === 'Add Departments'){
            return addDepartment()
        }
        else{
            return console.log('Good Bye!');
        }
    })
    
}

startQuestion()
module.exports = {startQuestion}