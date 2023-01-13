import { render } from "@testing-library/react";
import AboutBonk from "../../Components/AboutBonk";

describe("AboutBonk", () => {
  it("renders component", () => {
    const { container } = render(<AboutBonk />);
    expect(container).toMatchSnapshot();
  });
});
