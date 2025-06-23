 const obj = {
    js: "javaScript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
 }

 for (const key in obj) {
    // console.log(key);
    // console.log(obj[key]);
    // console.log(`${key} shortcut is for ${obj[key]}`);
    
 }

 const arr = ["py","java","js","rb"]

 for (const key in arr) {
  // console.log(arr[key]);
   
 }
// on map 
// map is not iterable
 const map = new Map()
map.set('IN', "india")
map.set('USA', "united states of america")
map.set('Fr', "france")
map.set('IN', "india")                       // only unique values hold

for (const key in map) {
   console.log(key);
   
        
    }
