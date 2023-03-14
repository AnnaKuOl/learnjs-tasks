
function makeCounter() {
    let count = 0;
    function counter() {
        return count++;
    };
    counter.decrease = () => count--;
    counter.set = (value) => count = value;
    return counter;
}