import { render } from "@testing-library/react";
import Input from "../../Components/Input";

jest.mock('react', () => {
    const ActualReact = jest.requireActual('react')
    return {
      ...ActualReact,
      useContext: () => [mockbonkAmount], 
    }
  })
  
let mockbonkAmount={bonkAmount:1}
let mockupdateBonkAmount={updateBonkAmount:jest.fn()}


jest.mock('../../hooks/useDispatcher',()=>(
    {
        useDispatcher:()=>{return mockupdateBonkAmount}
    }
))


describe('Input',()=>{

    it('renders correctly',()=>{
       const {container}= render(<Input/>)
       expect(container).toMatchSnapshot()
    })

    it('initial value is right',()=>{
        const {getByLabelText}= render(<Input/>)
         const input=getByLabelText('bonk-input')
        expect(input.value).toBe('1')
    })

    it('input value is changing right',()=>{
         mockbonkAmount={bonkAmount:6}
        const {getByLabelText}= render(<Input/>)
         const input=getByLabelText('bonk-input')
         expect(input.value).toBe('6')
    })

})
