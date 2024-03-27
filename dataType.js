// BASIC DATA TYPES IN JS
// 1. String(characters)
// 2. Number(integers)
// 3. Boolean(true or false)
// 4.Array()
// 5. Objects

// Index shows the position of characters starting with zero eg the index of i in industries is 4, (space is also a character)

const characters='The industries are a very complex ones and should be treated with care'

console.log(characters.length)
console.log(characters[8])
console.log(characters.slice(0,-3)) 

console.log(characters.substring(5,13))

console.log(characters.substr(5,13))

let fullName= prompt('Enter your Fullname'). toLowerCase()
let bio= prompt('Enter your bio'). toUpperCase()

console.log(fullName, bio)
