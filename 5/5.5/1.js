function camelize(str){
    let arr = str.split("-");
    let newArr = arr.slice(1).map(el =>  el[0].toUpperCase() + el.slice(1))
    arr = [arr[0], ...newArr].join("");
    return arr;
}
camelize("background-color");   