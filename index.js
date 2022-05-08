const inquirer = require('inquirer');

const fs = require('fs');

inquirer
    .prompt([
        {
        type: 'input',
        message: 'What is your title?',
        name: 'title',
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
        message: 'What are your contents?',
        name: 'contents',
        },
        {
        type: 'input',
        message: 'What is the description of your site?',
        name: 'description',
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
    ])
    .then(answers => {
        console.log(answers)
        let thingtosave =
        `
        #Title
            ${answers.title}
        
        ##License
            ${answers.license}

        ##Description
            ${answers.description}

        ##Installation
            ${answers.installation}

        ##Usage
            ${answers.usage}

        ##Contributions
            ${answers.contributing}

        ##Testing
            ${answers.tests}

        ##Questions
            ${answers.questions}
        `
    
    fs.writeFile("answers.md", thingtosave, (err)=>{
        err ? console.log(err) : console.log("File written!");
    })
})