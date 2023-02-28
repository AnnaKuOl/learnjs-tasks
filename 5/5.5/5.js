let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
    return [...arr].sort();
}
let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)