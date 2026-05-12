
const btn = document.querySelector('button')

btn.addEventListener("click",()=>{
    console.log("button is clicked")
})




const input = document.querySelector('input')

input.addEventListener("change",(event)=>{
    console.log(event.target.value)
})