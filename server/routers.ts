import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { getCandidates, createSuggestion, getSuggestions, getMultimedia } from "./db";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  candidates: router({
    list: publicProcedure.query(async () => {
      return getCandidates();
    }),
  }),

  suggestions: router({
    create: publicProcedure
      .input((data: any) => ({
        name: data.name as string,
        email: data.email as string,
        suggestion: data.suggestion as string,
      }))
      .mutation(async ({ input }) => {
        await createSuggestion({
          name: input.name,
          email: input.email,
          suggestion: input.suggestion,
        });
        return { success: true };
      }),
    list: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user?.role !== "admin") throw new Error("Unauthorized");
      return getSuggestions();
    }),
  }),

  multimedia: router({
    list: publicProcedure.query(async () => {
      return getMultimedia();
    }),
  }),
});

export type AppRouter = typeof appRouter;
