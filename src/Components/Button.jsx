

const Button = ({children,onClick}) => {
  return (
    <button onClick={onClick} style={{backgroundColor:'transparent',border:'none',cursor:'pointer',zIndex:200}}>{children}</button>
  )
}

export default Button