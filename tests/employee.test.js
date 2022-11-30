const employee = require('../assets/javascript/employee');


test('object should be created from an employee that has values of a number or string', () => {
    const employee = new employee(24, 'jamescharleson@yahoo.com', 'Ryan');
    
    expect(employee.idNum).toEqual(expect.any(Number));
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
});

test('should return name of employee', () => {
    const employee = new employee(24, 'jamescharleson@yahoo.com', 'Ryan');

    expect(employee.returnName()).toEqual(expect.any(String));
});

test('should return title of employee', () => {
    const employee = new employee(24, 'jamescharleson@yahoo.com', 'Ryan');

    expect(employee.getTitle()).toEqual('employee');
});

test('should return id of employee', () => {
    const employee = new employee(24, 'jamescharleson@yahoo.com', 'Ryan');

    expect(employee.returnidNum()).toEqual(expect.any(Number));
});

test('should return email of employee', () => {
    const employee = new employee(24, 'jamescharleson@yahoo.com', 'Ryan');

    expect(employee.returnEmail()).toEqual(expect.any(String));
});

