

// const firstNumber= Number(prompt(`Enter your First Number`))
// const arithOper= prompt(`Enter your arithmetic Operator`)
// const secondNumber= Number(prompt(`Enter your Second Number`))

// if(arithOper === '+'){
//     console.log(`${firstNumber + secondNumber}`)
// }

// else if(arithOper === '-'){
//     console.log(`${firstNumber - secondNumber}`)
// }

// else if(arithOper === '*'){
//     console.log(`${firstNumber * secondNumber}`)
// }

// else if(arithOper === '/'){
//     console.log(`${firstNumber / secondNumber}`)
// }

// else{
//     console.log('Syntax Error')
// }



// =====================================OR WE CAN USE SWITCH/CASE=========================================



const firstNumber= Number(prompt(`Enter your First Number`))
const secondNumber= Number(prompt(`Enter your Second Number`))

switch(prompt(`Enter your arithmetic Operator`)){

    case'+':
    console.log(`${firstNumber + secondNumber}`)
    break;

    case'-':
    console.log(`${firstNumber - secondNumber}`)
    break;

    case'*':
    console.log(`${firstNumber * secondNumber}`)
    break;

    case'/':
    console.log(`${firstNumber / secondNumber}`)
    break;

    default:
        console.log('Syntax Error')
}

// this is switch case doesnt seem to user friendly because u input the arithmetic operator last