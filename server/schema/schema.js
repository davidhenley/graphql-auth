const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLSchema
} = graphql;

const query = new GraphQLObjectType({
  name: 'RootQuery'
});

module.exports = new GraphQLSchema({
  query
});
