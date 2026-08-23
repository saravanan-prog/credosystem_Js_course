const firstElement =  document.getElementById("first-element")
firstElement.innerText              = "Hello Saravanan";
firstElement.style.color            = "white";
firstElement.style.backgroundColor  = "green";
firstElement.style.fontSize         = "32px";




const homeMenu     = document.getElementById("home")
const aboutMenu    = document.getElementById("about")
const contactMenu  = document.getElementById("contact")

homeMenu.addEventListener("click",()=>{
    aboutMenu.classList.remove("active")
    contactMenu.classList.remove("active")
    homeMenu.classList.add("active")
})

aboutMenu.addEventListener("click",()=>{
    homeMenu.classList.remove("active")
    contactMenu.classList.remove("active")
    aboutMenu.classList.add("active")
})

contactMenu.addEventListener("click",()=>{
    homeMenu.classList.remove("active")
    aboutMenu.classList.remove("active")
    contactMenu.classList.add("active")
})










