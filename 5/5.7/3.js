
    let map = new Map();

    map.set("name", "John");

    let keys = Array.from(map.keys());// добавили Array.from()
    console.log('keys: ', keys);

    // Error: keys.push is not a function
    // Ошибка: keys.push -- это не функция
    keys.push("more");

