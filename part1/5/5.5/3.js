let arr = [5, 3, 8, 1];
function filterRange(arr, a, b){
    for(let i = 0; i < arr.length; i++){
        let value = arr[i];
        console.log(value);
        if(value < a || value > b){
            arr.splice(i, 1);
            i--;
        }
    } 
}
filterRange(arr, 1 , 4);
alert(arr);