const coding = ["java","html","python","c++","ruby"]
coding.forEach(function(item){                          // => callback function
                                                        //
    // console.log(item);
    
})

// in arrow function

coding.forEach((val)=>{
//    console.log(val);
   
})

//  function printme  (item){       // direct function ko bhi print kra scte ha  onley reference dekar
//   console.log(item);
  
// }
// coding.forEach(printme)        // printme reference only

// coding.forEach((item, index, arr)=>{     // multiple parameter print kr sacte h
//     console.log(item,index,arr);
    
// })

const mycode = [      // => arr ke ander object
    {
        languagename: "java",
        filename: "java file"
    },
     {
        languagename: "python",
        filename: "python file"
    },
     {
        languagename: "javascript",
        filename: "javaScript file"
    },
]                                     // => 

mycode.forEach((item)=>{
    console.log(item.languagename);    // => arr ke ander ke object ka acssess
    
})