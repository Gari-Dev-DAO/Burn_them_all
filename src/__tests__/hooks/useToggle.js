import { renderHook,act } from "@testing-library/react";
import { useToggle } from "../../hooks/useToggle";

describe('useToggle',()=>{

    it('should set intial state to false',()=>{
        const {result}=renderHook(()=>useToggle())
        expect(result.current.isToggle).toBeFalsy()
    })

    it('Toggles correctly',()=>{
        const {result}=renderHook(()=>useToggle())
        expect(result.current.isToggle).toBeFalsy()
        act(()=>{
            result.current.makeToggle()
        })
        expect(result.current.isToggle).toBeTruthy()
    })
})