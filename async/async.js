const takeOrder = (customer, callback) => {
    console.log(`take order from ${customer}`)
    callback(customer, completedOrder);
}

const processOrder = (customer, callback) => {
    console.log(`processing order for customer 1`)
    setTimeout(() => {
        console.log(`cooking completed`)
        console.log(`order processed for customer 1`)
        callback(customer)
    }, 3000);

}

const completedOrder = customer => {
    console.log(`completed order form ${customer}`)
}

takeOrder('customer 1', processOrder)
takeOrder('customer 2', processOrder)
// const takeOrder = (customer, callback) => {
//     console.log(`take order from ${customer}`)
//     callback(customer);
// }

// const processOrder = (customer, callback) => {
//     console.log(`processing order for customer 1`)
//     setTimeout(() => {
//         console.log(`cooking completed`)
//         console.log(`order processed for customer 1`)
//         callback(customer)
//     }, 3000);

// }

// const completedOrder = customer => {
//     console.log(`completed order form ${customer}`)
// }



// takeOrder('customer 1', (customer) => {
//     processOrder(customer, (customer) => {
//         completedOrder(customer)
//     })
// } )

