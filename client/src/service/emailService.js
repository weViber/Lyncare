import axios from "axios";
import baseUrl from "./apiConfig";

export const postEmail = ({ company, call, email, name, phone, desc }) => {
  return axios.post(`${baseUrl}/email`, {
    company,
    call,
    email,
    name,
    phone,
    desc,
  });
};
