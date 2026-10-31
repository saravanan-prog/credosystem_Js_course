
const sampleItem = new Promise(
  (resolve,reject) => {
    const chips = true
    if(chips)
      resolve("chips is available")
    else
      reject("chilps not available")
  }
)

sampleItem.then(
  (data) => {
    console.log("data===>",data)
  }
)
.catch(
  (error) => console.log("Error::::",error)
)
  
