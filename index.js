const inquirer = require('inquirer')



const startQuestion = () => {
inquirer
    .prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                'View All Employee Role',
                'Add Employee',
                'Update Employee Role',
                'View All Roles',
                'Add Role',
                'View All Departments',
                'Add Departments'
            ]
        }
    ])
    .then((res) => {
        let action = res.action
        if(action === 'View All Employee Role'){
            
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
    }) 
}

startQuestion()
module.exports = {startQuestion}