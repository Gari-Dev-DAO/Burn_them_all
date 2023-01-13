import { render } from "@testing-library/react";
import DogImages from "../../Components/DogImages";

describe("DogImages", () => {
  it("renders component", () => {
    const { container } = render(<DogImages />);
    expect(container).toMatchSnapshot();
  });
});
