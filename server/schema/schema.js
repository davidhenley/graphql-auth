const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLSchema
} = graphql;

const query = new GraphQLObjectType({
  name: 'RootQueryType'
});

module.exports = new GraphQLSchema({
  query
});
