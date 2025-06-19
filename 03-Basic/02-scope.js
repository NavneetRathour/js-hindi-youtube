
// let a = 10;       // => global scope
var c = 50;
let a= 300;

if (true) {
    let a = 10;
    const b = 39;       // => block scope
    var c = 40;
    console.log("INNER",a);
    
}

 console.log("outer",a);
// console.log(b);
console.log(c);

function one (){
    const username = "Navneet"

    function two(){
        const website="youtube"
        console.log(username);    //=> chaild function parent ke variable ko acsses kr lete h
        
    }
   // console.log(website);       // parent chaild ke variable ko acsses nhi kr pate 
    two()
    
}
one()     // pahle one axequt hoga fir two

if (true) {
    
    const username = "Navneet kumar"

    if (username === "Navneet kumar" ) {
        
        const website = " youtube"
        console.log(username + website);
        
    }
    // console.log(website);     // chaild jo parent me acssess nhi  hota h
     
}
//console.log(username);  // if ke bahar excuet nhi hota h

//++++++++++++++++++++++++++++interasting++++++++++++++++++++++++++


console.log(addone(5));   // ye to run ho jayega


function addone(num){    
    return num+1 
}

// console.log(addtwo(3)); 

const addtwo = function (num){  // pr es function variable me host kiya h to function ke uper acsses nhi hoga
    return num+3
}


