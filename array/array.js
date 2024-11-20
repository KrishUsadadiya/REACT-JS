//PUSH
let fruits = ["apple", "banana"];
fruits.push("orange");
console.log(fruits);

//pop
let num = [1,2,3]
num.pop()
console.log(num)

//shift
let fruts = ["mango", "apple", "mango"]
fruts.shift()
console.log(fruts)

//unshift
let Name = ["arush", "krishna", "jay"]
Name.unshift("krish")
console.log(Name)

//splice
let phone = ["apple", "samsung", "motorola"]
phone.splice(2,2, "vivo")
console.log(phone)

//map
let numbers = [1, 2, 3, 4]
let squared = numbers.map(num => num * num)
console.log(squared)

//fillter
let Numbers = [1, 2, 3, 4, 5]
let evenNumbers = Numbers.filter(num => num % 2 === 0)
console.log(evenNumbers)

//sort
let inline = [3, 1, 4, 2];
inline.sort()
console.log(inline)

//concat
let arr1 = [1, 2]
let arr2 = [3, 4]
let merged = arr1.concat(arr2)
console.log(merged)

//reverse
let reverse = [1, 2, 3, 4]
reverse.reverse()
console.log(reverse)

//reduce
let reduce = [1, 2, 3, 4]
let sum = reduce.reduce((total, ele) => total += ele , 0)
console.log(sum)

//includes
let cuntry = ["India", "japan", "shrilanka"]
console.log(cuntry.includes("India")) 
console.log(cuntry.includes("rusia"))