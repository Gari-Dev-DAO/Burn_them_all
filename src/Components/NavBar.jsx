import { BsXLg } from "react-icons/bs";
import { TfiAlignJustify } from "react-icons/tfi";
import ConnetWalletButton from "./ConnetWalletButton"
import Button from "./Button";
import { useToggle } from "../hooks/useToggle";
import { NavLink } from "react-router-dom";
import UDomain from "./Udomain";

const NavBar = () => {
  const [isToggle,makeToggle]=useToggle()
  return (
    <div className='navBar'>
       <div className="toggleBar"><Button onClick={makeToggle}>{!isToggle?<TfiAlignJustify size='32' color='white'/>:<BsXLg size={32} color='white'/>}</Button></div>
       <div  className={`nav ${isToggle ? "hide" : ""}`} data-testid="nav">
        <div className="navLinkBox">
         <NavLink to='/' className="link">Burn Tokens</NavLink>
        </div>
        <div  className="navLinkBox navlinks" >
        <NavLink to={'/burn-nfts'} className="link">Burn Nfts</NavLink>
         <NavLink to={'/pay-privately'} className="link">Pay Privately</NavLink>
        </div>
        <div className="navLinkBox">
        <ConnetWalletButton />
          <UDomain />
        </div>
        </div>
    </div>
   
  )
}


export default NavBar