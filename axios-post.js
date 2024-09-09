// Import the axios library.

const axios = require('axios');

// Data to be sent in the POST request. This is a JavaScript object containing the user information.
const data = {
  name: 'John Doe',
  age: 30
};

// Using the axios.post method to make a POST request to the specified URL with the data object.
axios.post('https://api.example.com/users', data)
  
// If the request is successful, the `.then` block is executed.
  .then(response => {
    
// The response object contains the data returned from the server.
// We log a message along with the `data` property of the response to the console.
    
    console.log('User created:', response.data);
  })
  // If there is an error during the request, the `.catch` block is executed.
  
    .catch(error => {
    // We log an error message to the console along with the error object.
    // This helps in debugging and understanding what went wrong with the request.
    
    console.error('Error creating user:', error);
  });

  // Asynchronous function to post data to an API
async function postData() {
    try {
      // Await the response from the Axios POST request
      let response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo', // The title of the post
        body: 'bar',  // The body/content of the post
        userId: 1     // The user ID associated with the post
      });
      // Log the response data to the console
      console.log(response.data); 
    } catch (error) {
      // If there is an error, log the error message to the console
      console.error('Error posting data:', error); 
    }
  }
  // Call the async function to execute the request