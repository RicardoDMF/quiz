import ApolloClient from "apollo-boost";

 const clientQuery = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql"
})
export default clientQuery;