import { render } from "@testing-library/react";
import MeetBonk from "../../Components/MeetBonk";

describe("Bonk Title", () => {
  it("renders component", () => {
    const { container } = render(<MeetBonk />);
    expect(container).toMatchSnapshot();
  });
});