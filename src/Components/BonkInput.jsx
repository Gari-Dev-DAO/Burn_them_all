
import { BONK_LIMIT } from "../utils/BonkAdmin"
import Input from "./Input"

const BonkInput = () => {
 
  return (
    <div className="bonkInput">
    <p className="bonkAmount">AMOUNT OF BONKS</p>
    <Input />
    <p className="bonkLimit">{BONK_LIMIT} BONK $</p>
    </div>
  )
}

export default BonkInput