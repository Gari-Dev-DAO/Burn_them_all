import { Transfer, createSheild, fetchBalance, getBalanceinWeb, getStatusinWeb,} from "../services/LightApis"
import { useEffect } from "react"
const PayMe = () => {
 
   getBalanceinWeb()
    getStatusinWeb()
  

  return (
    <div>
         <button onClick={createSheild}>make sheild</button>
        <button onClick={Transfer}>Pay me</button>
        <button onClick={fetchBalance}>Pay me</button>
    </div>
  )
}

export default PayMe