const graphql = require("graphql");
const { GraphQLObjectType, GraphQLInt, GraphQLString } = graphql;

const UnitType = new GraphQLObjectType({
  name: "Unit",
  fields: () => ({
    id: { type: GraphQLInt },
    unitName: { type: GraphQLString },
    moveSpeed: { type: GraphQLInt },
    shootValue: { type: GraphQLInt },
    fightValue: { type: GraphQLInt },
    healthPoints: { type: GraphQLInt },
    leadershipValue: { type: GraphQLInt },
    pointValue: { type: GraphQLInt },
  }),
});

module.exports = UnitType;
