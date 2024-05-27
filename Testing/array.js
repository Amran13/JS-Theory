const fruits = ['Mango', 'Jack Fruits', 'Lichi']

if(fruits.indexOf('Banana') === -1){
   fruits.push('Banana')
   console.log('Banana is not there! added baanana') 
}
else{
    console.log('Banana is already there')
}

/**
 * Falsy Value
 * 1. 0
 * 2. false
 * 3. undefined
 * 4. null
 * 5. ''
 * 6. NaN
 */


/***
 * push - return the new array length // Mutable
 * pop - return the popped element only // Mutable
 * unshift - return the new array length // Mutable
 * shift - return the shifted element // Mutable
 * indexOf - return the index number of that element, if it doesn't exist the element, it will return -1.
 */