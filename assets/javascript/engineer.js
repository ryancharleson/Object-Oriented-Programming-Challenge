


const Employee = require('./employee');

class Engineer extends Employee {

    constructor(email, name, idNum, github) {
        super(email, name, idNum);
        this.github = github
    }

    returnTitle() {
        return 'Engineer';
    }

    returnGithub() {
        return this.github;
    }
};

module.exports = Engineer;