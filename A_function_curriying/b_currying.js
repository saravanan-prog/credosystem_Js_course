function student(mark){

    return function() {
        let grade = null
        if(mark >=90)
            grade = "A"
        else if(mark >= 75)
            grade = "B"
        else if(mark >= 50)
            grade = "C"
        else
            grade = "F"

        return function(){
            let result;
            switch(grade){
                case "A" :
                    result = "Excellent Performer"
                    break;
                case "B":
                    result = "Good Performer"
                    break
                case "C":
                    result = "Average Performer"
                    break
                default:
                    result = "Fail"
            }
            return result
        }
    }

}

let result = student(75)()()
console.log("result====>",result)










