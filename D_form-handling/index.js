
function calculate(event){
    event.preventDefault()
    const form = document.querySelector("form")
    const resultdiv = document.querySelector(".result")
    if(form[0].value == null || form[0].value == "" ){
        console.error("A value is missing")
    }
    else if(form[1].value == null || form[1].value == "" ){
        console.error("B value is missing")
    }
    else{
        const firstValue = form[0].value;
        const secondValue = form[1].value;
        var result  = Number(firstValue) + Number(secondValue)
        resultdiv.innerHTML = result
    }






   
    
}