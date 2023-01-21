import { ADMIN_ACCOUNT } from "../utils/BonkAdmin"
import CopyClipText from "./CopyClipText"


const Note = () => {
  return (
    <div className="note"><p><span style={{fontSize:'1rem',fontWeight:500}}> *** </span>60% of the total bonked amount is burned 40% goes to Developer Funds</p>
    <div className="noteWallet">
    <p >Wallet Address (Transfer) :</p>
    <p>
     <CopyClipText text={ADMIN_ACCOUNT} style={{fontSize:'0.5rem',color:'aqua'}}/>
     </p>
     </div>
    </div>
  )
}

export default Note