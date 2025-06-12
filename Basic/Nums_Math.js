
const score = 400;

console.log(score);

const num= new Number(100)  // => clerification
console.log(num);

console.log(num.toString().length);
console.log(num.toFixed(1));

const othernum = 123.4567;
console.log(othernum.toPrecision(4));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(6.7));
// console.log(Math.min(2,3,4,6,8));
// console.log(Math.max(2,3,4,6,8));

console.log(Math.random());
//console.log((Math.random()*10)); => not for use
console.log((Math.random()*10)+1);

console.log(Math.floor(Math.random()*10)+1)

const min=10
const max= 20

console.log(Math.floor(Math.random()*(max-min+1))+min);
console.log(Math.floor(Math.random()*(max-min+1))+max);


