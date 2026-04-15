function employee(basicSalary) {
    
    return function(){
        let hra = 2500
        let da  = 1000
        let bonus = 6000
        let gross = basicSalary +  hra + da + bonus

        return function(){
            let pf = 3600
            let pt  = 1200

            let netSal = basicSalary - (pf + pt)

            return netSal
        }

    }

    
}

let salary = employee(50000)()()

console.log("salary=====>",salary)