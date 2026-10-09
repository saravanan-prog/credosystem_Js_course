function getProduct(){
    
    var promise =  new Promise((resolve,reject) => {
        setTimeout(()=>{
            var product ={
                productId : 1,
                productName :"apple",
                productPrice : 120
            }

            resolve(product)
        
        },3000)

   })

   return promise
}

function discountOffer(product){

    var promise =  new Promise((resolve,reject) => {
        let offer = 50;
        const  productPrice  = product.productPrice
        let discountPrice = productPrice - (productPrice * offer/100)
        product.productPrice = discountPrice
        reject(product)
    })

    return promise
    
}

function couponcodeValidation(couponCode,product){
    var promise = new Promise( (resolve,reject)=>{
        if(couponCode=='WED100'){
            product.productPrice = product.productPrice - 10

            resolve(product)
        }
        reject("Coupon Error")
    })

    return promise
}


async function mainFunction(){

    try{
        let product = await getProduct()
        console.log("product====>",product)
        let discountProduct = await discountOffer(product);
         console.log("discountProduct====>",discountProduct)
        let couponOffer = await couponcodeValidation("WED100",discountProduct)
        console.log("couponOffer====>",couponOffer)
    }
    catch(error) {
        console.error("error =====>",error)
    }
    
}

mainFunction()
       