// imports out to the generate team page to create the page
const generateHTML = require('./src/generateteam');
// the node modules
const fs = require('fs'); 
const inquirer = require('inquirer');
// the profiles of the team
const Manager = require('./lib/manager');
const Intern = require('./lib/intern'); 
const Engineer = require('./lib/engineer');
// the team arrays
const teamArray = []; 
// here are the manager questions for the page creation
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the team Manager.', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Wrong input. Insert team Manager name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the managers ID?",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Wrong input. Please enter manager ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the managers Email?",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Wrong input. Please enter the managers email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the managers office number?",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('Wrong input. Please enter an office number!')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager); 
        console.log(manager); 
    })
};
//this shows you that your adding employees now and asks you questions about them
const addEmployee = () => {
    console.log(`
    =================
    Now adding employees to your team.
    =================
    `);
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "What is your employees role?",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is your employees name?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Wrong input. Please enter your employee's name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your employee's ID?",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Wrong input. Please enter your employee's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your employee's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ("Wrong input. Please enter your employee's email!")
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is your employee's github username.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Wrong input. Please enter your employee's github username!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is your intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Wrong input. Please enter your intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you want to add more members to your team?',
            default: false
        }
    ])
    .then(employeeData => {
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })

};
// this creats the HTML page after running all the questions
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // this just sends you an error message if theres an error
        if (err) {
            console.log(err);
            return;
        // this just sends you a success message if everything went according to plan
        } else {
            console.log("Your team profile has been created Yay! Please check it out in the dist folder under .index file.")
        }
    })
}; 
addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });