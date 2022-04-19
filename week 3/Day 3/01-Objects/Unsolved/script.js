//WRITE YOUR CODE BELOW


var customerOrder = {
    name: "cola",
    sugars: "3 spoons",
    isReady: true,    
};

console.log(customerOrder.name, customerOrder.sugars);

if (customerOrder.isReady) {
    console.log("Ready for pick-up")
} else {
    console.log("Still in order queue")
}