import { render, screen, fireEvent } from "@testing-library/react";
import App from "../Components/ArmyContainer";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  from,
  HttpLink,
} from "@apollo/client";

const armyBlank = [
  {
    __typename: "Unit",
    id: 1,
    unitName: "Test Unit",
    moveSpeed: 6,
    shootValue: 4,
    fightValue: 5,
    healthPoints: 2,
    leadershipValue: 8,
    pointValue: 30,
  },
];

const link = from([new HttpLink({ uri: "http://localhost:9001/graphql" })]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function renderComponent(army) {
  return render(<App army={armyBlank} />);
}
// test ArmyContainer renders correctly
test("ArmyContainer renders correctly", () => {
  renderComponent();
  expect(screen.getByTestId("army-container")).toBeInTheDocument();
});
