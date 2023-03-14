
    function formatDate(date){
        let difference = new Date - date;
        if(difference < 1000){
            return "прямо сейчас";
        }
        let sec = Math.floor(difference / 1000);
        if (sec < 60){
            return `${sec} сек. назад`;
        }
        let minute = Math.floor(sec / 60);
        if (minute < 60){
            return `${minute} мин. назад`;
        }else{
            let d = date;
            d = [
                '0' + d.getDate(),
                '0' + (d.getMonth() + 1),
                '' + d.getFullYear(),
                '0' + d.getHours(),
                '0' + d.getMinutes()
                ].map(el => el.slice(-2))
            return `${d.slice(0, 3).join(".")} ${d.slice(3).join(":")}`
        }
    }
    alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
    alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
    alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
    alert( formatDate(new Date(new Date - 86400 * 1000)) );
