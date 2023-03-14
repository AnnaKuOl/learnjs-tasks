function sumInput(){
    let arr = [];
    let sum = 0;
    
    while(true){
        let element = prompt("Введите число", 0);
        if(element === "" || element === null || !isFinite(element)) break;
        arr.push(+element);
    }

    for(let el of arr){
        sum += el;
    }
    return sum;       
}
alert(sumInput());