//function for the license badges
const licenseBadge = value => {
    const whatLicense = value.license[0];
    let licenseLink = " "
    if (whatLicense === "GNU General Public License 2.0") {
        licenseLink = `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
    };
    if (whatLicense === "Apache License 2.0") {
        licenseLink = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    };
    if (whatLicense === "GNU general Public License 3.0") {
        licenseLink = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    };
    if (whatLicense === "MIT") {
        licenseLink = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    };
    return licenseLink
};


//function for generating the markdown for README
function generateMarkdown(value) {
    return `# ${value.title}

## Table of Contents:
1. [Description](#description)
2. [Installation](#install)
3. [Usage](#use)
4. [Contribution](#contribute)
5. [Tests](#test)
6. [License](#license)

7. [Github](#githubuser)
8. [E-mail](#email)

## Description
${value.description}

## Installation
${value.install}

## Usage
${value.use}

## Contributing
${value.contribute}

## Tests
${value.test}

## License
${licenseBadge(value)}

## Github
${value.githubuser}

## Email
${value.email}`
}

module.exports = generateMarkdown; 

