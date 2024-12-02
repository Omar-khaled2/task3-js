var  x = 32243;
console.log(x+"  before reverse");

function reverseNumber(x) {
    return parseInt(x.toString().split('').reverse().join(''));
}

var x = 32243;
console.log(reverseNumber(x)); 
