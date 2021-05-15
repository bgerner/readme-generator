const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown } = require('./utils/generateMarkdown');
const { renderLicenseSection } = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information including instructions and examples'
    },
    {
        type: 'list',
        name: 'lic',
        message: 'Select a license for your project from the following options: ',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'no license']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide tests with examples on how to run them'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'

    }
];

function writeToFile(fileName, data) {
    const markdown = generateMarkdown(data);
    fs.writeFile(fileName, markdown, err => {
        if (err) {
            console.error(err);
            return
        }
        console.log('It worked!')
    })

}

function init() {
    inquirer.prompt(questions)
        .then(data => {
            let fileName = data.title
            if (!fileName.endsWith('.md')) {
                fileName += '.md'
            }
            renderLicenseSection(data);
            writeToFile(fileName, data);
        })

}

init();
