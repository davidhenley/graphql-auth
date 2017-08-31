const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID
} = graphql;

const mutation = require('./mutations');

const query = new GraphQLObjectType({
  name: 'RootQuery',
  fields: () => ({
    dummyField: { type: GraphQLID }
  })
});

module.exports = new GraphQLSchema({
  query,
  mutation
});
