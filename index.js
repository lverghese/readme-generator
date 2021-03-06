const inquirer = require('inquirer');
const fs = require('fs');


const generateMarkdown = require('./generateMarkdown.js');




//Array of questions for user input
const questions = [
            {
            type: "input",
            message: "What would you like to make the title for your project?",
            name: "title",
            validate: titleInput => {
                if (titleInput) {
                  return true;
                } else {
                  console.log('Please enter a valid project title');
                  return false;
                }
              }
        },
        {
            type: 'input',
            message: 'How would you describe your project?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'How do you go about installing your application?',
            name: 'install',
        },
        {
            type: 'input',
            message: 'How do you use your application',
            name: 'use',
        },
        {
            type: 'checkbox',
            message: 'What license did you use for this repo?',
            choices: ['GNU General Public License 2.0', 'MIT', 'Apache License 2.0', 'GNU General Public License 3.0'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'How can others contribute to your project?',
            name: 'contribute',
        },
        {
            type: 'input',
            message: 'How do others update the tests for your project?',
            name: 'test',    
        },
        {
            type: 'input',
            message: 'What is your Github username',
            name: 'githubuser',
            validate: gitInput => {
                if (gitInput) {
                  return true;
                } else {
                  console.log('Please enter a valid Github username');
                  return false;
                }
              }
        },
        {
            type: 'input',
            message: 'What email addressed can be used to answer questions from users and potential contributors?',
            name: 'email',
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log('Please enter a valid email!');
                  return false;
                }
              }
        }
    ];
    

    function writeToFile(fileName, value) {
      fs.writeFile(fileName, value, (err) => {
          if (err)
              throw err;
          console.log('README File generated!') //You can change this message. Ex: Your README is complete!
      });
  }

    function init() {
      inquirer.prompt(questions) 
      .then(function (userResponse) {
          console.log(userResponse)
          writeToFile('README.md', generateMarkdown(userResponse));
      });
    }

//Function call to initalize app.
init();