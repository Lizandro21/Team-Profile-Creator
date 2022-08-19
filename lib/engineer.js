//this just inports the employee 
const Employee = require("./Employee");
//this jsut exetends the employee using the engineer constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }
    //this grabs the github input
    getGithub() {
        return this.github;
    }
    //this just grabs the role input
    getRole() {
        return "Engineer";
    }

}
//this is exporting the engineer 
module.exports = Engineer;