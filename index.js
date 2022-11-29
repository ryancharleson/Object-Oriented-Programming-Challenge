//Requiring inquirer for prompts.
const inquirer = require('inquirer');

const path = require('path');
const fsAsync = require('fs/promises');
const generateHtml = require('./generateHTML');

//Requiring classes from javascript file.
const Intern = require('./assets/javascript/intern');
const Manager = require('./assets/javascript/manager');
const Engineer = require('./assets/javascript/engineer');

const team = [];




const prompts = [
    {
        type: 'list',
        name: 'title',
        message: 'What is the Title of your employee?',
        choices: ['Intern', 'Engineer', 'Manager']

    },
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of your employee?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the ID of your employee?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email of your worker?'
    },
    {
        when: (answer) => answer.title === 'Engineer',
        type: 'input',
        name: 'github',
        message: 'What is the Github username of your employee?'
    },
    {
        when: (answer) => answer.title === 'Manager',
        type: 'input',
        name: 'officeNum',
        message: 'What is the office number for your employee?'
    },
    {
        when: (answer) => answer.title === 'Intern',
        type: 'input',
        name: 'school',
        message: 'Where do they go to school?'
    },
];

