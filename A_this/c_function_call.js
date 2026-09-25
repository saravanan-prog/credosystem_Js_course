
const user = { 
    firstName: "Saravanan",
    lastName : "Durai",
    address : "2nd cross st, 4th ave west",
    location : "velachery",
    city     : "chennai",
};



    function show(salary) {
      console.log("first Name =====>", this.firstName);
      console.log("first Last name =====>", this.lastName);
      console.log("Address Name =====>", this.address);
      console.log("Employee Status====>",salary)
    }

    show.call(user,25000);   