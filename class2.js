

// const userName= prompt('Eneter yor username')
// const welCome= prompt('Enter your welcome message')
// function result(userName, welCome){
//     console.log(`${userName} ${welCome}`)
// }


const newFunc=(userName, welCome)=>{
    const result=`${userName} ${welCome}`
    return result
}

// console.log(
//     newFunc(prompt('Enter your username'), prompt('Enter your message'))
//     )


const myDetails = (fName, lName, age)=>{
    return[fName, lName, age]
}

const myNewDetails = myDetails(prompt('Enter your first name'), prompt('Enter your last name'), prompt('Enter your age'))

const processDetails = (message1, message2, message3)=>{
    return `${message1} ${myNewDetails[0]} ${myNewDetails[1]} ${message2} ${myNewDetails[2]} ${message3}`
}

console.log(processDetails('My name is:', 'I am', 'years old'))