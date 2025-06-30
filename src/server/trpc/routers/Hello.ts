import { router, publicProcedure } from "@/app/api/trpc/route";

export const HelloWorld = router({
  getHello: publicProcedure.query(() => {
    return "Hello world";
  }),
});
