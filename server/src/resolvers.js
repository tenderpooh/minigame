const jwt = require("jsonwebtoken");
const { APP_SECRET, getUserName } = require("./utils");
var timer = null;

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
      return context.prisma.users({ orderBy: "score_DESC", first: 10 });
    },
    AllUsers: (root, args, context) => {
      return context.prisma.users({ orderBy: "score_DESC" });
    },
    State: (root, args, context) => {
      return context.prisma.state({ id: "5d58be6ba7b11b00073efc42" });
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
    },
    setTime: async (root, args, context) => {
      return context.prisma.updateState({
        data: {
          time: args.time
        },
        where: { id: "5d58be6ba7b11b00073efc42" }
      });
    },
    addTime: async (root, args, context) => {
      const currentState = await context.prisma.state({
        id: "5d58be6ba7b11b00073efc42"
      });
      return context.prisma.updateState({
        data: {
          time: currentState.time + args.time
        },
        where: { id: "5d58be6ba7b11b00073efc42" }
      });
    },
    startTime: async (root, args, context) => {
      if (timer === null) {
        timer = await setInterval(async () => {
          let state = await context.prisma.state({
            id: "5d58be6ba7b11b00073efc42"
          });
          console.log(state.time);
          if (state.time > 0) {
            await context.prisma.updateState({
              where: {
                id: "5d58be6ba7b11b00073efc42"
              },
              data: {
                time: state.time - 1
              }
            });
          } else if (state.time === 0) {
            clearInterval(timer);
            timer = null;
          }
        }, 1000);
      } else {
        clearInterval(timer);
        timer = null;
        console.log("it's on");
      }
    }
  },
  Subscription: {
    state: {
      subscribe: (parent, args, context, info) => {
        return context.prisma.$subscribe
          .state({ mutation_in: ["UPDATED"] })
          .node();
      },
      resolve: payload => {
        return payload;
      }
    }
  }
};

module.exports = resolvers;
