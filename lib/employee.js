//this just shows the employee consturctor
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    //this returns the name input
    getName () {
        return this.name;
    }
    //this inputs the ID input
    getId () {
        return this.id;
    }
    //this inputs the email input
    getEmail () {
        return this.email;
    }
    //this returns the employee input
    getRole() {
        return "Employee"
    }

}
//this exports the employee section
module.exports = Employee;