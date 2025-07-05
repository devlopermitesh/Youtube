import { Categoryrouter } from "@/module/categories/server/procedures";
import { createTRPCRouter } from "../init";
 
export const appRouter = createTRPCRouter({
category:Categoryrouter
});
 
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;