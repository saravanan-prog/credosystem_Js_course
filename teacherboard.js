function product(){
   
  return new Promise( (resolve,reject) => {
      setTimeout(()=>{
         resolve( 
            {
              productName:"apple",
              price : 100
            }
            
         )
      },4000)
  })
}

async function priceRecalc(){

  try{
    const purchasedProduct =  await product()
    purchasedProduct.price = ((2.5 * purchasedProduct.price ) / 100) + purchasedProduct.price
    console.log(purchasedProduct)
  }
  catch(error){
    console.log(error)
  }
 

}

priceRecalc()