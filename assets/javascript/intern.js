
//Intern is going to be inheriting Employee class for email, name, and idnumber.
const Employee = require('./employee');

class Intern extends Employee {
    //Adding school to intern class.
    constructor(idNum, email, name, school) {
        super(email, name, idNum);
        this.school = school;
    }

    returnTitle() {
        return 'Intern';
    }

    returnSchoolName() {
        return this.school;
    }
};

module.exports = Intern;