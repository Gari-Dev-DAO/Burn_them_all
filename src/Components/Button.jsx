

const Button = ({children,onClick}) => {
  return (
    <button onClick={onClick} style={{backgroundColor:'transparent',border:'none'}}>{children}</button>
  )
}

export default Button