function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

let labels = [];
repeat(3, (i) => {
  labels.push(`unit ${i + 1}`);
});

console.log(labels);
repeat(3, console.log);

function greaterThan(n) {
  return (m) => m > n;
}

function discount(discount) {
  return (price) => (discount * price) / 100;
}

discountTenPer = discount(10);

console.log(discountTenPer(10000));

console.log(greaterThan(12)(11));
