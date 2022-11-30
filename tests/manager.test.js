


const Manager = require('../assets/javascript/manager');

test('should create an object from manager classes', () => {
    const manager = new Manager('jamescharleson@yahoo.com', 'Ryan', 26, 9515267211);
    
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.idNum).toEqual(expect.any(Number));
    expect(manager.officeNum).toEqual(expect.any(Number));
});

test('should get Manager returned from returnTitle', () => {
    const manager = new Manager('jamescharleson@yahoo.com', 'Ryan', 26, 9515267211);

    expect(manager.returnTitle()).toEqual('Manager');
});

test('should get a number from returnOfficeNum', () => {
    const manager = new Manager('jamescharleson@yahoo.com', 'Ryan', 26, 9515267211);

    expect(manager.returnOfficeNum()).toEqual(expect.any(Number));
});