const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("p1");
  }, 200);
});
const p2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("p2");
  }, 300);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("ERROR");
  }, 400);
});

Promise.all([p1, p2, p3])
  .then((p) => {
    console.log(p);
  })
  .catch((err) => {
    console.log(err);
  });
