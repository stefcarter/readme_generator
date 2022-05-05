const requirer = requier('requirer')

const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your title?',
            name: 'title',
          },
          {
            type: 'input',
            message: 'Any licensing',
            name: 'license',
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
            message: '',
            name: 'contributing',
          },
          {
            type: 'input',
            message: 'What is your password?',
            name: 'tests',
          },
          {
            type: 'input',
            message: 'Re-enter password to confirm:',
            name: 'questions',
          },
    ])
    .then(answers => {
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
    })
    
    fs.writeFile("myanswers.md", thingtosave, (err)=>{
        err ? console.log(err) : console.log("File written!");
    })