// function Animal(age) {
//   this.age = age;
// }

// Animal.prototype.showAge = function () {
//   console.log(this.age);
// };

// function Dog(color) {
//   this.color = color;
// }

// Dog.prototype = new Animal();
// const choNha = new Dog("yellow");
// choNha.age = 3;
// choNha.showAge();

const parent = {
  name: "Stacey",
  age: 35,
  heritage: "Irish",
};

const child = Object.create(parent);
console.log(child === parent);
// child.name = "Ryan";
// child.age = 7;

console.log(child.name); // Ryan
console.log(child.age); // 7
console.log(child.heritage); // Irish
