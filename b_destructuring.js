function simpleDestrcure() {
  const product = {
    name: "apple",
    qty: 5,
    price: 200,
    availability: true
  }

  const {
    name,
    qty,
    price,
    availability
  } = product



  console.log("Product Name ====>", name)
  console.log("Product qty ====>", qty)
  console.log("Product price ====>", price)
  console.log("Product availability ====>", availability)
}

function compleObjdestrcture() {

  const employee = {
    firstname: "Saravanan",
    lastname: "Durai",
    address: {
      temp: {
        doorNumber: 25,
        streetName: "2nd cross st",
        area: "Dhandeswaram",
        city: "velachery-chennai"
      },
      permanent: {
        doorNumber: 52,
        streetName: "4th Avue west",
        area: "Malatheev Nagar",
        city: "Tanjore"
      }
    },
    salary: {
      basic: 5000,
      hra: 2000,
      ca: 6000
    }
  }

  // Destrcture
  const {
    firstname,
    lastname,
    address : {
      temp:{
        doorNumber : temp_doorNumber,
        streetName : temp_streetname
      },
      permanent:{
        doorNumber : permanent_doorNumber,
        streetName : permanent_streetname
      }
    }
  } = employee

  console.log(`Employee name  ===> ${firstname} ${lastname} `)
  console.log(`Employee Temp address  ===> ${temp_doorNumber} ${temp_streetname} `)
  console.log(`Employee permanent address  ===> ${permanent_doorNumber} ${permanent_streetname} `)


}


compleObjdestrcture()





















