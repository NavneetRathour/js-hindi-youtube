
//["", "", "" ]
// [{},{},{}]

const arr  = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}

const greetings =  "hello world"

for (const greetg of  greetings) {
    
    console.log(`Each charactor is ${greetg}`);
    
}
// map

const map = new Map()
map.set('IN', "india")
map.set('USA', "united states of america")
map.set('Fr', "france")
map.set('IN', "india")                       // only unique values hold

console.log(map);

    for (const key of map) {
        console.log(key);
        
    }

    for (const [key,values] of map) {
        console.log(key, '=>' ,values);
        
    }

    // const myobj = {
    //     game1:  "spiderman",
    //     game2: "ironman"

    // }                         // object pr for of loop nhi lagega

    // for (const game of myobj) {
    //     console.log(game);
        
    // }