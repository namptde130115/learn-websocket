// Biến này dùng để theo dõi số Promise đang được thực thi tại một thời điểm
let counter = 0;
let interval;
// Tổng số hành động
const numberOfOperations = 20;
// Arguments cho mỗi hành động
const listOfArguments = [];
// Delay các hành động để fake bất đồng bộ
const listOfDelays = [];

// Fill mảng argument và delay cho các hành động được thực thi
// Mỗi giá trị delay được ngẫu nhiên trong khoảng 1000 tới 10000 milisecond
for (let i = 0; i < numberOfOperations; i++) {
  listOfArguments.push(i);
  listOfDelays.push(Math.ceil(Math.random() * 9) * 1000);
}

// Fake bất đồng bộ: resolve một mảng sau một khoảng thời gian tuỳ ý
// Tăng biến counter để theo dõi số promise được thực thi mỗi giây
const asyncOperation = (index) => {
  counter++;
  return new Promise((resolve) =>
    setTimeout(() => {
      console.log("Operation performed:", index);
      counter--;
      resolve(index);
    }, listOfDelays[index])
  );
};

// Hàm in ra số Promise được thực thi mỗi giây (để theo dõi)
const watchCounter = () => {
  console.log("Promises running in the beginning:", counter);

  if (interval) {
    clearInterval(interval);
  }

  interval = setInterval(() => console.log("Promises running:", counter), 1000);
};

async function take3subtake1part0() {
  const concurrencyLimit = 5;
  const argsCopy = listOfArguments.slice();
  const promises = new Array(concurrencyLimit).fill(Promise.resolve());
  // Đưa promise liên tiếp vào chuỗi thực thi
  function chainNext(p) {
    if (argsCopy.length) {
      const arg = argsCopy.shift();
      return p.then(() => {
        const operationPromise = asyncOperation(arg);
        return chainNext(operationPromise);
      });
    }
    console.log("p", p);
    return p;
  }

  await Promise.all(promises.map(chainNext));
}

watchCounter();
take3subtake1part0();
