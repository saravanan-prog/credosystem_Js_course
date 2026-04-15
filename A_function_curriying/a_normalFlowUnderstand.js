
function student(mark){
    function gradeCalcuation(){
        let result = mark >= 90 ? "First-class" : "Second-class"
        return result
    }

    return gradeCalcuation
}

let studentGrade = student(25)
let grade = studentGrade()



console.log("grade=====>",grade)