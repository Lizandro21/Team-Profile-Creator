// imports the manager constructor for the testing
const Manager = require('../lib/manager');

// makes the maager object for the testing
test('makes the manager object', () => {
    const manager = new Manager('Ronaldo', 9999, 'ronaldo7@gmail', 7);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// grabs the employees role from the card
test('grabs the role of the employee', () => {
    const manager = new Manager('Ronaldo', 9999, 'ronaldo7@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 