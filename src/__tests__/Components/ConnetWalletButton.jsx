
import { render } from "@testing-library/react";
import ConnetWalletButton from "../../Components/ConnetWalletButton";


describe("Connect Wallet Button", () => {
  it("renders component", () => {
    const { container } = render(<ConnetWalletButton/>);
    expect(container).toMatchSnapshot();
  });
});
