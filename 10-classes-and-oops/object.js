function multipleBy5 (num){
    return num*5
}

multipleBy5.power = 2

// function is also object
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function creatUser(username, score){
    this.username=username
    this.score=score
}

creatUser.prototype.increment = function(){
    this.score++
}

creatUser.prototype.printme = function(){
    console.log(`price is ${this.score}`);               // => this mean es ka 
    
}

const chai = new creatUser("chai" , 25)
const tea = creatUser("tea", 250)

chai.printme()


