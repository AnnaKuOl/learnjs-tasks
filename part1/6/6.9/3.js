let f = debounce(alert, 1000);

function debounce(f, ms){
    let isReady = false;
    return function () {
        if(isReady) return;

        f.apply(this, arguments)
        isReady = true;
        setTimeout(() => isReady = false, ms)
    }
}
f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout( () => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout( () => f(4), 1100); // выполняется
setTimeout( () => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)