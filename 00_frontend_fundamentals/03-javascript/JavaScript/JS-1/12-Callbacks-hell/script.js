/**
 *
 */

// console.log("one");
// console.log("two");

// function hello() {
//     console.log("Hello");
// }

// setTimeout(hello, 2000); // timeout : 2s = 2000ms

// setTimeout(() => {
//     console.log("Hello JS");
// }, 1000);

// console.log("three");
// console.log("four");

// // callback
// function sum(a,b) {
//     console.log(a + b);
// }

// function calculator(a,b,sumCallback) {
//     sumCallback(a,b);
// }

// calculator(10,20,sum);

// // callback hell
// function getData(dataId) {
//   setTimeout(() => {
//     console.log("Data: ", dataId);
//   }, 2000);
// }

// getData(123);
// getData(456);
// getData(789);

// function getUserData(dataId, getNextData) {
//   setTimeout(() => {
//     console.log("Data: ", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// }

// // callback hell
// console.log(("Getting Data - 1"));
// getUserData(1, () => {
//     console.log(("Getting Data - 2"));
//     getUserData(2, () => {
//       console.log(("Getting Data - 3"));
//       getUserData(3, () => {
//         console.log(("Getting Data - 4"));
//         getUserData(4, () => {
//             console.log(("Getting Data - 5"));
//             getUserData(5, () => {
//                 console.log(("Getting Data - 6"));
//                 getUserData(6, () => {
//                     console.log(("Getting Data - 7"));
//                     getUserData(7, () => {
//                         console.log(("Getting Data - 8"));
//                         getUserData(8, () => {
//                             console.log(("Getting Data - 9"));
//                             getUserData(9, () => {
//                                 console.log(("Getting Data - 10"));
//                                 getUserData(10, () => {
//                                     console.log(("Getting Data - 11"));
//                                     getUserData(11);
//                                 });
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     });
//   });
// });


// promises
// let promise = new Promise((resolve, reject) => {
//   console.log("I am a Promise");
//   // resolve("success");
//   reject("some error occured"); //Uncaught (in promise) error
// });
// // promise is an object in javascript which has 3 states - pending, fulfilled, reject
// // resolve and reject are handlers which are automatically created by javascript for a promise.

// function getData (dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // console.log("Data - ", dataId); 
//             // resolve("Success");
//             reject("some error")
//             if(getNextData) {
//                 getNextData();
//             }
//         }, 5000);
//     });
// }

// let result = getData(123);


// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a Promise");
//         resolve("Success"); 
//         // reject("some error");
//     });
// }

// let promise = getPromise();

// promise.then((res) => {
//     console.log("fulfilled");
//     console.log(res);
// });

// promise.catch((err) => {
//     console.log("rejected");
//     console.log(err);
// });

// // promise chain
// function asyncFunction() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Some data 1");
//             resolve("success");
//         }, 2000); 
//     });
// }

// console.log("fetching data 1");
// let p1 = asyncFunction();
// p1.then((res) => {
//     console.log(res); 
// });

// promise chain
function asyncFunction1() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Some data 1");
            resolve("success");
        }, 2000); 
    });
}
function asyncFunction2() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Some data 2");
            resolve("success");
        }, 2000); 
    });
}

// console.log("fetching data 1");
// let p1 = asyncFunction1();
// p1.then((res) => {
//     console.log(res); 
// });
// console.log("fetching data 2");
// let p2 = asyncFunction2();
// p2.then((res) => {
//     console.log(res); 
// });

// console.log("fetching data 1");
// asyncFunction1().then(() => {
//     console.log("Data 1");
//     console.log("fetching data 2");
//     asyncFunction2().then(() => {
//         console.log("Data 2")
//     });
// });

const getData = (dataId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data - ", dataId);
            resolve("success");
        }, 2000);
    });
}

// getData(1).then((res) => {
//     console.log(res);
// });

// console.log("Getting data - 1....");
// getData(1).then((res) => {
//     console.log("Getting data - 2....");
//     return getData(2);
// }).then((res) => {
//     console.log("Getting data - 3....");
//     return getData(3);
// }).then((res) => {
//     console.log("Getting data - 4....");
//     return getData(4); 
// }).then((res) => {
//     console.log("Getting data - 5....");
//     return getData(5); 
// }).then((res) => {
//     console.log("Getting data - 6....");
//     return getData(6);
// }).then((res) => {
//     console.log("Getting data - 7....");
//     return getData(7); 
// }).then((res) => {
//     console.log("Getting data - 8....");
//     return getData(8); 
// }).then((res) => {
//     console.log("Getting data - 9....");
//     return getData(9); 
// }).then((res) => {
//     console.log("Getting data - 10....");
//     return getData(10);
// }).then((res) => {
//     console.log(res);
// });


// Async-Await
async function hello() {
    console.log("hello"); 
}

hello();
/**
 * 
Promise {<fulfilled>: undefined}
[[Prototype]]
: 
Promise
[[PromiseState]]
: 
"fulfilled"
[[PromiseResult]]
: 
undefined
 */

function api() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200); 
        }, 2000); 
    });
}

async function getWeatherData() {
    // console.log("getting weather data"); 
    // await api();
    // console.log("got weather data");

    await api(); // 1st
    await api(); // 2nd
    await api(); // 3rd
    await api(); // 4th
    await api(); // 5th
}
// getWeatherData();


function getFinancialData(dataId) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log("Data ", dataId)
            resolve("success");
            // reject("error");
        }, 2000);
    });
}

async function getApiData() {
    console.log("getting data 1 .........");
    await getFinancialData(1);
    console.log("getting data 2 .........");
    await getFinancialData(2);
    console.log("getting data 3 .........");
    await getFinancialData(3);
    console.log("getting data 4 .........");
    await getFinancialData(4);
    console.log("getting data 5 .........");
    await getFinancialData(5);
    console.log("getting data 6 .........");
    await getFinancialData(6);
    console.log("getting data 7 .........");
    await getFinancialData(7);
    console.log("getting data 8 .........");
    await getFinancialData(8);
    console.log("getting data 9 .........");
    await getFinancialData(9);
    console.log("getting data 10 .........");
    await getFinancialData(10);
}
// getApiData();

// using iife
(async () => {
  console.log("getting data 1 .........");
  await getFinancialData(1);
  console.log("getting data 2 .........");
  await getFinancialData(2);
  console.log("getting data 3 .........");
  await getFinancialData(3);
  console.log("getting data 4 .........");
  await getFinancialData(4);
  console.log("getting data 5 .........");
  await getFinancialData(5);
  console.log("getting data 6 .........");
  await getFinancialData(6);
  console.log("getting data 7 .........");
  await getFinancialData(7);
  console.log("getting data 8 .........");
  await getFinancialData(8);
  console.log("getting data 9 .........");
  await getFinancialData(9);
  console.log("getting data 10 .........");
  await getFinancialData(10);
})();

(function () {
    console.log("hello js"); 
}) ();

(() => {console.log("hello world")})();