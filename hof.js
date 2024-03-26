// Higer Order Function
function calculationOnCircle(arr, operation){
    const result = []
    for(let i=0; i<arr.length; i++){
        result.push(operation(arr[i]))
    }
    return result;
}

// Callback Functions
const diameter = radius => 2 * radius
const area = radius => (Math.PI * radius ** 2).toFixed(2)
const cercumference = radius => (2 * Math.PI * radius).toFixed(2)

const arrayOfNumbers = [1, 2, 3, 4, 5]
const resultOfDiameter = calculationOnCircle(arrayOfNumbers, diameter)
const resultOfArea = calculationOnCircle(arrayOfNumbers, area)
const resultOfCercumference = calculationOnCircle(arrayOfNumbers, cercumference)

console.log('Diameter : ', resultOfDiameter)
console.log('Area :', resultOfArea)
console.log('Cercumference :', resultOfCercumference)
