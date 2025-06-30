import { router } from "@/app/api/trpc/route";
import { HelloWorld } from "./routers/Hello";

export const appRouter = router({
  hello: HelloWorld,
});

export type AppRouter = typeof appRouter;
