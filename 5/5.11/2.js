function getWeekDay(date){
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()]
}
let date = new Date(2012, 0, 3);
alert( getWeekDay(date) ); 