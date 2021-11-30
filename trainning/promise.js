// xin so dth
// const xinSoDth = () => {
//   console.log("goi cho thang ban: cho tao xin so Nam");

//   const thaoTacTimKiem = new Promise((resolve, reject) => {
//     let daTimThay;

//     setTimeout(() => {
//       daTimThay = true;

//       if (daTimThay) {
//         soDth = 1234;
//         console.log(`day la so cua nam ${soDth}`);
//         resolve(soDth);
//       } else {
//         reject("khong co so cua nam");
//       }
//     }, 2000);
//   });

//   return thaoTacTimKiem;
// };

// xinSoDth()
//   .then((soDth) => {
//     console.log(`ok, ${soDth} dung khong`);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

function getUser(userId) {
  return new Promise((resolve, reject) => {
    console.log("Get the user from the database.");
    setTimeout(() => {
      resolve({
        userId: userId,
        username: "admin",
      });
    }, 1000);
  });
}

function getServices(user) {
  return new Promise((resolve, reject) => {
    console.log(`Get the services of ${user.username} from the API.`);
    setTimeout(() => {
      resolve(["Email", "VPN", "CDN"]);
    }, 3 * 1000);
  });
}

function getServiceCost(services) {
  return new Promise((resolve, reject) => {
    console.log(`Calculate the service cost of ${services}.`);
    setTimeout(() => {
      resolve(services.length * 100);
    }, 2 * 1000);
  });
}

getUser(100)
  .then(getServices)
  .then(getServiceCost)
  .then((result) => {
    console.log(result);
  });

async function testAsync() {
  console.log(`use async await:`);
  await getUser(100);
  await getServices({ username: "nam" });
  await getServiceCost(["Email", "VPN", "CDN"]).then((result) => {
    console.log(result);
  });
}

testAsync();
