import Axios from "axios";
import { API_URL } from "../config";

export const apiRequest = (url, method, payload = {}, params = {}) =>
  Axios({
    method,
    url: `${API_URL}${url}`,
    data: payload,
    strictSSL: false,
    params,
  });

export const POST = "post";
export const GET = "get";
export const DELETE = "delete";
export const PUT = "put";

export const LOGIN_ENTRY_POINT = "/account/login";
export const SIGN_UP_ENTRY_POINT = "/account/register";
export const USER_PROFILE_ENTRY_POINT = "/identity/my-profile";
export const USERS_ENTRY_POINT = "/users";
export const USER_INFORMATION_ENTRY_POINT = "/user-informations/current-user";
export const POST_CREATE_ENTRY_POINT = "/posts";
export const GET_COMPANY_ENTRY_POINT = "/companies";
export const GET_LEVEL_ENTRY_POINT = "/commons/levels";
export const GET_MAJOR_ENTRY_POINT = "/commons/majors";
export const GET_LANGUAGE_ENTRY_POINT = "/commons/languages";
