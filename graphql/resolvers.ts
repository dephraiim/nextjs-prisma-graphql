export const resolvers = {
  Query: {
    links: async (_parent, _args, ctx) => {
      return await ctx.prisma.link.findMany();
    },
  },
};
