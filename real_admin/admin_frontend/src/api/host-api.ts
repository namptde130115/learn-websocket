import axios from "./axios-client";

export async function search(params: any): Promise<any> {
  const response = await axios({
    method: "GET",
    url: "/organization/search",
    params,
  });

  return response;
}

export async function add(data: any): Promise<any> {
  const response = await axios({
    method: "POST",
    url: "/organization/create",
    data: data,
  });

  return response;
}

export async function deleteHost(hostId: any): Promise<any> {
  const response = await axios({
    method: "DELETE",
    url: `/organization/remove/${hostId}`,
  });

  return response;
}

export default {
  search,
  add,
  deleteHost
};
