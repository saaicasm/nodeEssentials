// Creating a new Promise object and assigning it to the variable myPromise
const myPromise = new Promise((resolve, reject) => {

    // Simulating a condition with a boolean variable 'success'
    let success = true; 
  
    // If the condition is true, call resolve to mark the promise as fulfilled
    if (success) { 
      resolve("The operation was successful!");
    } else { 
      // If the condition is false, call reject to mark the promise as rejected
      reject("The operation failed!");
    } 
  });

  
  // Execute the promise and handle the fulfilled and rejected states
myPromise
// Handle the resolved state of the promise
.then((message) => { 
  // This block will execute if the promise is resolved
  console.log(message); // "The operation was successful!"
}) 

// Handle the rejected state of the promise
.catch((error) => { 
  // This block will execute if the promise is rejected
  console.error(error); // "The operation failed!"
});