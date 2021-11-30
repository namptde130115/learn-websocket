import axios from "./axios-client";

export async function updateUser(data: any, id: any): Promise<any> {
  const idResponse = data.id || id;
  const response = await axios({
    method: "PUT",
    url: `/user/${idResponse}`,
    data: data,
  });

  return response.data;
}

export async function search(params: any): Promise<any> {
  const response = await axios({
    method: "GET",
    url: "/user/search",
    params
  });

  return response;
}

export async function enableUser(userId: string): Promise<any> {
  const response = await axios({
    method: "PUT",
    url: `/user/enable_user/${userId}`,
  });

  return response;
}

export async function disableUser(userId: string): Promise<any> {
  const response = await axios({
    method: "PUT",
    url: `/user/disable_user/${userId}`,
  });

  return response;
}

export async function getAll(): Promise<any> {
  const response = await axios({
    method: "GET",
    url: "/user/search",
  });

  return response;
}

export async function getAllByRole(role: any): Promise<any> {
  const response = await axios({
    method: "GET",
    url: `/user/allbyrole/${role}`,
  });

  return response.data;
}

export async function getUserById(id: any): Promise<any> {
  const response = await axios({
    method: "GET",
    url: `/user/get_by_id/${id}`,
  });

  return response;
}

export async function restorePassword(data: any): Promise<any> {
  const response = await axios({
    method: "POST",
    url: "auth/restorePassword",
    data,
  });

  return response.data;
}

export async function deleteUser(id: any): Promise<any> {
  const response = await axios({
    method: "DELETE",
    url: `/user/${id}`,
  });

  return response.data;
}

export default {
  enableUser,
  disableUser,
  updateUser,
  getAll,
  getUserById,
  restorePassword,
  deleteUser,
  getAllByRole,
  search,
};
