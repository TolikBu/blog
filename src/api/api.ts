import { ITask } from "../types/ITask";

const BASE_URL = "https://blog.kata.academy/api";

const request = async <T>(path: string, options?: RequestInit) => {
  const res = await fetch(path, options);

  if (!res.ok) {
    throw Error(`failed to fetch ${res.statusText}`);
  }

  return (await res.json()) as T;
};

const getArticles = async (): Promise<{ articles: ITask[] }> => {
  const data = await request<{ articles: ITask[] }>(`${BASE_URL}/articles`);
  console.log(data);
};

export const api = {
  getArticles,
};
