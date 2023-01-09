import { WalletConnectProvider } from './Components/WalletConnectProvider';
import '@solana/wallet-adapter-react-ui/styles.css'
import Home from './Pages/Home';
import './App.css';
import NavBar from './Components/NavBar';
import HomeState from './States/HomeState';

function App() {
  return (
   <>
  <WalletConnectProvider>
    <NavBar/>
    <HomeState>
     <Home/>
    </HomeState>
  </WalletConnectProvider>
   </>
  );
}

export default App;
