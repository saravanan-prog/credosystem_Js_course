
function getProductDetails(canidateName){

    console.log("Product Name====>",this.productname)
    console.log("Product Price====>",this.productPrice)  
}



let product = {
    productname: "apple",
    productPrice: 20
}

getProductDetails.call(product,"saravanan")