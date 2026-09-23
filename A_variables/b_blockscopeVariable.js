

function blockScopeunderstand(){

  let  bottle = "water"  
                            
  if(true) {
    let tiffinBox = "Chicken Biriyani"
    console.log("block inside bottle ====>",bottle)
    console.log("block inside tiffinBox ====>",tiffinBox)                      
  }
                                                                         
  console.log("block outside bottle    ====>",bottle)
  console.log("block outside tiffinBox ====>",tiffinBox)

}

blockScopeunderstand()



function valueRedeclaration(){

  let bottle = "curd"
  // let bottle = "oil"
  // let bottle = "water"

  console.log("bottle ====>",bottle)

}





function valueReAssignment(){

  let bottle = "curd"
  bottle = "oil"
  bottle = "water"

  console.log("bottle ====>",bottle)

}

