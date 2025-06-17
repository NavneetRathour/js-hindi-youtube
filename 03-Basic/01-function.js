// function myname () {
// console.log("N");
// console.log("a");
// console.log("v");
// console.log("n");
// console.log("e");
// console.log("e");
// console.log("t");
// }

//myname  // => reference of function
//myname () // => exeqution of function

// function addTwoNumbers (num1 , num2){    // => pranthesees ke ander parameter h 
//     console.log(num1+num2);
    
//}
// addTwoNumbers(3,4)  // paranthisis ke ander ki value argument hoti ha
// addTwoNumbers(3,"2")
addTwoNumbers(3,"a")


function addTwoNumbers (num1 , num2){    // => pranthesees ke ander parameter h 
    // console.log(num1+num2);          // not goot

    // let result = num1+num2
    // return result              // good

    return num1+num2          // very good memory sever manner
}

const result =addTwoNumbers(2,4);
// console.log( "result",result);

function loginUser(username ="same"){    //=> same is minimom value jab kuch nhi print krana h
    if(username===undefined)
    {
        console.log("please Enter your name");
        return                                  // => return ke neeche ka luch bhi print nhi hota h
        
    }
    return `${username} just login`
}

//loginUser("navneet");  // exequet nhi hoga

// console.log(loginUser("navneet"))   // => value lene ka tareeka
// console.log(loginUser());
//console.log(loginUser("Navneet kumar"));   // value of same will be override 

// function calculatePrice(...numb){      // spred operator maltipale value ko vapas karta h
//     return numb
// }

//  console.log(calculatePrice(100,200,342,560));
  
const user={
      name: "kunal",
      price: 999
}

 function handelObj (anyobject){
        console.log(`User name is ${anyobject.name} and price is${anyobject. price}`);
        
}
//handelObj(user)
handelObj({             // => direct object pass kr sakte h
    name:"kk",
    price: 333
})

// same consept on array

const myArray= [200,3000,500,7000]
function returnArray(getArray){
     return getArray[2]        //  => indexung of array
}

// console.log(returnArray(myArray));
console.log(returnArray([200,9000,400]));   // direct array pass kr dege    