
const Employee = require('../assets/javascript/employee');

test('should be a number or string value for object in employee', () => {
    const employee = new Employee('jamescharleson@yahoo.com', 'Ryan', 26);

    expect(employee.email).toEqual(expect.any(String));
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.idNum).toEqual(expect.any(Number));
    
}) ;

test('should get employee email', () => {
    const employee = new Employee('jamescharleson@yahoo.com', 'Ryan', 26);

    expect(employee.returnEmail()).toEqual(expect.any(String));
});

test('should get employee name', () => {
    const employee = new Employee('jamescharleson@yahoo.com', 'Ryan', 26);

    expect(employee.returnName()).toEqual(expect.any(String));
});

test('should get employee id number', () => {
    const employee = new Employee('jamescharleson@yahoo.com', 'Ryan', 26);

    expect(employee.returnidNum()).toEqual(expect.any(Number));
});

test('should get employee title', () => {
    const employee = new Employee('jamescharleson@yahoo.com', 'Ryan', 26);

    expect(employee.getTitle()).toEqual('Employee');
});