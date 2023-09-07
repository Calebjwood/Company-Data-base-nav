const inquirer = require('inquirer')
const {viewAll, addEmp} = require('./routes/employees')


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
            viewAll()
        }
        else if(action === 'Add Employee'){
            
        }
        else if(action === 'Update Employee Role'){

        }
        else if(action === 'View All Roles'){

        }
        else if(action === 'Add Role'){

        }
        else if(action === 'View All Departments'){

        }
        else if(action === 'Add Departments'){

        }
        else{}
    }) 
}

startQuestion()
module.exports = {startQuestion}