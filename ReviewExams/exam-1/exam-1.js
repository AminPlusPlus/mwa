// setTimeout(() => {
//   console.log("timeout");
// }, 0);
// setTimeout(() => {
//   console.log("timeout1");
// }, 0);

// setImmediate(() => {
//   console.log("immediate");
// });
// process.nextTick(() => console.log("nexttick"));

// setTimeout(() => {
//   console.log("timeout2");
// }, 0);

const name = "Josh Edward";

function greet() {
  console.log("Hi", name);
}
module.exports = {
  greeting: greet,
};
