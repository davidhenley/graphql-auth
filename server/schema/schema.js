const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLSchema
} = graphql;

const query = {};
const mutation = require('./mutation');

module.exports = new GraphQLSchema({
  query,
  mutation
});
