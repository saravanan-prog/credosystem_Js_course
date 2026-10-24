/*  Example 1 :  Filter method Basic understand */

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




/*  Example 2 :  Remove duplicate Elements */


function removeDuplicatevalues() {

  var orignalArr = [100, 100, 200, 300, 300, 400, 750];

  var uniqueArray = orignalArr.filter((value, index, selfArr) => {

    return index === selfArr.indexOf(value)                                        

  });

  console.log("orignalArr===>", orignalArr);
  console.log("uniqueArray===>", uniqueArray);

}



/*  Example 3 : Find duplicate Elements */


function findDuplicateElemnts() {

  var orignalArr = [100, 100, 200, 300, 300, 400, 750];

  var duplicateList = orignalArr.filter((value, index, arr) => {

    return index !== arr.indexOf(value)        

  });

  console.log("orignalArr===>", orignalArr);
  console.log("duplicateList===>", duplicateList);

}



