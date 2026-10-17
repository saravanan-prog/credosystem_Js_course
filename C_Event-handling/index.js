
/* Button 1 - Normal Attribute Event. */

function buttonOneEvent(){
    console.log("button1 is clicked")
}

/* Button 2 */
const buttonElement = document.querySelector("#button2")
buttonElement.addEventListener(
    "click",()=>{
    console.log("Button2 is clicked")
})


/* Select box event */
const selectBox = document.querySelector("#fruits")
selectBox.addEventListener(
    "change",(event)=>{
        console.log(event.target.value)
    }
)





