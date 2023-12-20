import { z, ZodSchema } from "zod";

export const formSchema: ZodSchema<any> = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title cannot exceed 100 characters"),
  body: z
    .string()
    .min(5, "Body must be at least 5 characters")
    .max(500, "Body cannot exceed 500 characters"),
});

export const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const APICall = async (data: any) => {
  const response = await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  return response.json();
};
