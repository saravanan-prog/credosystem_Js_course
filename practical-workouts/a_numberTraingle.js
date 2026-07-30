const numberTraingle = (input) => {
    for(let i=1; i<=input; i++){
        let row = ""
        for(let j=1;  j<=i; j++){
            row += j
        }
        console.log(row)
    }
    return "traingle Printed"
}

numberTraingle(20)