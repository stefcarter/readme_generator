const requirer = requier('requirer')

const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your title?',
            name: 'description',
          },
          {
            type: 'input',
            message: 'What is your password?',
            name: 'table of contents',
          },
          {
            type: 'input',
            message: 'What is your password?',
            name: 'table of contents',
          },
          {
            type: 'input',
            message: 'Re-enter password to confirm:',
            name: 'installation',
          },
          {
            type: 'input',
            message: 'What is your user name?',
            name: 'usage',
          },
          {
            type: 'input',
            message: 'What is your password?',
            name: 'license',
          },
          {
            type: 'input',
            message: 'Re-enter password to confirm:',
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

    fs.readFile('data.csv', 'utf8', (error, data) =>
        error ? console.error(error) : console.log(data)
    );