import {
  ApolloClientOptions,
  retrieveAuthTokenFromContext,
} from '@lava-x/next-js';
import {
  GRAPHQL_ENDPOINT,
  GRAPHQL_SUBSCRIPTION_ENDPOINT,
} from 'config/constant';

const isProduction = process.env.NODE_ENV === 'production';
const options: ApolloClientOptions = {
  getAuthToken: async (ctx) => {
    const token = await retrieveAuthTokenFromContext(ctx);
    return token;
  },
  graphqlRequest: {
    uri: GRAPHQL_ENDPOINT,
    credentials: 'same-origin',
  },
  websocketRequest: {
    uri: GRAPHQL_SUBSCRIPTION_ENDPOINT,
    options: {
      reconnect: true,
      lazy: true,
      connectionParams: {},
    },
  },
  resolvers: {},
  typeDefs: {},
  connectToDevTools: !isProduction && typeof window !== 'undefined',
};
export default options;
