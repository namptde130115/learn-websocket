import axios from "./axios-client";

export async function search(params: any): Promise<any> {
  const response = await axios({
    method: "GET",
    url: "/theme/search",
    params,
  });

  return response;
}

export async function add(data: any): Promise<any> {
  const response = await axios({
    method: "POST",
    url: "/theme/create",
    data: data,
  });

  return response;
}

export async function deleteTheme(hostId: any): Promise<any> {
  const response = await axios({
    method: "DELETE",
    url: `/theme/remove/${hostId}`,
  });

  return response;
}

export default {
  search,
  add,
  deleteTheme
};
