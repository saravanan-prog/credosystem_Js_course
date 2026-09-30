const user = {
  firstName: "Saravanan",
  lastName: "Durai",
  address: "2nd cross st, 4th ave west",
  location: "velachery",
  city: "chennai",
};

function show(age, qualification) {
  console.log("first Name =====>", this.firstName);
  console.log("first Last name =====>", this.lastName);
  console.log("Address Name =====>", this.address);

  console.log("canididate Age            ====>", age);
  console.log("canididate qualification  ====>", qualification);
}

show.apply(user, [ 25, "MCA" ] );
