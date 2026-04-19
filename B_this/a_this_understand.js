const employee = {
    empid : 121,
    employee_firstName : "saravanan",
    employee_lastName : "Durai",

    employee_fullname : function(){
        return this.employee_firstName + " " + this.employee_lastName
    }
}


console.log("emp ID ===>",employee.empid)
console.log("emp name ===>",employee.employee_firstName)
console.log("employee Full Name===>",employee.employee_fullname())









