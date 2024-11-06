import { LoginResponse } from "@/models";

export const AuthAdapter = (loginReponse : LoginResponse) => loginReponse.token 