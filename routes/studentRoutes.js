const express = require("express");
const router = express.Router();

const student = require("../models/student");


router.get("/", (req, res) => {
res.render("application-form.pug")
});

router.post("/", async (req,res)=>{
  try {
    const newStudent = student(req.body)
    await newStudent.save()
    res.redirect("/")
  } catch (error) {
   res.status(400).send("unable to register a student", error)
  }
})

module.exports = router;













// Explanation:
// router.get("/all-users", async (req, res) => { ... })
// This sets up a route that listens for GET requests to the /all-users URL.
// When a client sends a GET request to /all-users, this function will be executed.

// async (req, res)
// The route handler function is declared as async, allowing the use of await inside it. This is important for handling asynchronous operations like database queries.

// const allUsers = await Signup.find();
// Signup.find() is a Mongoose method that queries the Signup collection in the MongoDB database to retrieve all documents (users).
// The await keyword ensures that the code waits for the database query to complete before continuing, allowing for synchronous-like code flow in an asynchronous environment.

// res.render("all-users", { users: allUsers });
// After successfully retrieving the users from the database, the res.render() method is called to render the all-users view (which would be a .pug or other templating engine file).
// The users: allUsers part passes the array of user data (allUsers) to the view under the variable name users, allowing the view to dynamically display the user data.

// } catch (error) { ... }
// This catch block handles any errors that occur during the execution of the code inside the try block.
// If an error occurs, the server responds with a status code of 400 (Bad Request) and sends an error message back to the client with res.status(400).send("Unable to find users in your database", error);.
