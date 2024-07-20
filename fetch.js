// // // console.log(a)

// // // var a=10;

// // // const b=20;
// // // console.log(b)
// // // function print(){
// // //     console.log("heloo ")
// // // }
// // // print()

// // // // console.log("world")

// // // // // 1: creation
// // // // // 2: execution
// // // // function payment(){
// // // //     console.log("Make payment")
// // // // }


// // // // function addtocart(){
// // // //     setTimeout(()=>{
// // // //         console.log("Add to Cart") // call the function
// // // //         payment();
// // // //     },1000);
// // // // }

// // // // function ecommerc(){
// // // //     console.log("Data are loaded") // call the function
// // // //     setTimeout(()=>{
// // // // addtocart();
// // // //     },2000);
// // // // }
// // // // ecommerc();

// // // console.log("bablu") // Outputs: undefined
// // // // var x = 10
// // // var personName = "Alice"

// // // function sayHello() {
// // //   console.log("Hello, " + personName)
// // // }

// // // sayHello() // Outputs: Hello, Alice

// // // var globalVariable = 10;

// // // function globalFunction() {
// // //   console.log('This is a global function.');
// // // }

// // // console.log(globalVariable); // Outputs: 10
// // // globalFunction(); // Outputs: This is a global function.

// // // example of synchronous execution//
// // // function fetchData() {
// // //     console.log("Fetching data...");
// // //     // Simulate a time-consuming task (e.g., fetching data from a server)
// // //     for (let i = 0; i < 1000000000; i++) {
// // //       // This loop represents a blocking operation
// // //     }
// // //     console.log("Data fetched!");
// // //   }
  
// // //   console.log("Start");
// // // //   fetchData(); when i am not call the fetchData then program will not excuted
// // //   console.log("End");


// //   // Asynchronous//
// //   function fetchDataAsync() {
// //     console.log("Fetching data asynchronously...");
// //     setTimeout(function () {
// //       console.log("Data fetched asynchronously!");
// //     }, 1000); // Simulate a 2-second delay
// //   }
  
// //   console.log("Start");
// //   fetchDataAsync();
// //   console.log("End");
  
  
// function fetchData(callback) {
//     console.log("Fetching data asynchronously...");
//     setTimeout(function () {
//       console.log("Data fetched asynchronously!");
//       const data = { name: "Batman", age: 23, isMarried: false, hobbies: ['fighting crime', 'martial arts'] };
//       callback(data);
//     }, 2000);
//   }
  
//   console.log("Start");
  
//   function printData(result) {
//     console.log("Received data:", result);
//   }
  
//   fetchData(printData);
  
//   console.log("End");


// Anomoyous functions

  