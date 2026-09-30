function basicFilterUnderstand(){
    var orignalArr = [100,200,300,400,750]

    var greaterThen500 = orignalArr.filter(
        (value,index,arr) => {
            return value >= 400
        }
    )

    console.log("orignalArr===>", orignalArr);
    console.log("transformArray===>", greaterThen500);

}










function removeDuplicatevalues() {

  var orignalArr = [100, 100, 200, 300, 300, 400, 750];

  var transformArray = orignalArr.filter((value, index, arr) => {

    return index === arr.indexOf(value)         // 4 === 3                        [100,200,300]

  });

  console.log("orignalArr===>", orignalArr);
  console.log("transformArray===>", transformArray);

}

removeDuplicatevalues()







function findDuplicateElemnts() {

  var orignalArr = [100, 100, 200, 300, 300, 400, 750];

  var transformArray = orignalArr.filter((value, index, arr) => {

    return index !== arr.indexOf(value)        

  });

  console.log("orignalArr===>", orignalArr);
  console.log("transformArray===>", transformArray);

}

// findDuplicateElemnts()


