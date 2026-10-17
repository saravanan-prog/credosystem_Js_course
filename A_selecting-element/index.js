
function idBasedSelector(){
    
    const idContent1 = document.getElementById("content1")
    const idContent2 = document.getElementById("content2")
    const idContent3 = document.getElementById("content2")


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
    const inputElement = document.getElementsByTagName("input")
    console.log("inputElement =======>",inputElement.value)
}
tagNameSelector()















function queryBasedSelector(){
    const idElements = document.querySelectorAll(".f32-item")
    console.log("idElements=============>",idElements)
}
