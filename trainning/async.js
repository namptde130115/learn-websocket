const xinSoDth = (callback) => {
  let soDt;

  console.log("goi dien thoai cho thang ban: cho tao xin so thang nam");

  console.log("thang ban dang tim so dien thoai");

  setTimeout(() => {
    soDt = 123123123;
    console.log("toi tim duoc roi nhe, so thang nam ne");
    // callback = (callback1) => {
    //   setTimeout(() => {
    //     callback1();
    //   }, 1000);
    // };
    callback(soDt);
  }, 1000);
};

const sauKhiNhanSoDt = (soDt) => {
  console.log(`so dien thoai cua thang nam la: ${soDt}`);
  // console.log(`het pin ... sac het 1s`);
  // setTimeout(() => {
  //   sacpin();
  // }, 1000);
};
const sacpin = () => console.log("sac pin xong roi");
// xinSoDth(sauKhiNhanSoDt("123123", sacpin));
xinSoDth(sauKhiNhanSoDt);
