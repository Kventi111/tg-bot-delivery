import { http } from "./http";

const getToken = (apiLogin) => http.post("/api/1/access_token",{ apiLogin })


export const tokenApi = {
    getToken: (apiLogin) => getToken(apiLogin)
}