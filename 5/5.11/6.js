function getSecondsToday(){
    let date = new Date();
    return date.getSeconds() + date.getMinutes()*60 + date.getHours() * 60 *60;
}
alert(getSecondsToday());