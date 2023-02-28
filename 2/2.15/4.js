
    function pow(x,n){
        let result = x ** n;
        return result;
    };
    let x = +prompt("Введите число x", "");
    let n = Math.floor(+prompt("Введите число n", ""));
    while(n < 1){
        n = +prompt("Число n должно быть целым и больше 1", "");
    }
    alert(pow(x, n)); 
    