function getDateAgo(date, days){
    let newDate = new Date(date);
    console.log(newDate);
    newDate.setDate(newDate.getDate() - days);
    console.log(newDate);

    return newDate.getDate();
}
let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1