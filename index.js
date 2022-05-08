const inquirer = require('inquirer');

const fs = require('fs');
const md = require('./utils/generateMarkdown.js');
const fileName = "README1.md"

const questions = [
        {
        type: 'input',
        message: 'What is your title?',
        name: 'title',
        },
        {
        type: 'input',
        message: 'What is the description of your site?',
        name: 'description',
        },
        {
        type: 'list',
        message: 'What kind of license should your project have?',
        name: 'license',
        choices: ['MIT', 'GNU'],
        default: ['MIT'],
        },
        {
        type: 'input',
        message: 'What type of installation?',
        name: 'installation',
        },
        {
        type: 'input',
        message: 'What will this site be used for?',
        name: 'usage',
        },
          
        {
        type: 'input',
        message: 'Want to contribute?',
        name: 'contributing',
        },
        {
        type: 'input',
        message: 'What tests are done?',
        name: 'tests',
        },
        {
        type: 'input',
        message: 'Got questions?',
        name: 'questions',
        },
    ]

function writeToFile(fileName, fileData) {
    fs.writeFile(fileName, fileData, (err) => {
        err ? console.error(err) : console.log('File Written');
    });
}

function init() {
    inquirer
    .prompt(questions)
    .then(data => {
        const fileData = md(data)
        writeToFile(fileName, fileData)
    });
}

init()