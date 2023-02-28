let arr = ["a", "b"];
arr.push(function() {
    alert( this );
});

arr[2](); // a, b function() {...} - arr[2]-это добавленная функция, которая выводит this, а это в свою очечредь сам массив
