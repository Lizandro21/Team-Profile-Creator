// this imports the employee constructor
const Employee = require('../lib/employee');
// cthis is making the employee card to test
test('makes the employee', () => {
    const employee = new Employee('Nicole', 9999, 'ronaldo7@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});
// tests grabbing the name from the card 
test('grabs the employee name', () => {
    const employee = new Employee('Nicole', 9999, 'ronaldo7@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});
// testing getting the email from the card
test('gets employee email', () => {
    const employee = new Employee('Nicole', 9999, 'ronaldo7@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});
// testing grabbing the role from the card
test('gets role of employee', () => {
    const employee = new Employee('Nicole', 9999, 'ronaldo7@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 
// testing grabbing the ID from the car
test('gets employee ID', () => {
    const employee = new Employee('Nicole', 9999, 'ronaldo7@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});
