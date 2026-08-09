
let product = {
    productname: "apple",
    productPrice: 20
}

let employee = {
    empId: 1,
    empName : "saravanan",
    age: 25
}

function getProductDetails(employeeInfo){
    console.log("Product Name====>",this.productname)
    console.log("Product Price====>",this.productPrice)
    console.log("Emp Id ====>",employeeInfo.empId)
}

getProductDetails.apply(product,[employee])
