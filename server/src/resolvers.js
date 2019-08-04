const resolvers = {
  Query: {
    user: (root, args, context) => {
      return context.prisma.user({ barcode: args.barcode });
    },
    users: (root, args, context) => {
      return context.prisma.users();
    }
  },
  Mutation: {
    createUser: (root, args, context) => {
      return context.prisma.createUser({
        barcode: args.barcode,
        pw: args.pw,
        comm: args.comm,
        name: args.name,
        score: 0
      });
    }
  }
};

module.exports = resolvers;
