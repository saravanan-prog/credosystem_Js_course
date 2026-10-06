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

  var passengerList = [
    {
      candidateName: "Saravanan Durai",
      gender: "M",
    },
    {
      candidateName: "Priya",
      gender: "F",
    }
  ];

  var trainChatList =  passengerList.map((value) => {

    if (value.gender == "M") 
        value.candidateName = "Mr." + value.candidateName 
    else 
        value.candidateName = "Miss." + value.candidateName 

    return value;
  });



  console.log("trainChatList  =====>", trainChatList);
}
addTitleNewnamelist()