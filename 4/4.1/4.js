let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
function getSumPay(obj){
    let result = 0;
    for (let key in obj) {
        result += obj[key];
    }
    return result;
}
let sum = getSumPay(salaries);
alert(sum);