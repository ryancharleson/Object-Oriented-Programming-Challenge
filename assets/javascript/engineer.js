

//Engineer is going to be inheriting Employee class for email, name, and idnumber.

const Employee = require('./employee');

class Engineer extends Employee {
    //Adding Github to the inherited employee class.
    constructor(idNum, email, name, github) {
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