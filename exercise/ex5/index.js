var myArr = [1, 2, 3, 4];
//return in forEach
myArr.forEach(function (elem) {
  if (elem === 3) {
    return;
  }

  console.log(elem); //1,2,4
});
//continue in for
for (var i = 0; i < myArr.length; i++) {
  if (myArr[i] === 3) {
    continue;
  }

  console.log(myArr[i]); //1,2,4
}

var elements = ["element1", "element2", "element3"];
//và đây cũng chính là vì sao forEach lại ra đời.

elements.forEach(function (element) {
  // The asynchronous action simulator
  setTimeout(function () {
    console.log(element);
  }, 100);
});

for (let i = 0; i < elements.length; i++) {
  console.log("i out side: ", i);

  setTimeout(function () {
    console.log("i: ", i);
    console.log(elements[i]);
  }, 100);
}
