import { useState } from "react";
import { AiOutlineUp ,AiOutlineDown} from "react-icons/ai";
import Button from "./Button";


const Input = ({value,setValue}) => {
    

    const handleInputChange=(e)=>{
        e.preventDefault()
       setValue(e.target.value)
    }

  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',gap:'5px'}}>
    <Button onClick={()=>{setValue(value+1)}} style={{background:'none',color:'blue'}}>
    <AiOutlineUp color="#FED900"  size='25px' />
    </Button>
    <input type='number' value={value} onChange={handleInputChange} className='input' />
    <Button onClick={()=>{setValue(Math.max(1,value-1))}}>
    <AiOutlineDown color="#FED900" size='25px'/>
    </Button>
    </div>
  )
}

export default Input