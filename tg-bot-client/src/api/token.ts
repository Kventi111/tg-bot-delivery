import { http } from "./http";

const getToken = (apiLogin: string) => http.post("/api/1/access_token",{ apiLogin })


export const tokenApi = {
    getToken: (apiLogin: string) => getToken(apiLogin)
}