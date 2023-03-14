
{function sumTo(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
    //второй по скорости
}
console.log(sumTo(100));
}
{
    function sumTo(n){
        return n == 1 ? n : n + sumTo(n-1);s        
    }
    console.log(sumTo(100));
    //самый медленный вариант, к тому же есть ограничение на максимальное число
}
{
    function sumTo(n){
        return n*(n + 1)/2;
    }
    console.log(sumTo(100));
    //самый быстрый вариант
}