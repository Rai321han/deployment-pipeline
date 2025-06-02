"use server";

export async function getUserList() {
  const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/users`;
  console.log("API URL -> ", process.env.NEXT_PUBLIC_API_URL);
  const response = await fetch(apiUrl, { cache: "no-store" });
  const data = await response.json();
  return data;
}
