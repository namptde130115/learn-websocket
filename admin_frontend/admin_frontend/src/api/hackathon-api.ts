import axios from "./axios-client";

export async function search(params: any): Promise<any> {
  const response = await axios({
    method: "GET",
    url: "/hackathon/search",
    params,
  });

  return response;
}

export default {
  search,
};
