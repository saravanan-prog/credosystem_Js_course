function assendigOrderValues(){
    // Assending Order pattern

    const numbers = [100,50,25,200,80]
    const sortedArray = numbers.sort(
        (a,b) => {
            return a - b                           // Asending pattern
        }
    )

    console.log("sortedArray Arr ====>",sortedArray)
}

//assendigOrderValues()


function desendingOrder(){
    const numbers = [100,50,25,200,80]
    const desendingPattern =  numbers.sort((a,b) => {
        return b - a 
    } )
    console.log("desendingPattern Arr ====>",desendingPattern)  
}

desendingOrder()
                


