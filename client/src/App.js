import "./styles/style.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import LoadUsers from "./Components/LoadUsers";
import AllUnits from "./Components/AllUnits";
import Form from "./Components/Form";
import GameBoard from "./Components/GameBoard";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      return alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:9001/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});
function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <GameBoard />
        {/* <Form />
        <AllUnits /> */}
      </ApolloProvider>
    </div>
  );
}

export default App;
