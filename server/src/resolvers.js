const jwt = require("jsonwebtoken");
const { APP_SECRET, getUserName } = require("./utils");

const resolvers = {
  Query: {
    User: (root, args, context) => {
      return context.prisma.user({ barcode: args.barcode });
    },
    MyInfo: async (root, args, context) => {
      const userName = await getUserName(context);
      return context.prisma.user({ name: userName });
    },
    Users: (root, args, context) => {
      return context.prisma.users({ orderBy: "score_DESC", first: 3 });
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
    },
    getScore: async (root, args, context) => {
      const userInfo = await context.prisma.user({
        barcode: args.barcode
      });
      return context.prisma.updateUser({
        data: {
          score: userInfo.score + args.score
        },
        where: {
          barcode: userInfo.barcode
        }
      });
    },
    login: async (root, args, context) => {
      console.log(args);
      const userInfo = await context.prisma.user({ name: args.name });
      if (!userInfo) {
        throw new Error("No such player found");
      }
      if (args.pw !== userInfo.pw) {
        throw new Error("Invalid password");
      }
      const token = jwt.sign({ name: userInfo.name }, APP_SECRET);
      return {
        token,
        user: userInfo
      };
    }
  }
};

module.exports = resolvers;
