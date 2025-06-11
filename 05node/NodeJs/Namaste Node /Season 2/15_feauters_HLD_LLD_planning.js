//! For Tinder - for developer

//features
/**
 * 1) create an account
 * 2) login
 * 3) update your profile
 * 4) feed Page - explore
 * 5) send Connection Request
 * 6) see our matches
 * 7) see the request we've sent
 * 8) update your profile
 * 
 * * What happens in HLD
 * - what kind of microservices you will build?     - frontend(react), backend(nodeJs,MongoDB)
 * - what kind of security practices you will use?  
 * - how user will authenticate
 * - what database will be use
 * - how you will design databse
 * - how you will design api
 * - whether you implement caching?
 * 
 * * What happens in LLD
 * - DB Design
 *      -User ==> firstname, lastname, email, password,age,gender
 *      -ConnectionRequest ==> fromUserId, toUserId, status(pending,accepted,rejected,ignored)
 * - API Design {REST API}
 *      -GET   - get data
 *      -POST  - push data
 *      -PUT   - update data
 *      -PATCH - update data
 *      -DELETE
 *   These are http methods
 * 
 *     what api will be need? crud operation
 *      POST /signup
 *      POST /login
 *      GET  /profile
 *      POST /profile
 *      PATCH/profile
 *      DELETE/profile
 *      POST  /sendRequest   -ignore
 *                           -intereseted
 *      POST  /reviewRequest - accept
 *                           - reject
 *      GET   /requests
 *      GET   /connections
 */
/*
| **Aspect**                    | **PUT**                                       | **PATCH**                                                 |
| ----------------------------- | --------------------------------------------- | --------------------------------------------------------- |
| **Purpose**                   | Replace the **entire resource**               | Update **part of a resource**                             |
| **Idempotent**                | ✅ Yes – same request = same result every time | ✅ Yes – usually idempotent, but depends on implementation |
| **Data Required**             | Requires **full object**                      | Requires **only the fields to update**                    |
| **Usage Example**             | Update full user profile                      | Update just the user’s email                              |
| **Overwrites Missing Fields** | ✅ Yes – fields not included are removed       | ❌ No – only provided fields are updated                   |
*/