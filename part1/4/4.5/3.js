"use strict";

    function Accumulator(startingValue) {
        this.value = startingValue;
        this.read = function(){
            let newNum = +prompt("Введите число", 0);
            this.value += newNum;
        }
    }

