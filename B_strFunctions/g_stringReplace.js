function singleReplacement(){

    var string = "Hello Saravanan is a software developer he is presently working on software application in world"
    var replacedString = string.replace("software","Python")
    console.log("replacedString===>",replacedString)
}


function allTextReplacement(){

    var string = "Hello Saravanan is a software developer he is presently working on software application in world"
    var replacedString = string.replaceAll("software","Python")
    console.log("replacedString===>",replacedString)
}