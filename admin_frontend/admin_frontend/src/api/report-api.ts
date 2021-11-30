import axios from "./axios-client";

export async function getReport(params: any): Promise<any> {
  const response = await axios({
    method: "GET",
    url: "/order/view/report",
    params: params,
  });

  return response.data;
}
export default {
  getReport,
};
