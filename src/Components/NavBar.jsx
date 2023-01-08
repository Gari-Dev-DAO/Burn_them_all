import ConnetWalletButton from "./ConnetWalletButton"

const NavBar = () => {
  return (
    <div className='navBar'>
        <div className="navLinkBox">
         <a className="link">Go bonk Errs</a>
        </div>
        <div  className="navLinkBox" >
        <a href="https://www.coingecko.com/en/coins/bonk" target='_blank' className="link">Buy Bonk</a>
         <a href="https://web.telegram.org/k/#-813184380" target='_blank' className="link">Telegram</a>
        </div>
        <div className="navLinkBox">
     <ConnetWalletButton/>
        </div>
    </div>
  )
}

export default NavBar