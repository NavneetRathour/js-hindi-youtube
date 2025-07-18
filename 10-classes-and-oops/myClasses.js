// ES6

class user{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }

    encrptPassword (){ 

    return `${this.password}abc`
}

changeUserame(){
    return`${this.username.toUpperCase()}`
}

}
const chai = new user("chai" , "@123.com","123")