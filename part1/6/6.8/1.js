function printNumbers(from, to){
    let currentNum = from;
    let timerId = setInterval(function(){
        alert(currentNum);
        if(currentNum == to){
            clearInterval(timerId);
        }
        currentNum++;
        
    }, 1000)
}
function printNumbers(from, to){
    let currentNum = from;
    setTimeout(function go(){
        alert(currentNum);
        if(currentNum < to){
            setTimeout(go, 1000);
        }
        currentNum++;

    }, 1000)
}
    printNumbers(5, 10);