import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://marvel-graphql.now.sh/"
});

export default client;
