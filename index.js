// const
const generateMarkdown=require("./utils/generateMarkdown")
const inquierer = require("inquirer")
const fs=require("fs")

// array of questions for user
const questions = [
    { type: "input", message: "What's the project title?", name: "title"},
    
    {type: "input", message: "What's the description?", name: "description"},
    
    {type: "input", message: "What are the table of contents?", name: "toc"},
    
    {type: "input", message: "What are the install instructions?", name: "install"},
    
    {type: "input", message: "What's the usage information?", name: "usage"},
    
    {type: "input", message: "Who contributed?", name: "contribution"},
    
    {type: "input", message: "What are thet tests?", name: "tests"},
    
    {type: "input", message: "What are the licenses?", name: "license"},
    
    {type: "input", message: "Where can people contact you for questions?", name: "contact"}

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("README.md",generateMarkdown(answers), function(err){
        if (err){
            throw err;
        }
    })
}

// function to initialize program
function init() {
    inquierer
    .prompt(questions)
    .then(answers =>writeToFile)

}

// function call to initialize program
init();
