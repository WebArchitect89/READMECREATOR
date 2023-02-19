//Displays a message depending of whether the developers want the contributors or not.

function contributingReply(confirmContributers) {

  if (confirmContributers) {
    return `Thank you for your interest in helping out. Feel free to add your contributions.`
  } else {
  return `Thank you for your interest in helping out; however, I will not be accepting contributions from third parties.`;
  }

}

//A license badge based on which license is chosen
function renderLicenseBadge(license){
if(license !== "no license"){
  return `  ![badge](https://img.shields.io/badge/license-${license}-red)
  `;
} else {
  return "No license"
}
}

// License link

function renderLicenseLink(license){
  if(license!=="no license"){
    return `
    [${license}](https://choosealicense.com/licenses/${license})
      `;
    } else {
      return ' ';
    }
  }

//license section of README

function renderLicenseSection(license){
  if(license!=="no license"){
    return`
  ## [License](#table-of-contents)
  The application is covered under the following license:
  * ${renderLicenseLink(license)}
    `;
  } else{
    return``;
  }
}

//License table of contents

function renderLicenseTableOfContents(license){
  if(license!=="no license"){
    return`
    *[License](#license)
    `;
  } else{
    return``;
  }
}

// Generate markdown for README

function generateMarkdown(data){
return`
# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
*  ${renderLicenseTableOfContents(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## [Description](#table-of-contents)
${data.what}
${data.why}
${data.how}
## [Installation](#table-of-contents)
${data.installation}
## [Usage](#table-of-contents)
${data.usage}

${renderLicenseSection(data.license)}

## [Contributing](#table-of-contents)
${contributingReply(data.confirmContributers, data.contribute)}

## [Tests](#table-of-contents)
${data.test}

## [Questions](#table-of-contents)
Please get in touch with me if you have any questions:
[GitHub](https://github.com/${data.githubUsername})

[Email: ${data.email}](mailto:${data.email})

`
}

module.exports = generateMarkdown;