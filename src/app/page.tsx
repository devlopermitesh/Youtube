import { HomeLayout } from "@/module/home/ui/layout/home-layout";
import Image from "next/image";

export default function Home() {
  return (
    <HomeLayout>
   <h2 className="text-pink-500 text-2xl font-bold">Hello world</h2>
    </HomeLayout>
  );
}
