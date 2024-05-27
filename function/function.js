/**
 * There is three way to declare a function
 *  1. Function Declaration
 *  2. Function Expression
 *  3. Named Function Expression
 * 
 * */

//Function Declaration

funcDeclaration(5, 15) //Function Declaration is hoisted. So, I can call it before define it. But it's not the best practice. 

function funcDeclaration(num1, num2) {
    console.log(num1 + num2)
    funcDeclaration(num1, num2)
    return num1 + num2;
}


//Function Expression

funcExpression(10, 15) //This will not work, cz func. expression is not hoisted. 
const funcExpression = function(num1, num2){
    console.log(num1 + num2)
    
}


//Named Function Expression