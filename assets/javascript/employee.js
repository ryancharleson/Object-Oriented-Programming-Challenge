

// Employee class that will inherit from classes of intern, engineer, and manager.
class Employee {

    constructor(email, name, idNum) {
        this.email = email;
        this.name = name;
        this.idNum = idNum;

    }
// Functions for returning id number, email, title, and name of the employees.
    getTitle() {
        return "Employee";
    }

    returnEmail() {
        return this.email;
    }

    returnName() {
        return this.name;
    }

    returnidNum() {
        return this.idNum;
    }

};


// Exporting class to generate markdown.
module.exports = Employee;