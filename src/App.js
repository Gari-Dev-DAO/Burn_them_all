import ConnetWalletButton from './Components/ConnetWalletButton';
import { WalletConnectProvider } from './Components/WalletConnectProvider';
import '@solana/wallet-adapter-react-ui/styles.css'
import './App.css';


function App() {
  return (
   <>
  <WalletConnectProvider>
    <ConnetWalletButton/>
  </WalletConnectProvider>
   </>
  );
}

export default App;
