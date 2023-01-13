import { BsXLg } from "react-icons/bs";
import { TfiAlignJustify } from "react-icons/tfi";
import ConnetWalletButton from "./ConnetWalletButton"
import Button from "./Button";
import { useToggle } from "../hooks/useToggle";


const NavBar = () => {
  const [isToggle,makeToggle]=useToggle()
  return (
    <div className='navBar'>
       <div className="toggleBar"><Button onClick={makeToggle}>{!isToggle?<TfiAlignJustify size='32' color='white'/>:<BsXLg size={32} color='white'/>}</Button></div>
       <div  className={`nav ${isToggle ? "hide" : ""}`} data-testid="nav">
        <div className="navLinkBox">
         <a className="link">Go bonk Errs</a>
        </div>
        <div  className="navLinkBox navlinks" >
        <a href="https://www.coingecko.com/en/coins/bonk" target='_blank' className="link">Buy Bonk</a>
         <a href="https://web.telegram.org/k/#-813184380" target='_blank' className="link">Telegram</a>
        </div>
        <div className="navLinkBox">
        <ConnetWalletButton/>
        </div>
        </div>
    </div>
   
  )
}


export default NavBar