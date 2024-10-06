// map :-
let arr = ["vishnu", "shankar", "krishn", "ram", "hanuman"]
let newArr = arr.map((value) => {
    return value + " ji"
})

// filter:-
let name = ["Aaksh", "Ashu", "Soniya", "Mandeep", "Bhupendar"]
let newName = name.filter((value) => {
    return value.startsWith("A")
})

// ques-1 = Merging two arrays of data fetched from separate apis in a sibgle list 
const arr1 = ["deepanshu", "sagar", "sourav", "rohit"]
const arr2 = ["bhardwaj", "mathur", "gaur", "dalal"]
const newarr = [...arr1, ...arr2]
console.log(newarr)

// ques-2 = filtering an array of object to display items based on a search query
const products = [
    { name: "laptop", price: 50000 },
    { name: "mobile", price: 10000 },
    { name: "Bike",price: 350000 },
    { name: "scooty", price: 60000 },
    { name: "tv",  price: 40000 },
]

const newProducts = products.filter((products)=>{
    return products.price === 10000
})
console.log(newProducts)


// ques-3 = mapping over an array of user data to create a listof user cards 
const obj = [
    {name: "harsh",age:16},
    {name: "kartik",age:19},
    {name: "deepanshu",age:17}
]

const newobj = obj.map((obj)=>{
    return `<div><h5>${obj.name}</h5><h3>${obj.age}</h3></div>`
})
console.log(newobj)