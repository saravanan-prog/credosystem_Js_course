const employee = {
  firstName: "Saravanan",
  lastName: "Durai",
  address: "2nd cross st, 4th ave west",
  location: "velachery",
  city: "chennai",
};

missingData = {
  age : 25,
  qualification:"MCA"
}

function display(missingData) {
  console.log("first Name =====>", this.firstName);
  console.log("first Last name =====>", this.lastName);
  console.log("Address Name =====>", this.address);
  
  console.log("age            ====>", missingData.age);
  console.log("qualification            ====>", missingData.qualification);


}

display.call(employee, missingData);
