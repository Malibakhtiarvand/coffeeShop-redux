import HTTP from "./httpUrl.json";
import Axios from "axios";

export const PostHttpMethod = (dates) => Axios.post(HTTP.URL, dates);

export const deleteHttpMethod = (id) => Axios.delete(HTTP.URL + id);

export const putHttpMethod = (id, name) => Axios.put(HTTP.URL + id, { name });

export const getsHttpMethod = () => Axios.get(HTTP.URL);
