
const details=[
    'Bright', 12, 'Male', 'I am a programmer', false, [1,2,3,4,'I have 6 years work experience']
]

console.log(details[5][4].slice(7,14))
console.log(details.length)

const myDetails= [
    'Class One',
    ['no of students is : ', [1,2,3,]],
    'Class Two',
    ['10','my is positive :', false, true],
    'Class Three', ['and is', 'my negative :', false, true]
]

// no of students is 10
const var1= `${myDetails[1][0].slice(0,19)} ${myDetails[3][0]}` 
// console.log(myDetails[1][0].slice(0,19))
// console.log(myDetails[3][0])
console.log(var1)

// is positive : true
const var2= `${myDetails[3][1].slice(3)} ${myDetails[3][3]}`
console.log(var2)

// and is negative : false
const var3=`${myDetails[5][0]} ${myDetails[5][1].slice(3,13)} ${myDetails[5][2]}`
console.log(var3)



const fruits=['Mango','banana','orange','berry']
console.log(fruits)

console.log(fruits.pop()) 
// it removes the last element in an array

fruits.push(['strawberry','lime'])
console.log(fruits)

fruits[1]='pineapple'
console.log(fruits)