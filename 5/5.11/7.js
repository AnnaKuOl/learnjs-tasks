function getSecondsToTomorrow() {
    let date = new Date();
    return 24*60*60 - (date.getSeconds() + date.getMinutes()*60 + date.getHours() * 60 *60);
}
alert(getSecondsToTomorrow())