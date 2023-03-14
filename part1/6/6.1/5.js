let list = {
    value: 1,
    next: {
        value: 2,
        next: {
        value: 3,
        next: {
            value: 4,
            next: null
        }
        }
    }
};

// function printList(list){
//     if(list.next) {
//         printList(list.next)
//     }
//     alert(list.value);
    
// }

function printList(list){
    let obj = list;
    let arr = [];
    for (; obj != null; ){
        arr.push(obj.value);
        obj = obj.next
    }
    for (let i = arr.length-1; i >= 0; i--){
        alert(arr[i]);
    }
}
printList(list);