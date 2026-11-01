
function calculate(event){
    event.preventDefault()
    const form        = document.querySelector("form")
    const resultdiv   = document.querySelector(".result")
    var errorSelector = document.querySelector(".error")

    if( (form[0].value == null || form[0].value == "") && 
        (form[1].value == null || form[1].value == "")
      ){
      errorSelector.innerText =  "A and B values is missing"
    }
    else if(form[0].value == null || form[0].value == "" ){
        errorSelector.innerText = "A value is missing"
    }
    else if(form[1].value == null || form[1].value == "" ){
       errorSelector.innerText = "B value is missing"
    }
    else{
        const firstValue = form[0].value;
        const secondValue = form[1].value;
        var result  = Number(firstValue) + Number(secondValue)
        
        resultdiv.innerHTML = `
            <div class="border border-rounded">
              ${result}
            </div>
        `
    }

 
    
}