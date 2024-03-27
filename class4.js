

const name= prompt('Enter yout first name')
const gender= prompt('Enter your gender')
const age= prompt('Enter your age')

if(gender==="male"){
    if(age < 18 || age >40){
        alert('Get out for male')
    }

    else if(age >= 18 || age <= 40){
        alert('Welcome for male')
    }
}

else if(gender==='female'){
    if(age < 17 || age >39){
        alert('Get out for female')
    }

    else if(age >= 17 || age <= 39){
        alert('Welcome for female')
    }
}

else{
    alert('Error')
}