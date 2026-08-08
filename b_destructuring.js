const user = {
  name : "saravanan",
  address:{
    temp:"2nd cross st 4th ave west velachery",
    permanent : "5th cross st, Tanjore"
  }
}

const {
      name, 
      address : {
          temp,
          permanent
      }
    } = user



console.log(temp)