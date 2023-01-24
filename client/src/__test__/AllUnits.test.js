import { render, screen, fireEvent } from "@testing-library/react";
import AllUnits from "../Components/AllUnits";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  from,
  HttpLink,
} from "@apollo/client";

const link = from([new HttpLink({ uri: "http://localhost:9001/graphql" })]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function renderComponent() {
  return render(
    <ApolloProvider client={client}>
      <AllUnits />
    </ApolloProvider>
  );
}

test("renders correct number of units", async () => {
  renderComponent();
  const unitContainers = await screen.findAllByTestId("unit-container");
  expect(unitContainers.length).toBe(3);
});

test("renders correct units", async () => {
  renderComponent();
  const unitContainers = await screen.findAllByTestId("unit-container");
  expect(unitContainers[0]).toHaveTextContent("001");
  expect(unitContainers[1]).toHaveTextContent("002");
  expect(unitContainers[2]).toHaveTextContent("003");
});

test("selecting a unit adds it to the army", async () => {
  renderComponent();
  const selectButtons = await screen.findAllByTestId("button-container");
  fireEvent.click(selectButtons[0]);
  const armyContainer = await screen.findByTestId("army-container");
  expect(armyContainer).toHaveTextContent("001");
});
