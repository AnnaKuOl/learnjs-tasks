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
function printList(list){
    if(list.next) {
        alert (list.value);
        printList(list.next)
    }else{
        alert(list.value);
    }
}

// function printList(list){
//     let obj = list;
//     for (; obj != null; ){
//         alert( obj.value);
//         obj = obj.next
//     }
// }


printList(list);