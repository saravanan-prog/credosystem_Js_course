
function printTheStatement(){
  var bottle = "oil"  
  var bottle = "water"                                    // re - declaration
   
  if(true) {
    var tiffinBox = "Chicken Biriyani"
    console.log("block inside ====>",bottle)
  }
  
  bottle = "curd"                                          // re - assignment                                        
  console.log("block outside ====>",bottle)
  console.log("tiffinBox ====>",tiffinBox)

}

printTheStatement()

