import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WalletConnectProvider } from './Components/WalletConnectProvider';
import '@solana/wallet-adapter-react-ui/styles.css'
import Home from './Pages/Home';
import './App.css';
import NavBar from './Components/NavBar';
import HomeState from './States/HomeState';
import LightPayment from './Pages/LightPayment';
import BurnNfts from './Pages/BurnNfts';
import SolanaChat from "./Components/SolanaChat";

function App() {
  return (
   <>
  <BrowserRouter>
  <WalletConnectProvider>
  
  <HomeState>
  <NavBar/> 
  <SolanaChat/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pay-privately" element={<LightPayment/>} />
        <Route path="/burn-nfts" element={<BurnNfts/>} />
      </Routes>
      </HomeState>  
      
      </WalletConnectProvider>
    </BrowserRouter>
   </>
  );
}

export default App;
