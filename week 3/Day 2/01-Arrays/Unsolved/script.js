// WRITE YOUR CODE HERE

var names = ["mohamed" , "ramy" , "alice"]

// 
console.log(names.length)

// this is logged manually 

console.log("Welcome to the class" , names[0])

console.log("Welcome to the class" , names[1])

console.log("Welcome to the class" , names[2])


// name changed in the arrays
names[0] = "ahmed"

console.log("Welcome to the class" , names[0])

if (names[0] === "ahmed") {
    console.log(names[0], "is in class");
    
}
