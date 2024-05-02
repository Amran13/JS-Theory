const greetName = (name) => `Hi! ${name} `;


function myGreetings(callback, greetings, name){
  const greetValue = callback(name)
  return (`${greetings} ${greetValue} `)
}


// const resOfmyGreeting =  myGreetings(greetName, 'Good Morning', 'David')
// console.log('res of myGreeting : ', resOfmyGreeting)

function multiply(x){
  return (y) => {
    return () => {
      return x * y * 2
    }
  }
}

const resOfMultiply1 = multiply(5)
const resOfMultiply2 = multiply(5)

// console.log(resOfMultiply1(2)())

// console.log(resOfMultiply2(5)())

function myCallBackFunc(){
  console.log(`I am a call back func`)
}

function myHigherOrderFunc(callBack){
  console.log(`I am a higher order func`)
  callBack()
}

myHigherOrderFunc(myCallBackFunc)