
//Inheriting classes from Employee
const Employee = require('./employee');

class Manager extends Employee {
    //Adding office number to Employee
    constructor(email, name, idNum, officeNum) {
        super(email, name, idNum);
        this.officeNum = officeNum;
    }

    returnTitle() {
        return 'Manager';
    }

    returnOfficeNum(){
        return this.officeNum;
    }
};

module.exports = Manager;