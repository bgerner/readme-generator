const lowerCaseLic = data.lic.toLowerCase();

function renderLicenseBadge(lic) {
  if (data.lic='no license')  {
    let licenseBadge = '';
  }
  else { 
    let licenseBadge = '![License](https://img.shields.io/badge/License-${data.lic}-green.svg)'
  }
};

function renderLicenseLink(lic) {
  if (data.lic='no license') {
    let licenseLink = '';
  }
  else {
    let licenseLink = '(https://choosealicense.com/licenses/${lowerCaseLic}/)'
  }
};

function renderLicenseDescription(lic) {
  if (data.lic='no license') {
    let licenseDescription = '';
  }
  else if (data.lic='MIT') {
    let licenseDescription = `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  }
  else if (data.lic='Apache-2.0') {
    let licenseDescription = `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`
  }
  else if (data.lic='GPL-3.0') {
    let licenseDescription = `Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`
  }
};


function renderLicenseSection(lic) {
  if (data.lic='no license') {
    let license = ''
  }
  else {
    let license = `

    ## License

    ### [${data.lic} License]${licenseLink}

    ${licenseDescription}
    
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${licenseBadge}

  ## Description 

  ${data.description}

  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  
  ## Installation

  ${data.installation}
  
  ## Usage

  ${data.usage}
  ${license}
  ## Contributing

  ${data.contributing}
  
  ## Tests
  
  ${data.tests}

  ## Questions

  Please click [here](https://github.com/${data.github}/) to be redirected to my GitHub profile page.

  Also feel free to shoot me an email @${data.email}

`;
}

module.exports = generateMarkdown;
