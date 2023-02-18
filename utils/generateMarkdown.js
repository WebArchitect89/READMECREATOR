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
  ${renderLicenseLink(license)}
    `;
  } else{
    return``;
  }
}

//License table of contents

function renderLicenseTOC(license){
  if(license!=="no license"){
    return`
    *[License](#license)
    `;
  } else{
    return``;
  }
}



module.exports = generateMarkdown;