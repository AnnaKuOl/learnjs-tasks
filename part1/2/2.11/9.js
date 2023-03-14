    let value = prompt("Кто там?", "");
    if(!value){
        alert("Отменено")
    } else if (value === "Админ") {
        let password = prompt("Пароль?", "");
        if(!password){
            alert("Отменено")
        } else if(password === "Я Главный"){
            alert("Здравствуйте!")
        } else { alert("Неверный пароль")}
    } else {
        alert("Я вас не знаю")
    }
