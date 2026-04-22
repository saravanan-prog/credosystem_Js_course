const selector = document.querySelectorAll("#firstId")


for(let item of selector){
   item.innerText = "Hello Welcome to Javascript program"
}


const content = document.getElementsByClassName('content')
console.log(content)
content[0].innerHTML = "<span style='color:green'>Hello Sarath </span>"



const username = document.getElementById('username')
username.value = "saravanan@gmail.com";


const element = document.querySelector(".container")
element.style.color = "white";
element.style.backgroundColor = "green"
element.style.padding = "20px";
element.style.marginTop = "20px";



const toogleAction =() => { 

   console.log("Action triggered")

   const toggleContainer = document.querySelector('.toogle-container')
   toggleContainer.classList.toggle("hideShow")

}

