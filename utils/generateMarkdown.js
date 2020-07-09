// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # Project Title:  ${data.title}

  ## Description: 
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)


  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

   ## License
  ${data.license}

   ## Contributors
  ${data.contribution}

  ## Test
  ${data.tests}
    
   ## Questions
  ${data.contact}


`;
}

module.exports = generateMarkdown;
