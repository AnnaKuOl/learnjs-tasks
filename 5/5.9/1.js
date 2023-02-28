let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
function sumSalaries(obj){
    let sum = 0;
    for (let el of Object.values(obj)) {
        sum += el;
    }
    return sum;
}
alert( sumSalaries(salaries) );