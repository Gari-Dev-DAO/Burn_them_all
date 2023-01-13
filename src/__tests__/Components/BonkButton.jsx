import { fireEvent, render } from "@testing-library/react";
import BonkButton from "../../Components/BonkButton";

describe("BonkButton", () => {
  it("renders component", () => {
    const { container } = render(<BonkButton />);
    expect(container).toMatchSnapshot();
  });

  it("Onclick is working", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <BonkButton onClick={onClick}>Bonk</BonkButton>
    );
    const button = getByText("Bonk");
    fireEvent.click(button);
    expect(onClick).toBeCalledTimes(1);
  });

  it("Button disables based on props", () => {
    const isDisabled = true;
    const { getByText } = render(
      <BonkButton isDisabled={isDisabled}>Bonk</BonkButton>
    );
    const button = getByText("Bonk");
    expect(button).toBeDisabled();
  });

  it("Button enables based on props", () => {
    const isDisabled = false;
    const { getByText } = render(
      <BonkButton isDisabled={isDisabled}>Bonk</BonkButton>
    );
    const button = getByText("Bonk");
    expect(button).not.toBeDisabled();
  });
});
