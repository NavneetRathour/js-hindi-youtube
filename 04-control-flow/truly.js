
//const userEmail = "n@navneet" 
//const userEmail = []
const userEmail = ""

if (userEmail) {
    console.log("got user Email");
    
} else{
    console.log("don't have user Email");
    
}

//falsy value

// => false , 0 ,-0 , bigint 0n, "", null, undefined,NaN

// truthy
// => "0", 'false', " " , [], {}, function(){} 

// how to check 
const user = "welcome"
 if (user.length) {
    console.log("array is empty");
    
 }

 // object ke uper

 const empobj={}

 if (Object.keys(empobj).length===0) {
    console.log("object is empty");
    
 }

 // Nullish Coaleshing Operator (??); null undefined

 let val1;
 //val1 = 5 ?? 10
 //val1 = null ?? 10
 val1 = undefined ?? 15
val1 = null ?? 10 ?? 15
 

 console.log(val1);
 
 // ternary operator
 const teyprice = 100

 teyprice >= 80 ? console.log("less than 80"): console.log("more tthan 80");
 
 