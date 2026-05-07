function getProduct(discountOffer,couponcodeValidation){
    
   let product = {}

    setTimeout(()=>{
        product ={
            productId : 1,
            productName :"apple",
            prductPrice : 120
        }
        discountOffer(product,couponcodeValidation)
        
       
    },3000)
    
}

function discountOffer(product,callback){
    let offer = 50;
    const { prductPrice } = product
    let discountPrice = prductPrice - (prductPrice * offer/100)
    product.prductPrice = discountPrice

    couponcodeValidation("THUR10",product)
    
}

function couponcodeValidation(couponCode,product){
    let day = new Date().getDay()
    if(couponCode && couponCode == "THUR10" && day == 4)
        product.prductPrice = product.prductPrice - 10;
    

    console.log("product====>",product)
}

  getProduct(discountOffer,couponcodeValidation)  // waiting pool



       