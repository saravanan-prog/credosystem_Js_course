const welcomeMsg = () => "Hello welcome to Javascript"

const subraction = (a,b) =>  a - b

const multiplication = (a,b) => a * b

const squareArea = side => side * side

const sutdentResult = (m1,m2,m3) => {
    let total = m1 + m2 + m3
    let marks = [m1,m2,m3]
    let avg   = total / 3 
    let result;
    console.log(m2)

    for(let i=0; i<marks.length; i++) {
        if(marks[i] > 35){
            result = "Pass"
        }
        else{
            result = "Fail"
            break;
        }

    }

    let obj = {
        "student_total_mark" :total,
        "student_avg_mark" : avg,
        "student_result" : result

    }

    return obj

}


let result = sutdentResult(100,94,80)  // call by value

console.log(result)