// import { burnNft } from "../services/nftApis"
// import { walletAdapterIdentity } from "@metaplex-foundation/js";

import { useWallet } from '@solana/wallet-adapter-react';
import { useState } from 'react';
import {  createSheild, getBalanceinWeb, Transfer } from "../services/LightApis";
import BonkButton from "../Components/BonkButton";
import UnderDog from '../Components/UnderDog';


const LightPayment = () => {
    
  const wallet = useWallet();
  const [transferValues,setTransferValues]=useState({reciever:'',amount:1})
  const [shieldAmount,setShieldAmount]=useState(1)
  
 const handleValueChange=(e)=>{
  const name=e.target.name
  setTransferValues({...transferValues,[name]:e.target.value})
 }

const handleTransfer=()=>{
  const {amount,reciever}=transferValues
  console.log(transferValues)
  
  if(!amount || !reciever)
  alert('Plz check the value')
  else
   Transfer(reciever,amount)
}

const handleShield=()=>{
   if(!shieldAmount)
   alert('Plz check the value')
   else createSheild(shieldAmount)
}

const getBalance=async()=>{
  const balance=await getBalanceinWeb()
  console.log('balance in web',balance)
  alert('balanceis',balance)
}

  return (
    <div className="light" style={{padding:'2rem 0px'}}>
      <UnderDog/>
      <div className="title" style={{display:'flex',flexDirection:'column',justifyContent:'center',width:'100%'}}>
        <p className="emText">
          MAKE THE PAYMENT
        </p>
        <p className="burnText" style={{marginRight:'15%'}}>PRIVATELY</p>
      </div>

     <div style={{display:'flex',flexDirection:'column',marginTop:'3rem',gap:'4rem'}}>
      <div style={{display:'flex',justifyContent:'center'}}>
       <BonkButton onClick={getBalance}>Check Shielded Balance</BonkButton> 
       </div>
       <div style={{display:'flex',flexDirection:'column',alignItems:'center',gap:'1.5rem'}}>
       <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}}>
       <input
        type="number"
        className="input"
        onChange={(e)=>{setShieldAmount(e.target.value)}}
        value={Math.max(shieldAmount,1)}
        aria-label="bonk-input"
        style={{width:'25%',fontSize:'1.3rem'}}
      />
       <p style={{fontWeight:'bold',color:'#ffffff'}}>SOL</p>
       </div>
       <BonkButton onClick={handleShield}>Shield Balance</BonkButton>
       </div>
     </div>
     <div style={{display:'flex',flexDirection:'column',gap:'1.5rem',alignItems:'center',marginTop:'4.5rem'}}>
     <input
        type="text"
        className="input"
        onChange={handleValueChange}
        value={transferValues.reciever}
        aria-label="bonk-input"
        style={{width:'100%',fontSize:'1.3rem'}}
        placeholder="Reciever's Address"
        name='reciever'
      />
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}}>
      <input
        type="number"
        className="input"
        onChange={handleValueChange}
        value={Math.max(transferValues.amount,1)}
        aria-label="bonk-input"
        style={{width:'20%',fontSize:'1.5rem'}}
        placeholder="AMOUNT(SOL)"
        name='amount'
      />
      <p style={{fontWeight:'bold',color:'#ffffff'}}>SOL</p>
      </div>
      <BonkButton onClick={handleTransfer}>Transfer</BonkButton>
     </div>
    </div>
  )
}

export default LightPayment
  {/* <button onClick={()=>burnNft(wallet)}>Burn</button> */}