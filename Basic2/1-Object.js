
// object litrelse

const mysym=Symbol("key1")

const jsUser= {
    name: "Navneet",
    "full name": "navneet kumar",
    [mysym]: "mykey1",            // => this maaner of writing repsent symbol
    age : 22,
    location: "kanpur",
    Email: "navneet@.com",
    isLoggedIn: false,
    lastLoginDay: ["monday", "Saturday"]
}

console.log(jsUser.Email);
console.log(jsUser["Email"]);  // => right way to acssess
console.log(jsUser["full name"]);
console.log(typeof jsUser.mysym);
console.log(jsUser[mysym]);


jsUser.Email="Navneet@kumar.com"
//Object.freeze(jsUser);            // object freeze hone ke bad function nhi chalega
jsUser.Email="Navneet@kumar.commy"

console.log(jsUser.Email);
console.log(jsUser);


jsUser.greeting= function(){
    console.log("hello");
    
}

jsUser.greeting2= function(){
    console.log(`hello ${this["full name"]}`);
    
}

console.log(jsUser.greeting);  // refrence only  [Function anonymos]
console.log(jsUser.greeting());
console.log(jsUser.greeting2());

