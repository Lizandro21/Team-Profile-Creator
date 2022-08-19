// imports the engineer construcror for the test
const Engineer = require('../lib/engineer');

// makes the engineer object for the testing
test('makes the engineer object', () => {
    const engineer = new Engineer('Ronaldo', 9999, 'ronaldo7@gmail', 'ronaldo7');
    
    expect(engineer.github) .toEqual(expect.any(String));
});
// grabs the github from the card
test('grabs the github from the employee', () => {
    const engineer = new Engineer('Ronaldo', 9999, 'ronaldo7@gmail', 'ronaldo7');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});
// grabs the role from the card 
test('grabs the role from th employee', () => {
    const engineer = new Engineer('Ronaldo', 9999, 'ronaldo7@gmail', 'ronaldo7');

    expect(engineer.getRole()).toEqual("Engineer");
});