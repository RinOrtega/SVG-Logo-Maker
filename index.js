const fs = require('fs');
const generateIcon = require('./lib/generateIcon');

const inquirer = require('inquirer');

function validateInput(value) {
    if(value !="") {
        return true
    } else {
        return "Please enter a valid input";
    }
}

const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'Please choose which Icon to start with',
        choices: [
            "Circle",
            "Square",
            "Triangle",
        ],
        validate: validateInput,
    },
    {
        type: 'input',
        name: 'color',
        message: "Please enter a color for your shape ",
        validate: validateInput,
    },
    {
        type: 'input',
        name: 'text',
        message: "Please enter 3 characters for your Icon",
        validate: validateInput,
    },
    {
        type: 'input',
        name: 'textColor',
        message: "Please enter a color for your text color",
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateIcon(data), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Icon successfully created!");
    });
}

function init() {
    inquirer.prompt(questions).then((data) => {
        console.log(JSON.stringify(data, null, " "));
        writeToFile("logo.svg", data);
    });
}

init();
