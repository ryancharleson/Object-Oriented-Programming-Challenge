const Employee = require('../assets/javascript/employee');


test('should create an object from employee that equals a number/string for values', () => {
    const employee = new Employee('24', 'jamescharleson@yahoo.com', 'Ryan');

    expect(employee.idNum).toEqual(expect.any(String));
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});

test('should get employee id', () => {
    const employee = new Employee('24', 'jamescharleson@yahoo.com', 'Ryan');

    expect(employee.returnidNum()).toEqual(expect.any(String));
});

test('should get employee title', () => {
    const employee = new Employee('24', 'jamescharleson@yahoo.com', 'Ryan');

    expect(employee.getTitle()).toEqual('employee');
});

test('should get employee email', () => {
    const employee = new Employee('24', 'jamescharleson@yahoo.com', 'Ryan');

    expect(employee.returnEmail()).toEqual(expect.any(String));
});

test('should get employee name', () => {
    const employee = new Employee('24', 'jamescharleson@yahoo.com', 'Ryan');

    expect(employee.returnName()).toEqual(expect.any(String));
});

