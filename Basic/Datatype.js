
// primitve

// 7 types => String, Number, Boolean, Null, Undefined, Symbol, BigInt

const  score= 100;
const scorevalue= 100.3;
 
const IsLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id =Symbol('123');
const another=Symbol('123')

console.log(id === another);

const biginteger= 3589789654217997n;

console.log(typeof biginteger);

// Reference (non primitive)
// Array Function,object

const array=["shaktimal", "krish","doga"];

let myobj={
    name: "Navneet Kumar",
    age: 22,
}

// console.log(typeof array);
// console.log(typeof myobj);
// console.log(typeof another);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (non-Primiyive)

let myname="navneet";

let anothername=myname;
 anothername="kunal";

console.log(myname);
console.log(anothername);

let userOne={
    email: "kunal@dotcom",
    upi: "userib@u"

}

let usertwo=userOne;
usertwo.email="mohit@.com"

console.log(userOne);
console.log(usertwo);

