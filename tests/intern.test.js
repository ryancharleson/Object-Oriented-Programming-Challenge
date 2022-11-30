

const Intern = require('../assets/javascript/intern');

test('should create an object from intern classes', () => {
    const intern = new Intern(26, 'jamescharleson@yahoo.com', 'Ryan', 'Utah Valley University');
    
    expect(intern.idNum).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('should get Intern returned from returnTitle', () => {
    const intern = new Intern(26, 'jamescharleson@yahoo.com', 'Ryan', 'ryancharleson', 'Utah Valley University');

    expect(intern.returnTitle()).toEqual('Intern');
});

test('should get a string from returnSchoolName', () => {
    const intern = new Intern(26, 'jamescharleson@yahoo.com', 'Ryan', 'ryancharleson', 'Utah Valley University');

    expect(intern.returnSchoolName()).toEqual(expect.any(String));
});