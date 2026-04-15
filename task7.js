//Task 1: Order System (setTimeout)
//Simulate a food order system
// Requirement:
// Print: "Order placed"
// After 2 sec → "Preparing food"
// After 4 sec → "Food ready"
// After 5 sec → "Delivered"
// Use only setTimeout


console.log("Order placed avadi");

setTimeout(() => {
    console.log("Preparing food priyani 2sec");
}, 2000);

setTimeout(() => {
    console.log("Food ready 4sec");
}, 4000);

setTimeout(() => {
    console.log("Delivered in 5sec");
}, 5000);


// Task 2: Digital Clock (setInterval)
// Build a live clock
// Requirement:
// Print current time every second
// Stop after 10 seconds
//  Use:
// setInterval
// clearInterval

const clockId = setInterval(() => {
    const currentTime = new Date().toLocaleTimeString();
    console.log(currentTime);
}, 1000);

setTimeout(() => {
    clearInterval(clockId);
    console.log("Clock stopped");
}, 10000);


// Intermediate (Callbacks + Async Thinking)
// Task 3: Callback Hell Simulation
// Create 3 functions:
// loginUser
// getUserData
// getUserPosts
// Flow:
// login → getUserData → getUserPosts
//  Each should use setTimeout

function loginUser(callback) {
    setTimeout(() => {
        console.log("User Logged In");
        callback();
    }, 1000);
}

function getUserData(callback) {
    setTimeout(() => {
        console.log("User Data Fetched");
        callback();
    }, 1000);
}

function getUserPosts(callback) {
    setTimeout(() => {
        console.log("User Posts Fetched");
    }, 1000);
}

// Callback Hell (nested execution)
loginUser(() => {
    getUserData(() => {
        getUserPosts();
    });
});


// Promises (Real API Logic)
// Task 4: Fake API Promise
// Create your own Promise function
// function getProducts() {
//   // return promise
// }
// Conditions:
// After 2 sec → resolve with product array
// If error → reject with "API Failed"
// Use:
// .then()
// .catch()
// .finally()


function getProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true; // change to false to test error

            if (success) {
                resolve([
                    { name: "Shirt", price: 500 },
                    { name: "Shoes", price: 1500 },
                    { name: "Watch", price: 2000 }
                ]);
            } else {
                reject("API Failed");
            }
        }, 2000);
    });
}

// Using the Promise
getProducts()
    .then((products) => {
        console.log("Products:", products);
    })
    .catch((error) => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Request Completed");
    });