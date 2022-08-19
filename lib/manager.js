//this just imports the employee constructor
const Employee = require("./Employee");
//this just extends the employee constructor with the new manager one were about to create
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    //this gets the office number
    getOfficeNumber() {
        return this.officeNumber;
    }
    //this gets the manager role
    getRole() {
        return "Manager";
    }
}
//this just exports the manager we just created
module.exports = Manager;