//! os ==> operating system. this module provides the utilities to get operating system specifications
const os = require("os");
// console.log(os);

//? totalmem() ==> total RAM present
// console.log(os.totalmem()/(1024*1024*1024));

//! freemem()
// console.log(os.freemem()/(1024*1024*1024))

// 1 byte = 8 bits
// 1KB = 1024 bytes
// 1MB = 1024 KB
// 1GB = 1024 MB

//! arch()
// console.log(os.arch())

//! hostname()
// console.log(os.hostname())

//! cpus() ==> this will return the information of the threads present inside cpu
// console.log(os.cpus());
// console.log(os.cpus().length);
// console.log(os.machine()) //Output:arm64


//! 