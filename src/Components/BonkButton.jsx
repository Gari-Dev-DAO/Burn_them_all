
const BonkButton = ({children,onClick,isDisabled}) => {
  return (
   <button onClick={onClick} disabled={isDisabled}  className='bonkBtn'>{children}</button>
  )
}

export default BonkButton