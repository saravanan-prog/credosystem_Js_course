function productItem(callback){
    let price  = 6000
    setTimeout(()=>{
        console.log("Product")
        callback(price)
    },1000)
}

function productOffer(price,callback){
    let offer =null
    setTimeout(()=>{
        offer = price * 3 / 100
        callback(offer)
    },2000)
}

function accuPrice(accPrice,offer){
    setTimeout(() => {
       accPrice = accPrice - offer 
       console.log("accPrice===>",accPrice)
    }, 1000);
}

//callback-hell
productItem(
    (price)=>{
        productOffer(price,
            (offer)=>{
                 accuPrice(price,offer)
            }
        )
})