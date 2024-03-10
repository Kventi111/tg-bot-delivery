import { http } from "./http";

// https://api-ru.iiko.services/api/1/nomenclature
const API_VERSION = "/api/1";

const getUserInfo = ({ phone, type = "phone", organizationId }, headers) =>
  http.post(
    `${API_VERSION}/loyalty/iiko/customer/info`,
    { phone, type, organizationId },
    headers
  );

const addUserToLoyality = ({ phone, type, organizationId }, headers) =>
  http.post(
    `${API_VERSION}/customer/create_or_update`,
    {
      phone,
      type,
      organizationId,
    },
    headers
  );

export const userApi = {
  getUserInfo,
  addUserToLoyality,
};
