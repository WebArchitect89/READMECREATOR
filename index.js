const fs = require("fs");
const path = require('path');
const inquirer = require(".././../inquirer");
const generateMarkdown = require("./challenge/starter/utils/generateMarkdown");

// array of questions for user
// const questions = [
//     const inquirer = require('inquirer');

    inquirer
      .prompt([
        {
          type: 'input',
          message: 'What is your user name?',
          name: 'username',
        },
        {
          type: 'password',
          message: 'What is your password?',
          name: 'secret',
        },
        {
          type: 'password',
          message: 'Re-enter password to confirm:',
          name: 'secretagain',
        },
        {
          type: 'input',
          message: 'Who does #you work for?',
          name: 'company',
        },
      ])
      .then((response) =>
        response.secret === response.secretagain
          ? console.log(`Success! User: ${response.username} works for ${response.company}`)
          : console.log('You forgot your password already?!')
      );




// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
