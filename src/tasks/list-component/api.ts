import { IUser } from "./types";
const API_URL: string = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers: () => Promise<IUser[]> = async () => {
  const response = await fetch(API_URL);
  const data: Promise<IUser[]> = await response.json();
  return data;
};
