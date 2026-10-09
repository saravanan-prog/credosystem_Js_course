
function idBasedSelector(){
    
    const idContent1 = document.getElementById("content1")
    const idContent2 = document.getElementById("content2")

    console.log("idContent1 =======>",idContent1.innerText)
    console.log("idContent2 =======>",idContent2.innerText)
}


function classBasedSelector(){
    const courseList = document.getElementsByClassName("course-list")[0]
    const CourseListchildren = courseList.children
    console.log("CourseListchildren==========>",CourseListchildren[0].innerText)
}

function tagNameSelector(){
    const inputElement = document.getElementsByTagName('input')[0]
    console.log("inputElement =======>",inputElement.value)
}

function queryBasedSelector(){
    const idElements = document.querySelectorAll(".f32-item")
    console.log("idElements=============>",idElements)
}
queryBasedSelector()