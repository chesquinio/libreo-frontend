import { LoginUser, RegisterUser } from "@/types/auth";
import axios from "./axios";

type DefaultResponse = {
  message: string;
};

export const loginRequest = async (user: LoginUser) =>
  await axios.post("/auth/login", user);

export const registerRequest = async (user: RegisterUser) =>
  await axios.post("/auth/register", user);

export const logoutRequest = () => axios.post("/auth/logout");

export const verifyTokenRequest = () => axios.get("/auth/verify");

export const authMeliRequest = (code: string) =>
  axios.post<DefaultResponse>("/meli/auth", { code });

export const verifyMeliRequest = () => axios.get("/meli/verify");
