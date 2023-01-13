import { fireEvent,render } from "@testing-library/react";
import Button from "../../Components/Button";

describe("Button", () => {
  it("renders component", () => {
    const { container } = render(<Button />);
    expect(container).toMatchSnapshot();
  });

  it("Onclick is working", () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Bonk</Button>);
    const button = getByText("Bonk");
    fireEvent.click(button);
    expect(onClick).toBeCalledTimes(1);
  });
});
