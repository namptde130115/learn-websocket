//cloure function
function cloure() {
  var N = 0;
  console.log('N: ', N);
  function f2 () {
    N+=1;
    console.log('N f2:' , N);
  }
  return f2
}

var test = cloure();

test();
test();
test();