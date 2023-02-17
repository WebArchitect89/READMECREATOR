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
          message: 'What is your name?',
          name: 'usersName',
        },
        {
            type: 'input',
            message: 'What languages do you know?',
            name: 'userLanguages',
          },
          {
            type: 'input',
            message: '“What is your preferred method of communication',
            name: 'userMethod',
          },
      ])
      .then((response) => {

        console.log(response.usersName)
  
        const usersInfo = `User's name: ${response.usersName}
  User's Lanuages: ${response.userLanguages}
  User's Method: ${response.userMethod}`;
  
  
        fs.writeFile('response.md', usersInfo, (err) =>
            err ? console.error(err) : console.log('User\'s info logged!')
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
