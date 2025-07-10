const promiseOne = new Promise(function(resolve,reject){

    // Do an asyn task
    //DB calls ,cryptography, network
    setTimeout(function(){
        console.log('async task is compleated');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
    
})


new Promise(function(resolve,reject){
     setTimeout(function(){
        console.log("Asnk task 2");
        resolve()
     },1000)

}).then(function(){
    console.log("Async 2 resolve");
    
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "chai" , email: "navneet.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);

})

const promisefour = new Promise (function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "navneet", passward: "123"})
        }else{
            reject ('ERROR: something went wrong')
        }
    },1000)
})

promisefour
.then((user) => {
console.log(user);
return user.username
})
.then((username) => {
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
    
}).finally(()=>{
    console.log("This promise is either resolve or rejected");
    
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "javaScript", passward: "123"})
        }else{
            reject('ERROR: js went wrong')
        }
    },1000)
})

async function consumePromiseFive() {
    try {
        const responce = await promiseFive
        console.log(responce);
        
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive()

// first way
// async function getalluser(){
//   try {
//     const responce = await fetch('https://jsonplaceholder.typicode.com/posts/1')

//     const data = await responce.json()   //=> esko bhi avait krna pdega
//     console.log(data);
    
//   } catch (error) {
//     console.log("E:", error);
    
//   }
// }

// getalluser()

// second way
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((responce)=>{
    return responce.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=> console.log(error)
)