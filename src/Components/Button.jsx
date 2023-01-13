

const Button = ({children,onClick}) => {
  return (
    <button onClick={onClick} style={{backgroundColor:'transparent',border:'none',cursor:'pointer',zIndex:200}} data-testid='button'>{children}</button>
  )
}

export default Button
