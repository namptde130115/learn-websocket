import _ from "lodash";
const setItem = ({ key, data }: { key: any; data?: any }): void => {
  const dataString = JSON.stringify(data);
  return localStorage.setItem(key, dataString);
};

const getItem = ({ key }: { key: any }): any => {
  let dataString: any = localStorage.getItem(key);
  const dataParse: any = JSON.parse(dataString);
  return dataParse;
};

const removeItem = ({ key }: { key: any }) => {
  localStorage.removeItem(key);
  sessionStorage.removeItem(key);
};

export default {
  setItem,
  getItem,
  removeItem,
};
