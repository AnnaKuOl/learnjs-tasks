let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

    function aclean(arr){
        let map = new Map();
        for(let word of arr){
            let sortedWord = word.toLowerCase().split("").sort().join("");
            map.set(sortedWord, word)
        }
        return Array.from(map.values());
    }
    alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"  