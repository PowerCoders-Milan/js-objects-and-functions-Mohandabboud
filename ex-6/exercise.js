// write your JS here
// remember to always test in the browser
// to see if everything works correctly

function greaterNum(firstNumber , secondNumber) {
   
    if (firstNumber > secondNumber) {
        return ( "The greater number of " + firstNumber +" and " + secondNumber +" is " + firstNumber + ".");
    }
    
    else if (firstNumber < secondNumber) {
        return ( "The greater number of " + firstNumber  +" and " + secondNumber +" is " + secondNumber + ".");
    }
    
    else {
        return ("The numbers are the same.");
    }
     
}

console.log(greaterNum(10,5));
console.log(greaterNum(15,20));
