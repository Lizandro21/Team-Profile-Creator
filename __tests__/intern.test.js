// imports the intern constructor for testing
const Intern = require('../lib/intern');

// makes the intern object for testing 
test('makes the intern object', () => {
    const intern = new Intern('Ronaldo', 9999, 'ronaldo7@gmail', 'MUFC');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// grabs the school from the card
test('grabs the interns school', () => {
    const intern = new Intern('Ronaldo', 9999, 'ronaldo7@gmail', 'MUFC');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// grabs the role from the card
test('grabs the role of the employee', () => {
    const intern = new Intern('Ronaldo', 9999, 'ronaldo7@gmail.com', 'MUFC');

    expect(intern.getRole()).toEqual("Intern");
}); 