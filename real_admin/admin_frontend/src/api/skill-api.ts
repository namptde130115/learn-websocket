import axios from "./axios-client";

export async function search(params: any): Promise<any> {
  const response = await axios({
    method: "GET",
    url: "/tags/search",
    params,
  });

  return response;
}


export async function add(data: any): Promise<any> {
  const response = await axios({
    method: "POST",
    url: "/tags/create",
    data: data,
  });

  return response;
}

export async function deleteSkill(tagId: string): Promise<any> {
  const response = await axios({
    method: "DELETE",
    url: `/tags/remove/${tagId}`,
  });

  return response;
}


export default {
  search,
  add,
  deleteSkill
};