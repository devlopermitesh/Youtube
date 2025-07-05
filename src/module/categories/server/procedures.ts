import { db } from "@/db";
import { categories } from "@/db/schema";
import { createTRPCRouter, publicProcedure } from "@/trpc/init";

export const Categoryrouter=createTRPCRouter({
    getMany:publicProcedure.query(async()=>{
        const data=await db.select().from(categories)
        return data;
    })
})