
// if

const islogedIn = true
const temprature = 41

if (temprature === 41) {
    console.log("less than 50")
    
} else(
    console.log("temprature is greter 50")
    
)

// < ,>, >= ,<= ,!=, == , ===, !==,

// const score = 200

// if (score>100) {
//     const power = "fly"                 // => agar var use krege to scope ke4 bahar print ho jayga
//     console.log(`user power ${power}`);
    
// }

//  console.log(`user power ${power}`); // => scope ke bahar execute nhi hoga

// const balence =10000

// if(balence >500) console.log("test");       // emplisit scope man lena ki scope h one line execution

// nasted if else

const balence = 1000

if (balence <500) {
    console.log("less than 500");
    
}else if (balence <750) {
    console.log("less than 750");
    
}else if (balence <900) {
    console.log("less than 900");
    
}else{
    console.log("less than 1200");
    
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggesInFromEmail = true

if (userLoggedIn && debitCard) {              // => both condition must be true
    console.log("allow to bay a courses");
    
}

if (loggedInFromGoogle || loggesInFromEmail) {   // => multiple conditiuon checker one should be true
    console.log("user logged in ");  
    
}