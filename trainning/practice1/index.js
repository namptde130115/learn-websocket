const genderList = ["male", "female"];
const firstNameList = ["pham", "nguyen", "tran", "ngo"];
const lastNameList = ["nam", "minh", "van"];
const userList = [];

function random(range, start) {
  return Math.floor(Math.random() * range) + start;
}

function genarateId(id) {
  return function () {
    id++;
    return id;
  };
}

var id = genarateId(1);

function User() {
  this.id = id();
  this.firstName = firstNameList[random(firstNameList.length - 1, 0)];
  this.lastName = lastNameList[random(lastNameList.length - 1, 0)];
  this.age = random(20, 20);
  this.gender = genderList[random(2, 0)];
  this.changeName = function (name) {
    this.firstName = name;
  };
}

for (var i = 0; i < 40; i++) {
  let userInit = new User();
  userList.push(userInit);
}

function getListFullName(searchValue) {
  return userList.filter(
    (user) =>
      user.firstName.includes(searchValue) ||
      user.lastName.includes(searchValue)
  );
}

function getListAgleGender() {
  return userList.filter(
    (user) =>
      (user.gender === "male" && user.age >= 25 && user.age <= 33) ||
      (user.gender === "male" && user.age === 38)
  );
}

// console.log("user at position 3: ", userList[2]);
// console.log("firstName: ", userList[2].firstName);
// userList[2].changeName("jhon");
// console.log("after change firstname: ", userList[2].firstName);
// console.log("search result: ", getListFullName("an"));
console.log("search 2 result:  ", getListAgleGender());
console.log("length: ", getListAgleGender().length);
console.table(userList);
