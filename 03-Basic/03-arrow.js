const user ={
    username : "Navneet kumar",
    price : 999,


    welcomemassege (){
        console.log(`${this.username} , welcome to this webpage`);
        console.log(this);                                         //=> this keyword carrent variable ki value ki bat karta h
        
        
    }
}

// user.welcomemassege()
// user.username="same"     // name change hone pr usi usi ke liye function chalu kr dega
// user.welcomemassege()
//console.log(this);        // => it give us empty 

// function chai (){
//     let username = "navneet"
//     console.log(this.username);  // function ke ander this nhi chalrha h
    
// }
//chai()

// const chai = function (){
//     let username = "navneet"
//     console.log(this.username); // -=> es trike se bhi ye andefine hi rhega
// }
// chai()

// const chai =  () => {            //=> arofunction me bhi nhi chalta h
//     let username = "navneet"
//     console.log(this.username);
// }
// chai()

//+++++++++++++++++++++AROWFUNCTION+++++++++++++++++++++++++
//  {   // basicc of arrowfunction
//     return num1+num2               // => expliser when you write return keyword
// }

// addtwo(3,5)
// console.log(addtwo(2,5));

//const addtwo = (num1, num2) => num1+num2
//const addtwo = (num1, num2) => (num1+num2)   // => emplisetli when you not write  return keyword 

const addtwo = (num1, num2) => ({username: "navneet"}) // => jab object dege to parentheses lagane padege

console.log(addtwo(3,5))