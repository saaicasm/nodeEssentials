const express = require('express');
const router = express.Router();


let users = [
    {
        firstName: "John",
        lastName: "wick",
        email:"johnwick@gamil.com",
        DOB:"22-01-1990",
    },
    {
        firstName: "John",
        lastName: "smith",
        email:"johnsmith@gamil.com",
        DOB:"21-07-1983",
    },
    {
        firstName: "Joyal",
        lastName: "white",
        email:"joyalwhite@gamil.com",
        DOB:"21-03-1989",
    }
];

// GET request: Retrieve all users
// Define a route handler for GET requests to the root path "/"
router.get("/",(req,res)=>{
    // Send a JSON response containing the users array, formatted with an indentation of 4 spaces for readability
    res.send(JSON.stringify({users}, null, 4));
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email",(req,res)=>{
  // Copy the code here
    let email = req.params.email;
    console.log(email);
    let filt_usr = users.filter((usr) => usr.email == email);
    res.send(filt_usr);  
  
//   res.send(users.email)//This line is to be replaced with actual return value
});


// POST request: Create a new user
router.post("/",(req,res)=>{
    
    //  console.log(req.body.firstName);
     
    // Push a new user object into the users array based on query parameters from the request
    users.push({
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "email": req.body.email,
        "DOB": req.body.DOB
    });
    console.log(users);
    
    // Send a success message as the response, indicating the user has been added
    res.send("The user " + req.query.firstName + " has been added!");
});


// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
    const email = req.params.email;
    console.log(email);
    // console.log(users);
    
    const filteredUser = users.filter((user) => user.email == email);
    // const filteredUser = users.filter((user) ={user.email == email} );
    console.log(filteredUser.length);
    
    if(filteredUser.length > 0) {
        filter_user = filteredUser[0];

        filter_user.DOB = req.body.DOB;

        users = users.filter((user) => user.email !=email);
        users.push(filter_user);
        console.log(filter_user);
        

        res.send(`User with email ${email} is added `);
    }else{ 
        res.send('user not found')
    }




});


// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
    // Extract the email parameter from the request URL
    const email = req.params.email;
    // Filter the users array to exclude the user with the specified email
    users = users.filter((user) => user.email != email);
    // Send a success message as the response, indicating the user has been deleted
    res.send(`User with the email ${email} deleted.`);
});

module.exports=router;