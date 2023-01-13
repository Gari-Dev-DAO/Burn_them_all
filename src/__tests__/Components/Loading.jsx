import { render } from "@testing-library/react";
import Loading from "../../Components/Loading";

describe("Bonk Title", () => {
  it("renders component", () => {
    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot();
  });
});