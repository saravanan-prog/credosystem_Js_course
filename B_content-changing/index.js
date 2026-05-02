

const message = document.getElementById('welcome-msg')
const colorList = document.getElementsByClassName('colors')
const tagSelector = document.getElementsByTagName("h5")
const querySelectorById = document.querySelectorAll(".colors")




message.innerHTML = `<span style = color:red > Hello Saravanan !!! </span>`

for(let i=0; i<colorList.length; i++){
    colorList[i].innerText = "React JS"
}

const content = document.getElementById("content")

/* Remove old design */
var removebtn = document.getElementById("remove-design")

removebtn.addEventListener("click",()=>{
    console.log("remove button is clicked.....")
    content.classList.remove('basic-design')
})


/*add new design */

const addnewDesignbtn = document.getElementById('add-new-design')
addnewDesignbtn.addEventListener("click",()=>{
    content.classList.add('advanced-design')
})

/* toggle btn */

const togglebtn = document.getElementById('togglebtn')
togglebtn.addEventListener('click',()=>{

    content.classList.toggle('advanced-design')
})









