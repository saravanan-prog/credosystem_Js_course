
function globalScopeUnderstand(){

  var bottle = "water"  
                            
  if(true) {
    var tiffinBox = "Chicken Biriyani"
    console.log("block inside bottle ====>",bottle)
    console.log("block inside tiffinBox ====>",tiffinBox)                      
  }
                                                                         
  console.log("block outside bottle    ====>",bottle)
  console.log("block outside tiffinBox ====>",tiffinBox)

}

globalScopeUnderstand()



function valueRedeclaration(){

  var bottle = "curd"
  var bottle = "oil"
  var bottle = "water"

  console.log("bottle ====>",bottle)

}





function valueReAssignment(){

  var bottle = "curd"
  
  bottle = "oil"
  bottle = "water"

  console.log("bottle ====>",bottle)

}

