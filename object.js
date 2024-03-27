
const myDetails={
    name: 'Injun Joe',
    age: 12,
    gender: 'male',
    DOB:'01/01/2001',
    bio: 'I am a firefighter',
}

console.log(myDetails.name)
console.log(myDetails.gender)


const newDetails={
    name: prompt('Enter your fullname'),
    age: prompt('Enter your age'),
    gender: prompt('Specify your gender'),
}

console.log(`My name is ${newDetails.name}, I am ${newDetails.age} years old and I am a ${newDetails.gender} person`)