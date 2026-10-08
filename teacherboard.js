function foodOrder(){


    const OrderItem = new Promise(
        (resolve,reject) => {
            setTimeout(() => {
            if(true){
                resolve("Chicken Manchurian is ready")
            }
            else {
                reject("Something went wrong.")
            }
            })
            
        }
    )

    return OrderItem

}

foodOrder()
    .then ( 
        (data) => console.log("Data=====>",data)
    )
    .catch(
        (error) => console.log("error===>",error)
    )