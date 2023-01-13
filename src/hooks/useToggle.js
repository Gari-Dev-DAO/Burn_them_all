import { useState } from "react";

export const useToggle = () => {
    const [isToggle,setIsToggle]=useState(false)
    const makeToggle=()=>{
        setIsToggle(!isToggle)
    }
    return [isToggle,makeToggle]
}

