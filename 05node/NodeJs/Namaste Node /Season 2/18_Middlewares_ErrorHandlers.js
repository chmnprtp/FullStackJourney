/*
const express = require("express");
const app = express();

// Route middleware with three handlers for "/user"
app.use("/user", 
  (req, res, next) => {
    // Route Handler 1
    console.log("Handling the route /user");

    // If you uncomment the line below, it will end the response here,
    // and the next handler will NOT be executed.
    // res.send("Route Handler 1");

    // NOTE: We should not call both res.send() and next() together.
    // If res.send() is called, response ends — calling next() after that causes an error.

    next(); // Pass control to the next handler if no response is sent

    // ⚠️ Don't call res.end or res.send here after next()
    // res.end("2nd Response");
  },

  (req, res, next) => {
    // Route Handler 2
    console.log("Handling the route /user - handler 2");

    // This handler will only run if the first one calls next()
    // res.send("Route Handler 2");

    next(); // Pass control to next handler
  },

  (req, res, next) => {
    // Route Handler 3
    console.log("Handling the route /user - handler 3");

    // No response sent here either
    next(); // (Optional here unless there are more handlers)
  }
);

// Start the server
app.listen(7777, () => {
  console.log("Server is running on port 7777");
});

*/

//--------------------------------------------------------------------
// Note:
// You can also pass an array of middleware functions to app.use(), like this:
// app.use('/user', [
//   (req, res, next) => { /* handler 1 */ next(); },
//   (req, res, next) => { /* handler 2 */ next(); },
//   (req, res, next) => { /* handler 3 */ next(); }
// ]);
//--------------------------------------------------------------------

/*
const express = require("express");
const app = express();

// Route middleware with multiple handlers for "/user"
app.use("/user", 
  (req, res, next) => {
    // Route Handler 1
    console.log("Handling the route /user - Handler 1");
    next(); // Pass control to the next matching handler
  }
);

// We can also register another handler for the same route separately
app.use("/user", (req, res) => {
  // Route Handler 2
  console.log("Handling the route /user - Handler 2");
  res.send("Second route handler");
});

// Start the server
app.listen(7777, () => {
  console.log("Server is running on port 7777");
});

/*
Why do we need multiple route handlers in one route ("/user")?

- When a request is made, Express checks the route definitions from top to bottom.
- If the path matches, it executes all middleware/handlers for that path.
- If you use `next()` inside a handler, the request continues to the next matching handler.
- Middleware functions are useful for things like:
  - Logging
  - Authentication
  - Validation
  - Data processing before final response

🔁 Flow:
Client request ➜ Middleware 1 ➜ Middleware 2 ➜ ... ➜ Final Handler (sends response)

🧠 Remember:
- Functions that do something *before* the response are called middleware.
- The one that actually sends the response is called a request handler.
*/


//--------------------------------------------------------------------
/*
const express = require("express");
const app = express();



//   ✅ Use middleware to handle authentication/authorization for multiple routes.

//   - To apply middleware to all requests (GET, POST, etc.), use `app.use()`.
//   - If you only want to handle GET requests, use `app.get()`.
//   - There's also `app.all()`, which handles all HTTP methods for a specific path.
//     ➤ The difference between `app.use()` and `app.all()` is subtle:
//       - `app.use()` is for middleware logic.
//       - `app.all()` is used to define handlers that respond to *any* HTTP method.


// All `/admin` routes go through this middleware
app.use("/admin", (req, res, next) => {
  // Logic for checking if the request is authorized
  const token = "xyz"; // In real scenarios, get this from request headers
  const isAdminAuthorized = token === "xyz";

  if (!isAdminAuthorized) {
    res.status(401).send("Unauthorized request");
  } else {
    next(); // Pass control to the actual route handler
  }

  // ❌ Don't send another response after calling res.send() or res.status().send()
  // res.send("All data sent"); // Invalid if res.status().send() already called
});

// Non-admin route
app.get("/user", (req, res) => {
  res.send("User data sent");

  // ⚠️ Note: This route is NOT affected by the admin middleware above
});

// Admin route - Get all data
app.get("/admin/getAllData", (req, res) => {
  res.send("All data sent");
});

// Admin route - Delete a user
app.get("/admin/deleteUser", (req, res) => {
  res.send("Deleted a user");
});


//   🔁 If you need to authorize multiple routes,
//   repeating token-check logic is inefficient — middleware solves that.

//   🧠 Middleware is a **concept**, not a strict rule.
//   You can apply it:
//     - To all routes
//     - Only to GET, POST, etc.
//     - On specific route groups (e.g. `/admin`)
//     - Or globally for the entire application

//   ✅ In Express, middleware is usually applied using `app.use()`.


// Start the server
app.listen(7777, () => {
  console.log("Server is successfully listening on port 7777");
});

*/

//!1. What is middleware in Express?
// A middleware in Express is any function that takes:

// (req, res, next) => { /* ... */ }
// It can:

// Run code
// Modify the req or res objects
// End the request-response cycle (res.send(), res.json(), etc.)
// Or pass control to the next middleware using next()


//-----------------------------------------------------------------------

//! Error Handling in Middleware

// ✅ Always use try-catch in route handlers
const express = require("express");
const app = express();

/*
  🔴 Error-handling middleware:
  Must have 4 parameters: (err, req, res, next)

  If you define:
  - 2 parameters: (req, res)          → Regular route
  - 3 parameters: (req, res, next)    → Regular middleware
  - 4 parameters: (err, req, res, next) → Error-handling middleware ✅
*/
app.use("/", (err, req, res, next) => {
  if (err) {
    // Log your error here (could be to a file or monitoring service)
    res.status(500).send("Something went wrong");
  }
});

// ✅ Route with try-catch error handling
app.get("/getUserData", (req, res) => {
  try {
    // Simulate an error
    throw new Error("random err");

  } catch (error) {
    // You can log the error or pass it to error middleware using next(error)
    res.status(500).send("Some error occurred. Please contact support.");
  }
});

app.listen(7777, () => {
  console.log("Server running on port 7777");
});
