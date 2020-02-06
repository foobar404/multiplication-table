const ALPHABET = "abcdefghijklmnopqrstuvwxyz".split("");
const VOWELS = "aeiou".split("");

Math.randint = function(...nums){
    const max = ((nums.length == 2) ? nums[1] : nums[0]) + 1;
    const min = (nums.length == 2) ? nums[0] : 0;
    return Math.floor(Math.random() * (max - min) ) + min;
}

Array.prototype.lastIndex = function(){this.valueOf().length-1;}
Array.prototype.last = function(){
    return this.valueOf()[this.valueOf().length-1];
}
Array.prototype.remove = function(index){
    this.valueOf().splice(index,1);
    return this.valueOf();
}

const print = (...messages)=>console.log(...messages);
const $ = (string) => document.querySelector(string);
const $$ = (string) => document.querySelectorAll(string);

