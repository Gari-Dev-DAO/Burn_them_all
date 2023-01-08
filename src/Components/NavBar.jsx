import ConnetWalletButton from "./ConnetWalletButton"

const NavBar = () => {
  return (
    <div className='navBar'>
        <div className="navLinkBox">
         <p>Go bank Err</p>
        </div>
        <div  className="navLinkBox" >
        <p>buy Bonk</p>
         <p>Telegram</p>
         <p>LeaderBoard</p>
        </div>
        <div className="navLinkBox">
     <ConnetWalletButton/>
        </div>
    </div>
  )
}

export default NavBar