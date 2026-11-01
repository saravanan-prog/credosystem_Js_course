function getProduct(){

    var promise =  new Promise((resolve,reject) => {
        setTimeout(()=>{
            var product ={
                productId : 1,
                productName :"apple",
                productPrice : 120
            }

            if(product != undefined)
                resolve(product)
            else 
                reject("Product is empty")
        
        },3000)

   })

   return promise
}


async function discountOffer(){

    var product = await getProduct()

    var promise =  new Promise((resolve,reject) => {
        let offer = 50;
        const  productPrice  = product.productPrice
        let discountPrice = productPrice - (productPrice * offer/100)
        product.productPrice = discountPrice
        if(product !=undefined){
            resolve(product)
        }
        else{
            reject("Product is empty")
        }
    })

    return promise
    
}


async function couponcodeValidation(couponCode){
    var discountProduct = await discountOffer()
    var promise = new Promise( (resolve,reject)=>{
        if(couponCode=='WED10'){
            discountProduct.productPrice = discountProduct.productPrice - 10
            if(discountProduct != undefined)
                resolve(discountProduct)
            else
                reject("Discount product is empty")
        }
        reject("Coupon Error")
    })

    return promise
}


async function mainFunction(){

    try{
       const finalProductResult =  await couponcodeValidation("WED10")
       console.log("Final Product Result =====>",finalProductResult)
    }
    catch(error) {
        console.error("error =====>",error)
    }
    
}

mainFunction()
       