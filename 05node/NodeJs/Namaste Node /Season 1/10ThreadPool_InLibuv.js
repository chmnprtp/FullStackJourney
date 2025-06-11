/*
Thread POOL use for - fs, dns.lookup, crypto, user specified input 
! 4 Thread By Default - UV_THREADPOOL_SIZE = 4

!is NodeJs sigle thread or multi-threaded??
 it depends how 
*/

import { EventEmitter } from "stream"

//! Example
//---------------------------
// const fs = require("fs");
// const crypto = require("crypto");


// crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
//     console.log("1- cryptoPBKDF2 done");
// })
// crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
//     console.log("2- cryptoPBKDF2 done");
// })
// crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
//     console.log("3- cryptoPBKDF2 done");
// })
// crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
//     console.log("4- cryptoPBKDF2 done");
// })
// crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
//     console.log("5- cryptoPBKDF2 done");
// })

// fs.readFile("./file.txt","utf-8",()=>{
//     console.log("File Reading CB");
// })
//---------------------------

//! We can change the size of ThreadPool by - process.env.UV_THREADPOOL = 2
//---------------------------
// const fs = require("fs");
// const crypto = require("crypto");
// process.env.UV_THREADPOOL_SIZE = 2;

// crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
//     console.log("1- cryptoPBKDF2 done");
// })
// crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
//     console.log("2- cryptoPBKDF2 done");
// })
// crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
//     console.log("3- cryptoPBKDF2 done");
// })
// crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
//     console.log("4- cryptoPBKDF2 done");
// })
// crypto.pbkdf2("password","salt",5000000,50,"sha512",(err,key)=>{
//     console.log("5- cryptoPBKDF2 done");
// })

// fs.readFile("./file.txt","utf-8",()=>{
//     console.log("File Reading CB");
// })
//---------------------------


OS
epoll - (linux)
kqueue - (MacOS)

//!Read
// fds - socket descriptor
// event EventEmitter
// streams and buffer
// pipes

// | OS              | System Call Used              | Description                                                       |
// | --------------- | ----------------------------- | ----------------------------------------------------------------- |
// | **Linux**       | `epoll`                       | Efficient I/O event notification system for many file descriptors |
// | **macOS / BSD** | `kqueue`                      | macOS's event notification interface (like epoll but older)       |
// | **Windows**     | `IOCP` (I/O Completion Ports) | Microsoft’s native async I/O mechanism                            |


//          [ Your Node.js App ]
//                 |
//            [ libuv (C++) ]
//                 |
// ----------------------------------------
// |               |                     |
// epoll         kqueue                 IOCP
// (Linux)         (macOS)              (Windows)
// |               |                     |
// OS Kernel       OS Kernel              Windows Kernel
// ↓               ↓                     ↓
// [ file/socket ] [ file/socket ]       [ file/socket ]
// events         events                events


//! setTimeout uses a min Heap data Structure