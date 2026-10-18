function findtheSqrt(num){
    var sqrt = Math.sqrt(num)
    console.log("sqrt =====>",sqrt)
}
//findtheSqrt(25)


function convertRounofValue(num){
    var roundOff =  Math.round(num)
    console.log("Roundoff======>",roundOff)
}
// convertRounofValue(10.6)


function convertCeilValue(num){
    var ceilUp = Math.ceil(num)
    console.log("ceil Value ======>",ceilUp)
}

//convertCeilValue(22.2)

function convertFloorValue(num){
    var floorDown = Math.floor(num)
    console.log("Floor Value ======>",floorDown)
}
//convertFloorValue(55.8)

function generateOTPfoundDigit(){
    var random =  Math.random() * 9000
    var otp    =  Math.round(random)
    console.log("Otp=========>",otp)
}
generateOTPfoundDigit()




