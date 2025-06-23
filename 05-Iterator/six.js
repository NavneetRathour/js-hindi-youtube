// const coding = ["java","html","python","c++","ruby"]

// const values=    coding.forEach( (item) => {
//      console.log(item);
//      return item                             // => for Each value return nhi karta h
// })

// console.log(values);

// filter
const num = [2,3,4,5,6,7,8,9,]

const newnum=  num.filter( (num) => num>4)   // diretc acsses without open scope
//console.log(newnum);

const newnums= num.filter( (num) => {     // scope open krege to return krna padega
   return num > 4

})
//console.log(newnums);


const nums = [2,3,4,5,6,7,8,9,]      // if lgakr forEach pr kam kr sakte h
const arr = []
nums.forEach( (nums) => {
    if (nums >4) {
        arr.push(nums)
    }
})

// console.log(arr);


const book = [
    {title: 'Book 1', gener: 'Fiction', publish: '1981', Edition: 2004},
    {title: 'Book 2', gener: 'Non Fiction', publish: '1981', Edition: 2005},
    {title: 'Book 3', gener: 'History', publish: '1981', Edition: 2007},
    {title: 'Book 4', gener: 'Polity', publish: '1981', Edition: 2008},
    {title: 'Book 5', gener: 'sicence', publish: '1970', Edition: 2005},
    {title: 'Book 6', gener: 'History', publish: '2000', Edition: 2004},
    {title: 'Book 7', gener: 'english', publish: '1985', Edition: 2007},
    {title: 'Book 8', gener: 'Fiction', publish: '1981', Edition: 2001},
    {title: 'Book 9', gener: 'Fiction', publish: '2003', Edition: 2007},
    {title: 'Book 10', gener: 'NonFiction', publish: '2004', Edition: 2009},
    {title: 'Book 11', gener: 'sicence', publish: '1999', Edition: 2028},
    {title: 'Book 12', gener: 'History', publish: '1981', Edition: 2004},
    {title: 'Book 13', gener: 'Fiction', publish: '1870', Edition: 2004},
    {title: 'Book 14', gener: 'english', publish: '1989', Edition: 2004},
    {title: 'Book 15', gener: 'Non Fiction', publish: '2013', Edition: 2012},
    {title: 'Book 16', gener: 'Fiction', publish: '1981', Edition: 2004},
    {title: 'Book 17', gener: 'polity', publish: '1945', Edition: 2020},
    {title: 'Book 18', gener: 'Fiction', publish: '1981', Edition: 2004},
    

]

const userbook= book.filter( (bk) => bk.gener==='History')
// console.log(userbook);

const user = book.filter( (bk)=> { 
    return bk.publish  >= 1985 && bk.gener === 'History'
})
console.log(user);
