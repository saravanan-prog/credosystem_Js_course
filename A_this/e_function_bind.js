
let product = {
    productname: "apple",
    productPrice: 20
}

function getProductDetails(manifactireUnit){
    console.log("Product Name====>",this.productname)
    console.log("Product Price====>",this.productPrice)
    console.log("Mainfacture unit====>",manifactireUnit)
}

let newFunction = getProductDetails.bind(product,"himachala")

newFunction()