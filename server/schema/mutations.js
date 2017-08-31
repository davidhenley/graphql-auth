const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString
} = graphql;

const UserType = require('./types/user_type');
const { signup } = require('../services/passport');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    signup: {
       type: UserType,
       args: {
         email: { type: GraphQLString },
         password: { type: GraphQLString }
       },
       resolve(pV, { email, password }, req) {
         return signup({ email, password, req });
       }
    }
  })
});

module.exports = mutation;
