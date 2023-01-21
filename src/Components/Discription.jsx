import React from 'react'
import { useToggle } from '../hooks/useToggle'
import Button from './Button';

const Discription = ({name,description=''}) => {
 const [isToggle,makeToggle]=useToggle(true)
  return (
    <div className='discription'>
    <h5>{name}</h5>
     <p style={{fontSize:'0.7rem'}}>{isToggle?`${description?.substr(0, 20)}...`:description}</p>
     <Button onClick={makeToggle}><p style={{color:'yellow'}}>{isToggle?'read more':'read less'}</p></Button>
    </div>
  )

}

export default Discription