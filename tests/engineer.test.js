

const Engineer = require('../assets/javascript/engineer');

test('should create an object from engineer classes', () => {
    const engineer = new Engineer(26, 'jamescharleson@yahoo.com', 'Ryan', 'ryancharleson');
    
    expect(engineer.idNum).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('should get Engineer returned from returnTitle', () => {
    const engineer = new Engineer(26, 'jamescharleson@yahoo.com', 'Ryan', 'ryancharleson');

    expect(engineer.returnTitle()).toEqual('Engineer');
});

test('should get a string from returnGithub', () => {
    const engineer = new Engineer(26, 'jamescharleson@yahoo.com', 'Ryan', 'ryancharleson');

    expect(engineer.returnGithub()).toEqual(expect.any(String));
});