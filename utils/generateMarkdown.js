// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'GNU':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    default:
      return '';
  };
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[License: MIT](https://opensource.org/licenses/MIT)';
    case 'GNU':
      return '[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)';
    default:
      return '';
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // data should have a license badge, license link, license section
  // render functions are going to be used here
  // you have to figure out why...
  let license = data.license
  return (
  `
  
  # ${data.title}

  ${renderLicenseBadge(license)}
  ----
  ## Table of Contents
  - [License](#license)
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributions](#contributing)
  - [Tests](#testing)
  
  ## Description
    ${data.description}

  ## License
  
    The project is licensed under ${data.license}
    <br>
    ${renderLicenseLink(license)}

  ## Installation
    ${data.installation}

  ## Usage
    ${data.usage}

  ## Contributions
    ${data.contributing}

  ## Testing
    ${data.tests}

  ## Questions
   You can reach me at ${data.email}
   <br>
   or
   <br>
   Find me at https://github.com/stefcarter

  ----
    
  `);
}

module.exports = generateMarkdown;
