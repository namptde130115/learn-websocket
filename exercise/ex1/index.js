setTimeout(() => {
  console.log("hello event loop");
}, 0);
let run = true;
let time = new Date().getSeconds();
console.log("time:", time);
while (run) {
  let timeSecond = new Date().getSeconds();
  if (timeSecond - time > 5) {
    console.log("after 5s");
    run = false;
  }
}
