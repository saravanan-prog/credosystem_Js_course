this.employee_firstName = "Kishore"
this.employee_lastName  = "Metha"


const employee = {
    empid : 121,
    employee_firstName : "saravanan",
    employee_lastName : "Durai",
    employee_fullname : () =>  this.employee_firstName + " " + this.employee_lastName
       
}

let result =  employee.employee_fullname()
console.log("employee Full Name ====>",result)

