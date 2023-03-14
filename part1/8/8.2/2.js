// let obj2 = new obj.constructor();//можем
function Animal(type){
    this.type= type;
}
let rabbit = new Animal('rabbit');
let whiteRabbit = new rabbit.constructor('white rabbit');
alert( whiteRabbit.type);
{
    // если свойство перезаписать, то ничего не произойдет
    function Animal(type){
        this.type= type;
    }
    Animal.prototype = {};
    let rabbit = new Animal('rabbit');
    let whiteRabbit = new rabbit.constructor('white rabbit');
    alert( whiteRabbit.type);
}