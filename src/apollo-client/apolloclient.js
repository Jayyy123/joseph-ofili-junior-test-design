import { ApolloClient, InMemoryCache, from, HttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error'

const port = 4000 || 5000

const errorLink = onError(({ graphqlErrors, networkError}) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      return alert(`Graphql errors ${message}`);
    });
  }
})

const link = from([
  errorLink,
  new HttpLink({
    uri:`http://localhost:${port}`
  })
])

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})