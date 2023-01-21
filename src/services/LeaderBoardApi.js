import axios from "axios";
import { API_URL, BONK_LIMIT } from "../utils/BonkAdmin";

export const createAccount=async(publicKey,amountBonked)=>{
      const accountData={publicKey:publicKey,amountBonked:amountBonked,noOfTimes:amountBonked/BONK_LIMIT}
      try{
        const res = await axios.post(`${API_URL}/bonk/`,accountData);
        return res?.data;
      }
      catch(err)
      {
        console.log(err)
      }
}


export const getAllAccounts=async()=>{
    try{
      const res = await axios.get(`${API_URL}/bonk/`);
      return res?.data
    }
    catch(err)
    {
      console.log(err)
    }
}


export const updateAccount=async(id,publicKey,amountBonked)=>{
    const accountData={publicKey:publicKey,amountBonked:amountBonked,noOfTimes:amountBonked/BONK_LIMIT}
    try{
      const res = await axios.put(`${API_URL}/bonk/${id}`,accountData);
      return res
    }
    catch(err)
    {
      console.log(err)
    }
}

export const getMintAccount=async(publicKey)=>{
  try{
    const res = await axios.get(`${API_URL}/bonk/${publicKey}`);
    return res.data.nftMint
  }
  catch(err)
  {
    console.log(err)
  }
}

export const createOrUpdateAccount=async(publicKey,bonkAmount)=>{
    try{
    const res= await createAccount(publicKey.toString(),bonkAmount) //try to create a new account
    if(res?.message=='Account already exist'){
    await updateAccount(res?.id,publicKey.toString(),bonkAmount) //if exists than update data
    }}
    catch(err){
    console.log(err)
    return 'error';
    }
 
}