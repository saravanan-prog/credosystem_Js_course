const employee = {
    empid : 121,
    employee_firstName : "saravanan",
    employee_lastName : "Durai",
    employee_fullname : function(){
        return this.employee_firstName + " " + this.employee_lastName
    }
}

let employeeFullName = employee.employee_fullname()

console.log("employeeFullName=====>",employeeFullName)