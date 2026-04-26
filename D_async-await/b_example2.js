function getProduct(){
    
  

   return new Promise((resolve,reject) => {
        setTimeout(()=>{
            var product ={
                productId : 1,
                productName :"apple",
                prductPrice : 120
            }

            resolve(product)
        
        },3000)


   })

    
    
}

function discountOffer(product){
    let offer = 50;
    const { prductPrice } = product
    let discountPrice = prductPrice - (prductPrice * offer/100)
    product.prductPrice = discountPrice

    return Promise.resolve(product)
    
}

function couponcodeValidation(couponCode,product){
    let day = new Date().getDay()
    if(couponCode && day == 0)
        product.prductPrice = product.prductPrice - 10;
    

    return Promise.resolve(product)
}


async function mainFunction(){

    try{
        let product = await getProduct()
        let discountProduct = await discountOffer(product);
        let couponOffer = await couponcodeValidation("SUN10",discountProduct)


        console.log("product====>",product)
        console.log("discountProduct====>",discountProduct)
        console.log("couponOffer====>",couponOffer)
    }
    catch(error) {
        console.error(error)
    }
    
}

mainFunction()
       