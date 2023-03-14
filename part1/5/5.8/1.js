let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();

//Добавляем в прочиатнные сообщения 2 сообщения
readMessages.add(messages[0]);
readMessages.add(messages[1]);

alert(`Было ли прочитано сообщение ${messages[0]?.text} от ${messages[0]?.from}? ${readMessages.has(messages[0])}`); // true

messages.shift(); 