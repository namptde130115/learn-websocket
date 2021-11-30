function Subject() {
  this.observers = []; //aray of observer function
}

Subject.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
  },
  unsubscribe: function (fnToRemove) {
    this.observers = this.observers.filter((fn) => {
      if (fn != fnToRemove) return fn;
    });
  },
  fire: function () {
    this.observers.forEach((fn) => {
      fn.call();
    });
  },
};

const subject = new Subject();

function Observer1() {
  console.log("observer 1 is firing");
}

function Observer2() {
  console.log("observer 2 is firing");
}

subject.subscribe(Observer1);
subject.subscribe(Observer2);

subject.fire();
