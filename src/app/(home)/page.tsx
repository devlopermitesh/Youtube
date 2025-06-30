"use client";
import { api } from "@/utils/trpc";
export default function Home() {
  const { data } = api.hello.getHello.useQuery();

  console.log("data ", data);
  return <h2 className="text-pink-500 text-2xl font-bold">{data}</h2>;
}
