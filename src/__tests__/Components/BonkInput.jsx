import { render } from "@testing-library/react";
import BonkInput from "../../Components/BonkInput";

let mockbonkAmount = { bonkAmount: 1 };
let mockupdateBonkAmount = { updateBonkAmount: jest.fn() };

jest.mock("react", () => {
  const ActualReact = jest.requireActual("react");
  return {
    ...ActualReact,
    useContext: () => [mockbonkAmount],
  };
});

jest.mock("../../hooks/useDispatcher", () => ({
  useDispatcher: () => {
    return mockupdateBonkAmount;
  },
}));

describe("Bonk Input", () => {
  it("renders component", () => {
    const { container } = render(<BonkInput />);
    expect(container).toMatchSnapshot();
  });
});
