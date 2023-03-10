const UserType = require("./TypeDefs/UserType.js");
const UnitType = require("./TypeDefs/UnitType.js");
const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
} = graphql;
// const userData = require("../utils/MOCK_DATA.json");
const unitData = require("../utils/MOCK_UNIT_DATA.json");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUnits: {
      type: new GraphQLList(UnitType),
      args: {
        id: { type: GraphQLInt },
        limit: { type: GraphQLInt },
      },
      resolve(parent, args) {
        const { limit, id } = args;
        return unitData.slice(0, limit);
      },
    },
  },
});

// const RootQuery = new GraphQLObjectType({
//   name: "RootQueryType",
//   fields: {
//     getAllUsers: {
//       type: new GraphQLList(UserType),
//       args: {
//         id: { type: GraphQLInt },
//         limit: { type: GraphQLInt },
//       },
//       resolve(parent, args) {
//         console.log(args);
//         const { limit } = args;
//         return userData.slice(0, limit);
//       },
//     },
//   },
// });
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUnit: {
      type: UnitType,
      args: {
        unitName: { type: GraphQLString },
        moveSpeed: { type: GraphQLInt },
        shootValue: { type: GraphQLInt },
        fightValue: { type: GraphQLInt },
        healthPoints: { type: GraphQLInt },
        leadershipValue: { type: GraphQLInt },
        pointValue: { type: GraphQLInt },
      },
      resolve(parent, args) {
        unitData.push({
          id: unitData.length + 1,
          unitName: args.unitName,
          moveSpeed: args.moveSpeed,
          shootValue: args.shootValue,
          fightValue: args.fightValue,
          healthPoints: args.healthPoints,
          leadershipValue: args.leadershipValue,
          pointValue: args.pointValue,
        });
        return args;
      },
    },
  },
});
// const Mutation = new GraphQLObjectType({
//   name: "Mutation",
//   fields: {
//     createUser: {
//       type: UserType,
//       args: {
//         firstName: { type: GraphQLString },
//         lastName: { type: GraphQLString },
//         email: { type: GraphQLString },
//         password: { type: GraphQLString },
//       },
//       resolve(parent, args) {
//         userData.push({
//           id: userData.length + 1,
//           firstName: args.firstName,
//           lastName: args.lastName,
//           email: args.email,
//           password: args.password,
//         });
//         return args;
//       },
//     },
//   },
// });

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });
