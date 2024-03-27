// i go to an airport i was ask for my name and my passcode

// if the passcode length is > 6 or less 4 that means passcode is not correct
// and u will not be permitted to join the flight

// if the passcode length is less than or  equal to 6 or greater than or equal 4 that means
// your passcode is correct and u will be permitted to join the flight


const name= prompt('Enter your name')
const passCode= prompt("Enter your passcode")

if(passCode.length >6 || passCode.length <4 ){
    alert(`${name}, Please put in your correct passcode`)
}

else if(passCode.length <= 6 || passCode.length >= 4){
    alert(`${name}, Welcome Aboard`)
}

