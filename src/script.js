// Promise API
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2), 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(3), 3000);
});

Promise.all([promise1, promise2, promise3]).then((result) => {
  console.log(result.reduce((acc, element) => acc + element, 0));
});
