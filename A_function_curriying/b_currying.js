function student(mark){
    return function () {
        let result = mark >= 90 ? "First-class" : "Second-class"
        return result
    }

}

let grade = student(75)()










