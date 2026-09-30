function basicunderStand() {
  var orignalArr = [100, 200, 300, 400, 750];
  var duplicateArr = orignalArr.map((value, index, arr) => {
    return value;
  });

  console.log("orignalArr===>", orignalArr);
  console.log("duplicateArr===>", duplicateArr);
}

// basicunderStand()



function transfromNewArrayMultiplyFive() {

  var orignalArr = [100, 200, 300, 400, 750];
  var newArrmulfive = orignalArr.map( value => value * 5);

  console.log("orignalArr===>", orignalArr);
  console.log("newArrmulfive===>", newArrmulfive);
}

//transfromNewArrayMultiplyFive();




function addTitleNewnamelist() {
  var personDetail = [
    {
      name: "saravanan",
      gender: "M",
    },
    {
      name: "Priya",
      gender: "F",
    },
  ];

  var transformArray = personDetail.map((value) => {

    if (value.gender == "M") 
        value.name = "Mr." + value.name;
    else 
        value.name = "Miss." + value.name;

    return value;
  });
  console.log("personDetail   ===>", personDetail);
  console.log("transformArray  =====>", transformArray);
}
