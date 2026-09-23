
function printTheStatement(){
  let bottle = "oil"  
  bottle = "water"       /* re-assigment allowed but re-declare not possible */
  if(true) {
    let tiffinBox = "Chicken Biriyani"
    console.log("block inside bottle ====>",bottle)
    console.log("tiffinBox ====>",tiffinBox)
  }
                                                                                 
  console.log("block outside bottle ====>",bottle)
  console.log("tiffinBox ====>",tiffinBox)

}

printTheStatement()