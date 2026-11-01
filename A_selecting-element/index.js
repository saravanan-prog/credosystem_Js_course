
function idBasedSelector(){
    
    const idContent1 = document.getElementById("content1")
    const idContent2 = document.getElementById("content2")
    const idContent3 = document.getElementById("content3")

    console.log("idContent1 =======>",idContent1.innerText)
    console.log("idContent2 =======>",idContent2.innerText)
    console.log("idContent3 =======>",idContent3.innerText)
   
}

function classBasedSelector(){
    const courseList = document.getElementsByClassName("f32-item")
    for(let elementItem of courseList){
        console.log("Element Value ====>",elementItem.innerText)
    }
    
}

function tagNameSelector(){

    const username = document.getElementsByTagName("input")[0].value
    const password =  document.getElementsByTagName("input")[1].value

    console.log(" username  =======>",username)
    console.log("password =======>", password)
}

function querySelectorMethod(){
    const element = document.querySelector(".f32-item")

    console.log("Element value ====>",element)
}

function querySelectorAllMethod(){
    const element = document.querySelectorAll(".f32-item")
    console.log("Element value ====>",element)
}















function queryBasedSelector(){
    const idElements = document.querySelectorAll(".f32-item")
    console.log("idElements=============>",idElements)
}
