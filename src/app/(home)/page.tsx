import { HomeView } from "@/module/home/ui/views/home-view";
import { HydrateClient, trpc } from "@/trpc/server";

interface PageProps{
  searchParams:Promise<{ categoryId:string}>
}
const Page=async({searchParams}:PageProps)=> {
  void trpc.category.getMany.prefetch()
 const {categoryId}=await searchParams;
  return (
    <HydrateClient>
       <HomeView categoryId={categoryId}/>
    </HydrateClient>
  );
}


export default Page;