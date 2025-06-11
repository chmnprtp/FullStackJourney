// ec2 instance is a server

// A server is a system that listens for requests and responds with the required data or service.

//! Why don't I use my own laptop as a server?
// My laptop has limited RAM and storage, and can't scale to handle traffic or load.
// AWS provides scalable infrastructure that can automatically grow with demand.

/*       
                use Browser  everyTimeNewSocketConnection
                271.1.7.98        socket         102.209.1.3
                [ Client ] ---> ( Request ) ---> [ Server ]
                    |                               |
                    <--- ( Response ) <-------------

  - When data is send it used TCP/IP 

  ?Why we call web
  every computer connected to internet have unique ip address, anyone can connect to anyone. it makes web.

  ?What is Protocol
  Some set of rules which are defined between computers to connect.
  
  ?HTTP FTP SMTP
  these are rules and protocol in which format the server respond.

| Protocol | Full Form                     | Purpose                                             |
| -------- | ----------------------------- | --------------------------------------------------- |
| **HTTP** | HyperText Transfer Protocol   | Used for web communication (browsers ↔ web servers) |
| **FTP**  | File Transfer Protocol        | Used for transferring files                         |
| **SMTP** | Simple Mail Transfer Protocol | Used for sending emails                             |


  ?how data sent from server?
  it send data in packets control by TCP/IP

  ?Stream & Buffer

  ?DNS server
  when we send request to server it first goes to DNS server. it manages mapping between Domain name and ip.

  ?can we create multiple server?
   yes, we can also create multiple http server.

  ?if there are two http server then how we data will be send
  define by port.   102,209.1.3:3000 for particular server
  some port are reserved.
| Port  | Purpose            |
| ----- | ------------------ |
| 80    | HTTP (Web)         |
| 443   | HTTPS (Secure Web) |
| 21    | FTP                |
| 22    | SSH                |
| 25    | SMTP               |
| 3306  | MySQL              |
| 27017 | MongoDB            |

                 httpServer 
              chaman.com/api         
Chaman.com         :3000                /getUserInfo
Domain Name         3000                
    |
    IP      +       PORT        +       PATH <==> api

  ? Socket vs Web sockets
    websocket - if user has made a connection ,this connection stays for a longer time. it is not closing automatially.
    socket - basic connection - open -send data- close connection


*/

//! Create a server
// const http = require("node:http"); //because it a core module
const http = require("http");

const server = http.createServer((req,res)=>{ // these are two object which have some methods
    
    if(req.url === "/bye"){
        res.end("Don't Go!")
    }
    res.end("Hello User");

}); // it gives instance of server
server.listen(7777,()=>{
    console.log("Go to Browser");
})