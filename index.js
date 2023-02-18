const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');


// array of questions for user
const questions = [


  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the project title? (Required)',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Please enter the description',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Describe the installation process?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Please describe the usage',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Can anyone contribute, if yes what are the guidelines?',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'Are there any tests required?',
        name: 'tests',
      },
      {
        type: 'list',
        message: 'What license does your repo is using?',
        name: 'license',
        choices: ["agpl", "MIT", "apache", "none"]
      },
      {
        type: 'input',
        message: 'What is your github user name?',
        name: 'gitUserName',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'emailAddress',
      },

    ])
    .then((response) => {

      // console.log(response.projectTitle)

      const readmeInfo = `
  ${response.projectTitle}
  ${response.description}
  ${response.installation}
  ${response.usage}
  ${response.contribution}
  ${response.tests}
 
  
  
  `;
//Function to store the response in the response.md file

      fs.writeFile('response.md', readmeInfo, (err) =>
        err ? console.error(err) : console.log('README Completed!')
      )
    })

];




// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
