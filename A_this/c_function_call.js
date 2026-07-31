function getProductDetails(manifactireUnit){
    console.log("Product Name====>",this.productname)
    console.log("Product Price====>",this.productPrice)
    console.log("Mainfacture unit====>",manifactireUnit)
}



let product = {
    productname: "apple",
    productPrice: 20
}
getProductDetails.call(product,"himachala")