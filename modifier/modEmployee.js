const db = require('../config/connections').mysql();
const inquirer = require('inquirer')
const {addEmp, updateRoll} = require('../routes/employees')


const addEmployee = async () => {
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
                message: 'what department will then employee me in?',
                name: 'department_choice',
                choices: departmentChoices()
            }
        ])
}

const departmentChoices = () => {
    const sql = `SELECT * FROM department`
    db.query(sql, (err, res) => {
        if(err){
            console.log(err.message);
        }
        //     let departList = []
        // for(let i = 0; i < res.length; i++){
        //     departList.push(Object.values(res[i]))
        // }

       return console.log(Object.values(JSON.parse(JSON.stringify(res))));
    })
}

module.exports = {addEmployee}