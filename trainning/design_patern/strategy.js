var UPS = function () {
  this.calculate = function (package) {
    let price = package.weight * 100;
    return price;
  };
};

var USPS = function () {
  this.calculate = function (package) {
    //calculations...
    return "15.05$";
  };
};

var Fedex = function () {
  this.calculate = function (package) {
    //calculations...
    return "19.05$";
  };
};

var Shipping = function () {
  this.company = "";
  this.setStrategy = function (company) {
    // console.log("company: ", company);
    this.company = company;
  };
  this.calculate = function (package) {
    // console.log("company: ", this.company.calculate);
    return this.company.calculate(package);
  };
};

var ups = new UPS();
var usps = new USPS();
var fedex = new Fedex();
const package = { form: "hanoi", to: "danang", weight: 1.05 };

const shipping = new Shipping();
shipping.setStrategy(ups);
console.log("ups: ", shipping.calculate(package));
