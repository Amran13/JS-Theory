// Clone an array
const cloneArray = (arr) => {
    const coppiedArray = []
    for(let i = 0; i < arr.length; i++){
        coppiedArray.push(arr[i])
    }
    return [...coppiedArray, [...coppiedArray]] 
}

// Hitting the jackpot
function testJackpot(arr){
    if(!Array.isArray(arr)){
        console.log('Array is required as argument')
    }else{
        if(arr.length !==4){
        console.log('Error(element is not 4)')
        }else{
            for(i=0; i<arr.length; i++){
            }
        }
    }
    
}
console.log(!Array.isArray([1, , 1]))