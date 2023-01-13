import { render } from "@testing-library/react";
import BonkTitle from "../../Components/BonkTitle";

describe("Bonk Title", () => {
  it("renders component", () => {
    const { container } = render(<BonkTitle />);
    expect(container).toMatchSnapshot();
  });
});