
const BonkButton = ({children,onClick,isDisabled}) => {
  return (
   <button onClick={onClick} disabled={isDisabled}  className='bonkBtn'>{children}</button>
  )
}

export default BonkButton
//render
//onclick should called
// if isDisabled than button should be disable else not