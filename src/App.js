import ConnetWalletButton from './Components/ConnetWalletButton';
import { WalletConnectProvider } from './Components/WalletConnectProvider';
import '@solana/wallet-adapter-react-ui/styles.css'
import Home from './Pages/Home';
import './App.css';
import BonkInput from './Components/BonkInput';
import NavBar from './Components/NavBar';


function App() {
  return (
   <>
  <WalletConnectProvider>
    <NavBar/>
     <Home/>
  </WalletConnectProvider>
   </>
  );
}

export default App;
