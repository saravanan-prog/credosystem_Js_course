const user = {
  name : "saravanan",
  address:{
    temp:"2nd cross st 4th ave west velachery",
    permanent : "5th cross st, Tanjore"
  },
  salary:5000,
  workLocation:"TCS-siruseri"
}

const { name,
        address:{
          temp,
          permanent
        },
        salary,
        workLocation
      } = user
//const {temp,permanent} = address

console.log("user=========>",name)
console.log("permanenet address =========>",permanent)
















