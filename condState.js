

const firstExam= 10
const secondExam= 30
const thirdExam= 250

const userScore= firstExam + secondExam + thirdExam

if(userScore <= 50){
    console.log(`UserScore is: ${userScore} and you failed`)
}

else if(userScore>50 && userScore <=100){
    console.log(`User Score is:${userScore} and you passed`)
}

else if(userScore > 100 && userScore <=150){
    console.log(`User Score is:${userScore} and you did excellent`)
}

else{
    console.log(`Error`)
}