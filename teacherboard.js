


const employee = {

    name : "Rajaeskear",
    lastName: "Vimal Raj",
    address:{
        streetNumber : 27,
        streetName :"Car street",
        area : "Velachery",
        pincode : 600042,
        town : "Chennai"
    },
   
    fullname : function(){
        return this.name +" "+ this.lastName
    },
    fullAddress : function(){

        return this.address.streetNumber + " " 
        + this.address.streetName  + " " 
        + this.address.area  + " " 
        + this.address.pincode + " "
        + this.address.town

    }

}
console.log(" Employee Full Name ====>",employee.fullname())
console.log(" Employee Full Address ====>",employee.fullAddress())

