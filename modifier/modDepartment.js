const inquirer = require('inquirer')
const {addDepart} = require('../routes/departments')


const addDepartment = () => {
    inquirer
        .prompt([
            {
                type: 'text',
                message: 'What is the name of the new department?',
                name: 'newDepartment'
            }
        ])
        .then((res) => {
            return addDepart(res.newDepartment)
        })
}


module.exports = {addDepartment}