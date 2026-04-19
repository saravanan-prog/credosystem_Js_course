function employeeSalaryCompute(basic,hra,pa){

    return function(pf){
        let salary = (basic + hra + pa) - pf

        return function(tax){
            let netSalary = salary - (salary * tax / 100)
            return netSalary;
        }
       
    }

    
}

let netSalary = employeeSalaryCompute(5000,2500,50000)(3600)(8)









