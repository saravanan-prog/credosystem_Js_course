
const user = { 
    firstName: "Saravanan",
    lastName : "Durai",
    address : "2nd cross st, 4th ave west",
    location : "velachery",
    city     : "chennai",
};



    function show(status,salary) {
        console.log("first Name =====>", this.firstName);
        console.log("first Last name =====>", this.lastName);
        console.log("Address Name =====>", this.address);
        console.log("Employee Status====>",status)
        console.log("Employee Salary====>",salary)

    }

    const newFunction = show.bind(user,"active",25000);

    newFunction()