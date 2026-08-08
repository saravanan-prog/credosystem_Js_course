
function btnClick(){
    console.log("button1 is clicked")
}






const btn = document.querySelector('#button2')

btn.addEventListener("click",()=>{
    console.log("button2 is clicked")
})






const input = document.querySelector('input')
input.addEventListener("change",(event)=>{
    console.log(event.target.value)
})

