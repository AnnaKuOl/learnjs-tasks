let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
    };
    function topSalary(salaries){
        let maxSalaryName = null;
        let maxSalary = 0; 
        for (let [name, salarie] of Object.entries(salaries)){
            if( salarie > maxSalary){
                maxSalary = salarie;
                maxSalaryName = name;                
            }
        }
        return maxSalaryName;
    }
console.log(topSalary(salaries)); 