
const name="Navneet kumar"
const repocode= 50;

console.log(name + repocode + "work");

console.log(`my name is ${name} rapocode is ${repocode} some thing another`); // imp

const gameName = new String('navneet-nk-com');

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const another = gameName.slice(-4,4)
console.log(another);

const newStringone="   welcome   ";
console.log(newStringone);
console.log(newStringone.trim());


const url ="https://navneet.com/navneet%20Rathour"

console.log(url.replace('%20','_'));
console.log(url.includes('sunder'));
console.log(url.includes('navneet'));
console.log(gameName.split('_'));  // => array form me 
