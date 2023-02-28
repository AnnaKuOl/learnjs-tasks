
    let messages = [
        {text: "Hello", from: "John"},
        {text: "How goes?", from: "John"},
        {text: "See you soon", from: "Alice"}
    ];      
    let timeReadMessage = new WeakMap();      
    timeReadMessage.set(messages[0], new Date(2023, 1, 24));
