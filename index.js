// const
const generateMarkdown= require("./utils/generateMarkdown.js")
var inquierer = require("inquirer")
const file="README.md"
const fs=require("fs")

// array of questions for user
const questions = [
    { type: "input", message: "What's the project title?", name: "title"},
    
    {type: "input", message: "What's the description?", name: "description"},
    
    {type: "input", message: "What are the install instructions?", name: "install"},
    
    {type: "input", message: "What's the usage information?", name: "usage"},
    
    {type: "input", message: "Who contributed?", name: "contribution"},
    
    {type: "input", message: "What are thet tests?", name: "tests"},
    
    {type: "input", message: "What are the licenses?", name: "license"},
    
    {type: "input", message: "Where can people contact you for questions?", name: "contact"}

];

// function to write README file
function writeToFile(file, data) {
    const markDown= generateMarkdown(data)
    // ? :  but broken down for practice
    fs.writeFile(file ,markDown, function(err){
        if (err){
            throw err;
        }
    })
}

// function to initialize program
function init() {
    inquierer
    .prompt(questions)
    .then(data=>{
        writeToFile(file,data);
    })
 
    
};

// function call to initialize program
init();
