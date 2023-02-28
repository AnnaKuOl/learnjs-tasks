function Calculator(){
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    };
    this.calculate = function(str) {
        let values = str.split(" ");
        let a = + values[0];
        let operand = values[1];
        let b = + values[2];

        if(!this.methods[operand] || isNaN(a) || isNaN(b)){
            return alert("Такая операция невозможна");
        }
        return this.methods[operand](a, b);
    };
    this.addMethod = function(name, func){
        this.methods[name] = func;
    };
}
let calc = new Calculator;

alert( calc.calculate("3 + 7") );
calc.addMethod("*", (a, b) => a * b);
alert( calc.calculate("3 * 7") );