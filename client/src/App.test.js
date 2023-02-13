import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import AllUnits from "./Components/AllUnits";
import GameBoard from "./Components/GameBoard";
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
      <GameBoard />
    </ApolloProvider>
  );
}

test("renders correct number of units", async () => {
  renderComponent();
  const unitContainers = await screen.findAllByTestId("unit-container");
  expect(unitContainers.length).toBe(3);
});
test("selecting a unit adds it to the army", async () => {
  renderComponent();
  const selectButton = await screen.findAllByTestId("button-container");
  fireEvent.click(selectButton[0]);
  const armyContainer = await screen.findByTestId("army-container");
  expect(armyContainer).toHaveTextContent("001");
});
// add a test to check clicking the clear button clears the army  container
test("clearing the army removes all units", async () => {
  renderComponent();
  const selectButton = await screen.findAllByTestId("button-container");
  fireEvent.click(selectButton[0]);
  const clearButton = await screen.findByTestId("clear-button");
  fireEvent.click(clearButton);
  const armyContainer = await screen.findByTestId("army-container");
  expect(armyContainer).toHaveTextContent("0");
});
// write me a test to ensure the GameBoard component renders the correct number of cells
test("renders correct number of cells", async () => {
  renderComponent();
  const ShowBoardButton = await screen.findByTestId("show-board-button");
  fireEvent.click(ShowBoardButton);
  const cellContainers = await screen.findAllByTestId("board-col");
  expect(cellContainers.length).toBe(16);
});
