// // // const promise1 = new Promise((resolve) => {
// // //     setTimeout(() => {
// // //       resolve('Task 1');
// // //     }, 1000);
// // //   });
  
// // //   const promise2 = new Promise((resolve) => {
// // //     setTimeout(() => {
// // //       resolve('Task 2');
// // //     }, 1500);
// // //   });
  
// // //   const promise3 = new Promise((resolve) => {
// // //     setTimeout(() => {
// // //       resolve('Task 3');
// // //     }, 800);
// // //   });
  
// // //   Promise.all([promise1, promise2, promise3])
// // //     .then((results) => {
// // //       console.log('All tasks completed:', results);
// // //     })
// // //     .catch((error) => {
// // //       console.error('An error occurred:', error);
// // //     });
  

// // // const promiseA = new Promise((resolve) => {
// // //     setTimeout(() => {
// // //       resolve('Task A');
// // //     }, 2000);
// // //   });
  
// // //   const promiseB = new Promise((resolve, reject) => {
// // //     setTimeout(() => {
// // //       reject('Task B failed');
// // //     }, 1000);
// // //   });
  
// // //   const promiseC = new Promise((resolve) => {
// // //     setTimeout(() => {
// // //       resolve('Task C');
// // //     }, 1500);
// // //   });
  
// // //   Promise.any([promiseA, promiseB, promiseC])
// // //     .then((result) => {
// // //       console.log('One task completed:', result);
// // //     })
// // //     .catch((error) => {
// // //       console.error('All tasks failed:', error);
// // //     });
// // const promiseX = new Promise((resolve) => {
// //     setTimeout(() => {
// //       resolve('Task X');
// //     }, 1000);
// //   });
  
// //   const promiseY = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //       reject('Task Y failed');
// //     }, 1500);
// //   });
  
// //   const promiseZ = new Promise((resolve) => {
// //     setTimeout(() => {
// //       resolve('Task Z');
// //     }, 800);
// //   });
  
// //   Promise.allSettled([promiseX, promiseY, promiseZ])
// //     .then((results) => {
// //       console.log('Results:', results);
// //     });
  

// const promiseA = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('Task A');
//     }, 2000);
//   });
  
//   const promiseB = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject('Task B failed');
//     }, 3000);
//   });
  
//   const promiseC = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('Task C');
//     }, 2500);
//   });
  
//   Promise.race([promiseA, promiseB, promiseC])
//     .then((result) => {
//       console.log('First task completed:', result);
//     })
//     .catch((error) => {
//       console.error('First task failed:', error);
//     });
const promiseX = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Task X');
    }, 1000);
  });
  
  const promiseY = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Task Y failed');
    }, 1500);
  });
  
  const promiseZ = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Task Z');
    }, 800);
  });
  
  Promise.allSettled([promiseX, promiseY, promiseZ])
    .then((results) => {
      console.log('Results:', results);
    });
  