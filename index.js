// Packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const { resolve } = require('path');
const { rejects } = require('assert');
// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
     
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub Username?',
   
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? ',

    },
    {
        type: 'input',
        name: 'what',
        message: 'What is your project and what problem will it solve?',

    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you create this project?',
    },
    {
        type: 'input',
        name: 'how',
        message: 'How will someone use this? ',

    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide step-by-step installation instructions for your project.',

    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for use.',

    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['agpl', 'apache', 'mit', 'no license']
    },
    {
        type: 'confirm',
        name: 'confirmContributers',
        message: 'Would you like to allow other developers to contribute?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please provide instructions on how to test the app.',
    
    },

];





//Function to write a README file

const writeFile = fileContent=>{
    return new Promise((resolve,reject)=>{
        fs.writeFile("generatedREADME",fileContent,err=>{
            if(err){
                reject(err);
                return;
            }
            resolve({
                ok:true,
                message:"README Generated"
            });
        });
    });
};

// Prompt questions ans save the user answers.

const init = ()=>{
    return inquirer.prompt(questions)

    .then(readmeData =>{
        return readmeData;
    })
}

//Initialize the app
init()
.then(readmeData=>{
    console.log(readmeData);
    return generateMarkdown(readmeData);
})
.then(fileMD=>{
    return writeFile(fileMD);
})
.then(writeFileResponse =>{
    console.log(writeFileResponse.message);
})

.catch(err=>{
    console.log(err)
})