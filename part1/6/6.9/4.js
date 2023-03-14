function f(a) {
    console.log(Date.now())
  }
  
function throttle(func, ms){
    let throttled = false;
    let savedArgs;
    let savedThis;
    function wrapper(){
        if(throttled){
            savedArgs = arguments;
            savedThis = this;
            return;
        }
        func.apply(this, arguments);
        throttled = true;

        setTimeout(() => { 
            throttled = false;
            if(savedArgs){
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        },ms)
    }
    return wrapper;
}
  // f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);

