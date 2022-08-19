//this is just importing the employee again
const Employee = require("./Employee");
//this is also just extending the employee using the intern constructor
class Intern extends Employee {
    constructor(name, id, email, school) {
        super (name, id, email);
        this.school = school;        
    }
    //this is just grabbing the school input 
    getSchool() {
        return this.school;
    }
    //this is also just grabbing the role input
    getRole () {
        return "Intern"
    }
}
//this is just exporting the intern
module.exports = Intern;