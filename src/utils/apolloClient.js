import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { AUTH_TOKEN } from "../constants";
import {setContext} from '@apollo/client/link/context';

const cache = new InMemoryCache();
//const link = `${process.env.REACT_APP_BACKEND_URL}/graphql`;
const httpLink = new HttpLink({
  uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`
});

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});

const link = authLink.concat(httpLink);

const client = new ApolloClient({
  link,
  cache: cache,
});

export default client;