/**
 *    product
 *    offer
 */


function productItem(callback){
    setTimeout(()=>{
        console.log("Product")
        callback()
    },1000)
}

function offerAnnouncement(){
    console.log("Offer Enabled")
}


productItem( 
    ()=>{
        offerAnnouncement()
    }
)
