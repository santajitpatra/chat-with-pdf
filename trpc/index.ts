import { publicProcedure, router } from "./trpc";
export const appRouter = router({
test: publicProcedure.query(() => {
  return true
})
});

export type AppRouter = typeof appRouter;
