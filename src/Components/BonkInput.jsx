
import { BONK_LIMIT } from "../utils/BonkAdmin"
import Input from "./Input"
import SelectBox from "./SelectBox"

const BonkInput = () => {
 
  return (
    <div className="bonkInput">
    <p className="bonkAmount">Amount</p>
    <Input />
    {/* <p className="bonkLimit">{BONK_LIMIT} BONK $</p> */}
    <SelectBox/>
    </div>
  )
}

export default BonkInput