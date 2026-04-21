/* Method -1 Event handling */

const btn = document.getElementById('btn')

btn.addEventListener("click",()=>{
    console.log("event is triggered")
})


const username = document.getElementById('username')
username.addEventListener('change',(event)=>{
    console.log(event.target.value)
})  


// method 2 

function clickme(){
    console.log("button is clicked")
}

function changeEvent(event){
    console.log("event===>",event.target.value)
}
