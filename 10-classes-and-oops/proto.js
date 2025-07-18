// let myname = "Navneet"
// let mychai = "chai   "

// console.log(myname.trim().length);

// console.log(myname.length);

//console.log(myname.trueLength);


let myhero = ["thor","spiderman"]

let heroPower = {                    // object 
    thor: "hamer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.Navneet = function(){                    // => this mathod create for object
    console.log(`navneet is present in all object`);
    
}

Array.prototype.heyNavneet = function(){
    console.log(`Navneet says hello`);
    
}

// heroPower.Navneet()  // => agar object ke liye function banay to array string obj sabn pr chalega
// myhero.Navneet()

// myhero.heyNavneet()       // keval array pr hi chalega
// heroPower.heyNavneet( )


// inheritance

const user = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable: false
}

const TASuppor4t = {
    makeassignment : `ja assignment`,
    fullTime : true,
    __proto__:TeachingSupport
}

Teacher.__proto__=user

// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotheruserName=  "ChaiAurCode   "
   
String.prototype.trueLength= function(){
    console.log(`${this}`)
    
    console.log(`TRUE LENGTH IS ${this.trim().length}`);
    
    
}

anotheruserName.trueLength()
"Navneet".trueLength()        // => true lenth function for all string