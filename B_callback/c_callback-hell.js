function getProduct(callback1,callback2){
    
   var product = {}

    setTimeout(()=>{
        product = {
            productId : 1,
            productName :"Apple IPhone",
            prductPrice : 120000
        }
        callback1(product)
        callback2("DOMINOZ150",product)
       
    },3000)
    
}

function discountOffer(product){

    var offer = 50;
    var discountPrice = product.prductPrice - (product.prductPrice * offer/100)
    product.prductPrice = discountPrice

    
}

function couponcodeValidation(couponCode,product){
    var day = new Date().getDay()
    if(couponCode && couponCode == "SATSAT" && day == 6)
       product.prductPrice = product.prductPrice -  (  product.prductPrice * 10 / 100 ) 
    

    console.log("product====>",product)
}

getProduct(discountOffer,couponcodeValidation)  // waiting pool



       