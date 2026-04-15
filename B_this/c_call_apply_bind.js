const employee = {
    name : "saravanan",
    age  : 27
}


function getEmployeeDetails(location){
    console.log("Employee name = ", this.name," age = ", this.age ,"location =" ,location)
}

getEmployeeDetails.call(employee,"velachery")

getEmployeeDetails.apply(employee,["baby nagar"])

let newFn = getEmployeeDetails.bind(employee,"kk-nagar")

newFn()

