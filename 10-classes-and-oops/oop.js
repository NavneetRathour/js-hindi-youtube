const user = {
     username: "Navneet kumar",
     logincount: 8,
     singedIn: true,

     getuserdetails: function() {
       // console.log("Got user details from database");
      //  console.log(`username: ${this.username}`);       //=> this use krege tbhi print krega 
      //  console.log(this);                         // -> corrent context yani pura object esko pata hota h
        
     }
     
}

// console.log(user.username);
// //console.log(user.getuserdetails());
// console.log(this);    // => empty hoga node invaronment me window me bahot methos print krega

//constructor

function User (username, loginCount, isLogedIn){
   this. username = username;         
    this.loginCount = loginCount;               // => this lgate ha tbhi pahle wala wriable hota h or dusra wala paramiter
    this.isLogedIn = isLogedIn;

    this.Greetings = function (){
        console.log(`Welcome ${this.username}`);
        
    }

    return this   // nhi likhege phir bhi chalega 
}

const UserOne = new  User ("Navneet", 13, true)
const UserTwo = new  User ("Chai or code", 13, true)     // agar new keyward mhi use krege to one or two ki valu ko override kr dega
// new amesha apko ek copy de deta h it's depend on how do you use it
console.log(UserOne.constructor);
//console.log(UserTwo);

// new
// 

