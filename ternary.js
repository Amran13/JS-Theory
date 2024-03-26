// https://www.freecodecamp.org/news/javascript-ternary-operator-explained/

//  conditionalExpression ? truthyValue : falsyValue
// We have 6 types of falsy value [null, undefined, NaN, '', 0, false]
// By default every function return something. If there is not specific any return then it return 'undefined';

function canAccessPlatform(inst) {
    const shouldAccess = inst === 'cuet' ? 'give access' : 'deny';
    return shouldAccess;
}


function checkNumber(num){
    const result = num > 0 
    ? 'Postive' 
    : num === 0 
        ? 'Zero' 
        : 'Negative';
}


function getDrink(age){
    return age >= 21
        ? 'Drink a Cocktail'
        : age >= 18
        ? 'Get a beer'
        : age >= 16
        ? 'Get a softdring'
        : 'You are too young to drink'
}

//hello world

function decideActivity(weather){
    const activity = weather === 'sunny' ? 'go out' : 'go in';
    return activity;
}

const res = decideActivity('sunny');
console.log(res)
