import { fireEvent, getByRole, render } from "@testing-library/react";
import NavBar from "../../Components/NavBar";



describe("NavBar", () => {
  it("renders component", () => {
    const { container } = render(<NavBar />);
    expect(container).toMatchSnapshot();
  });

  it('nav hides/show on Button toggle',async()=>{
    const { getByTestId } = render(<NavBar />);
    const nav=getByTestId('nav')
    expect(nav).not.toHaveClass('hide')
    const btns=getByTestId('button')
    fireEvent.click(btns);
    expect(nav).toHaveClass('hide')
  })

});
