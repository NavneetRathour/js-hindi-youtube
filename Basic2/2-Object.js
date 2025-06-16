
//const tinderUser= new Object() //  => singaltarn object

const tinderUser={}

tinderUser.name = "Navneet"
tinderUser.id = "1234"
tinderUser.isLoggedIn= false

//console.log(tinderUser);

const regularUser ={
    Email: "navneet@.com",
    fullName:{
        userFullNane:{
            firstname : "Navneet",
            lastname : "kumar"

        }

    }
}

// console.log(regularUser.fullName.userFullNane.firstname);  //=> ? fullName? for protection

const obj1 ={1:"a" ,2:"b"};
const obj4 ={5:"a" ,6:"b"}
const obj2 ={3:"a" ,4:"b"}

//const obj3 ={obj1,obj2}
//const obj3=Object.assign({}, obj1, obj2,obj4)   // => {} for egxect value ke liye
const obj3={...obj1 , ...obj2}  // => spred method best foor use
//console.log(obj3);

const user =[
    {
        id: 1,
    Email: "@wer"

    } ,
    {
        id: 1,
    Email: "@wer"

    } ,
     {
        id: 1,
    Email: "@wer"

    } ,

]

user[1].Email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));  // loop lgane ke liye
// console.log(Object.values(tinderUser)); 
// console.log(Object.entries(tinderUser)); 
   
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));
// console.log(tinderUser.hasOwnProperty("isLogged"));

const course = {
    coursename : "java Script",
    Price : 999,
    courseInstructor : "Hitesh"

}

const {Price : p}  = course  // => Distructor  name change price to p

//console.log(Price);
console.log(p);

// {
//     "name ": "hitesh",  //  => API formate
//     "feesh" : 999,
//    " teacher": "navneet"
// }

// array formate API     => json formator tools for api andustanding ke liye
                         // => random user me API
[
    {},
    {},
    {}
]

