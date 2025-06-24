
const mynum = [1 ,2,3,]

// const mytotal = mynum.reduce( function (acc, currvalue){
//     console.log(`acc ${acc} currvalue ${currvalue}`);
    
//     return acc + currvalue
// } ,0 )
//console.log(mytotal);

// arro function
const mytotal = mynum.reduce( (acc , curr) => acc+curr , 0)
console.log(mytotal);

const shopingcat = [
    {
        itemname : "mobile dew course",
        price : 12999
    },

     {
        itemname : "php course",
        price : 1500
    },

    {
        itemname : "java course",
        price : 1299
    },

     {
        itemname : "py course",
        price : 1999
    },
]

 const pricetopy=   shopingcat.reduce( (acc, item) => acc+item.price,0 )

 console.log(pricetopy);
 