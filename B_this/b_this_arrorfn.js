this.employee_firstName = "vimala"
this.employee_lastName  = "Raja sekar"

const employee = {
    empid : 121,
    employee_firstName : "saravanan",
    employee_lastName : "Durai",
    employee_fullname : () => {
        return this.employee_firstName + " " + this.employee_lastName
    }
}

let fullname  = employee.employee_fullname()

console.log(fullname)