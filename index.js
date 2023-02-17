const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
// const generateMarkdown = require("./challenge/starter/utils/generateMarkdown");

// array of questions for user
const questions = [
//     const inquirer = require('inquirer');

    inquirer
      .prompt([
        {
          type: 'input',
          message: 'What is the project title?',
          name: 'projectTitle',
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
          message: 'Can anyone contribute?',
          name: 'contribution',
        },
        {
          type: 'input',
          message: 'Are there any tests',
          name: 'tests',
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
  
  
        fs.writeFile('response.md', readmeInfo, (err) =>
            err ? console.error(err) : console.log('README Completed!')
        )
    })

    ];
  


// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
