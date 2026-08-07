function getProduct(callback){
    
   let product = {}

    setTimeout(()=>{
        product ={
            productId : 1,
            productName :"apple",
            prductPrice : 120
        }
        callback(product)
    },3000)
    
    //return product
}

function discountOffer(product){
    let offer = 50;
    const { prductPrice } = product
    let discountPrice = prductPrice - (prductPrice * offer/100)
    product.prductPrice = discountPrice
    console.log("offer method===>",product)
}

 getProduct(discountOffer)

