function getProduct(callback1,callback2){
    
   let product = {}

    setTimeout(()=>{
        product ={
            productId : 1,
            productName :"apple",
            prductPrice : 120
        }
        callback1(product,callback2)
        
       
    },3000)
    
}

function discountOffer(product,callback){
    let offer = 50;
    const { prductPrice } = product
    let discountPrice = prductPrice - (prductPrice * offer/100)
    product.prductPrice = discountPrice

    callback("SUN10",product)
    
}

function couponcodeValidation(couponCode,product){
    let day = new Date().getDay()
    if(couponCode && day == 0)
        product.prductPrice = product.prductPrice - 10;
    

    console.log("product====>",product)
}

  getProduct(discountOffer,couponcodeValidation)  // waiting pool



       