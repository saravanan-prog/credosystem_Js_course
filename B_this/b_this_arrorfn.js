
this.employee_firstName = "Rajesh"
this.employee_lastName = "Kumar";

const employee = {
    empid : 121,
    employee_firstName : "saravanan",
    employee_lastName : "Durai",
    employee_fullname : () =>  this.employee_firstName + " " + this.employee_lastName
       

}

let result =  employee.employee_fullname(employee)
console.log(result)

