const button = document.querySelectorAll('.button')
//console.log(button);
 const body = document.querySelector("body")

 button.forEach(function(button) {
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        
    })
 })