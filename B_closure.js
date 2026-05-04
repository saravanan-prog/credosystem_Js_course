function buyItems(){

    let productItem = {
        item : "dosa",
        price : 50,
        cgst : 2.5,
        sgst : 2.5
    }


    return function(){
        // access to parent variable
        
        let cgstAmout = productItem.price * productItem.cgst / 100
        let sgstAmout = productItem.price * productItem.sgst / 100
        let totalPrice = productItem.price + cgstAmout + sgstAmout

        return Math.round(totalPrice)
    }




}

let calculate = buyItems()
let result = calculate()

console.log("result====>",result)