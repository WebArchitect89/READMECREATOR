//Displays a message depending of whether the developers want the contributors or not.

function contributingReply(confirmContributers) {

  if (confirmContributers) {
    return `Thank you for your interest in helping out. Feel free to add your contributions.`
  } else {
  return `Thank you for your interest in helping out; however, I will not be accepting contributions from third parties.`;
  }

}





module.exports = generateMarkdown;